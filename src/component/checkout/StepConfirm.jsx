import { Navigate, useNavigate, useOutletContext } from "react-router";
import { FaCheck, FaLock } from "react-icons/fa";
import CheckoutSummary from "./CheckoutSummary";
import { useCheckout } from "../custom_hooks/useCheckout";
import { makeModal } from "../ModalContext";
import { formatRupiah } from "../CartItem";
import { useState } from "react";
import { getImageProducts } from "../utils/image";

export default function StepConfirm() {
  const navigate = useNavigate();
  const { order } = useOutletContext();
  const { completeOrder, loading } = useCheckout();
  const { showConfirm } = makeModal();
  const [submitting, setSubmitting] = useState(false);
  const total = order.subtotal + order?.shipping_price || 0;

  if (!order.address) {
    return <Navigate to={`/checkout/${order.id}/shipping`} replace />;
  }
  if (!order.id_payment) {
    return <Navigate to={`/checkout/${order.id}/payment`} replace />;
  }

  if (loading) return <div className="p-6">Memuat Data Pesanan...</div>;

  const handlePay = async () => {
    const confirmed = await showConfirm({
      title: "Bayar sekarang?",
      message: `Total pembayaran ${formatRupiah(total)} akan diproses.`,
      confirmText: "Ya, Bayar",
      cancelText: "Batal",
    });
    if (!confirmed) return;

    setSubmitting(true);
    try {
      await completeOrder(order.id);
      navigate(`/checkout/${order.id}/success`, {
        state: { order },
      });
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <section className="grid w-full gap-10 px-8 py-10 mx-auto mb-16 max-w-300 max-lg:px-4">
      {/* Step indicator */}
      <div className="flex justify-center items-center mb-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#00C950] text-white flex items-center justify-center text-sm font-semibold"><FaCheck /></div>
          <span className="text-xs font-normal text-[#6B7280]">Pengiriman</span>
        </div>
        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#00C950]" />
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#00C950] text-white flex items-center justify-center text-sm font-semibold"><FaCheck /></div>
          <span className="text-xs font-normal text-[#6B7280]">Pembayaran</span>
        </div>
        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#00C950]" />
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-green-600 text-white flex items-center justify-center text-sm font-semibold">3</div>
          <span className="text-xs font-normal text-green-600">Konfirmasi</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-8 items-start max-lg:grid-cols-1">
        <div className="grid gap-6 bg-white border border-[#eef0f2] rounded-2xl p-6">
          <h2 className="text-xl font-medium text-[#111827]">Konfirmasi Pembayaran</h2>

          <div className="grid gap-1 p-4 rounded-xl bg-[#E5E7EB4D]">
            <h5 className="font-normal text-sm text-[#111827]">Alamat Pengiriman</h5>
            <p className="font-normal text-sm text-[#6B7280]">{order.address}</p>
          </div>

          <div className="grid gap-1 p-4 rounded-xl bg-[#E5E7EB4D]">
            <h5 className="font-normal text-sm text-[#111827]">Metode Pengiriman & Pembayaran</h5>
            <p className="font-normal text-sm text-[#6B7280]">{order.shipping_name || 'Belum dipilih'}</p>
            <p className="font-normal text-sm text-[#6B7280]">{order.payment_name || 'Belum dipilih'}</p>
          </div>

          <div className="grid gap-3 p-4 rounded-xl bg-[#E5E7EB4D]">
            <h5 className="font-normal text-sm text-[#111827]">Daftar Produk</h5>
            {order.items?.map((item) => (
              <div key={item.id_product} className="flex items-center gap-3">
                <img src={getImageProducts(item.primary_img) || '/img/placeholder.png'} alt={item.product_name_snapshot} className="w-12 h-12 object-cover rounded-lg" />
                <div className="grid items-center">
                  <h4 className="text-sm font-normal text-[#111827]">{item.product_name_snapshot}</h4>
                  <p className="text-xs font-normal text-[#6B7280]">×{item.qty}</p>
                </div>
                <span className="ml-auto text-sm font-normal text-green-600">{formatRupiah(item.price_snapshot * item.qty)}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 p-3 border border-[#DBEAFE] bg-[#EFF6FF] rounded-lg">
            <p className="text-xs font-normal text-[#5f6368]">Dengan menekan "Bayar Sekarang", kamu menyetujui Syarat & Ketentuan kami.</p>
          </div>

          <div className="flex gap-3 max-sm:flex-col">
            <button type="button" onClick={() => navigate(`/checkout/${order.id}/payment`)} className="px-5 py-3 rounded-xl border border-black/10 bg-transparent cursor-pointer text-[#111827] hover:bg-[#5f6368] hover:text-white">Kembali</button>
            <button type="button" onClick={handlePay} disabled={submitting} className="flex flex-1 justify-center items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white border-none rounded-xl p-4 text-base font-medium cursor-pointer disabled:opacity-50">
              <FaLock />
              {submitting ? "Memproses..." : `Bayar ${formatRupiah(total)} Sekarang`}
            </button>
          </div>
        </div>

        <div className="grid gap-2 max-lg:order-first">
          <CheckoutSummary order={order} />
        </div>
      </div>
    </section>
  );
}