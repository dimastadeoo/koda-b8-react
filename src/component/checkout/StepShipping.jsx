import { useNavigate, useOutletContext } from "react-router";
import { FaChevronRight, FaTruck } from "react-icons/fa";
import CheckoutSummary from "./CheckoutSummary";
import { useCheckout } from "../custom_hooks/useCheckout";
import { useState, useEffect } from "react";
import { formatRupiah } from "../CartItem";
import { makeModal } from "../ModalContext";

export default function StepShipping() {
  const navigate = useNavigate();
  const { order } = useOutletContext();
  const { updateAddress, updateShipping, fetchShippingMethods, shippingMethods, loading } = useCheckout();
  const [submitting, setSubmitting] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const {showAlert} = makeModal()

  useEffect(() => {
    fetchShippingMethods();
  }, [fetchShippingMethods]);

  // Set default selected shipping from order if exists
  useEffect(() => {
    setTimeout(()=>{
      if (shippingMethods.length > 0 && order.id_shipping) {
        const found = shippingMethods.find(m => m.id === order.id_shipping);
        setSelectedShipping(found || shippingMethods[0]);
      } else if (shippingMethods.length > 0) {
        setSelectedShipping(shippingMethods[0]);
      }
    })
  }, [shippingMethods, order.id_shipping]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      // Update address
      await updateAddress(order.id, data.alamat);
      // Update shipping
      await updateShipping(order.id, parseInt(data.shippingMethodId));
      navigate(`/checkout/${order.id}/payment`, {
        state: { order },
      });
    } catch(err) {
      await showAlert({
        title: "Checkout Gagal",
        message: err,
      });
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-6">Memuat metode pengiriman...</div>;

  return (
    <section className="grid w-full gap-10 px-8 py-10 mx-auto mb-16 max-w-300 max-lg:px-4">
      {/* Step indicator */}
      <div className="flex justify-center items-center mb-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-green-600 text-white flex items-center justify-center text-sm font-semibold">1</div>
          <span className="text-xs font-normal text-green-600">Pengiriman</span>
        </div>
        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#E5E7EB]" />
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center text-sm font-semibold">2</div>
          <span className="text-xs max-sm:text-[10px] font-normal text-[#6B7280]">Pembayaran</span>
        </div>
        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#E5E7EB]" />
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center text-sm font-semibold">3</div>
          <span className="text-xs max-sm:text-[10px] font-normal text-[#6B7280]">Konfirmasi</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-8 items-start max-lg:grid-cols-1">
        <form onSubmit={handleSubmit} className="bg-white border border-[#eef0f2] rounded-2xl p-6 grid gap-6">
          <h2 className="text-xl font-medium flex items-center gap-2 text-[#111827]">
            <FaTruck className="text-green-600" />
            Alamat Pengiriman
          </h2>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="text-xs text-[#6B7280] font-medium">Nama Penerima *</label>
              <input id="fullName" name="fullName" type="text" required defaultValue={order.shipping_name || ""} className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="noHp" className="text-xs text-[#6B7280] font-medium">Nomor Telepon *</label>
              <input id="noHp" name="noHp" type="text" required defaultValue={order.shipping_phone || ""} className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none" />
            </div>
            <div className="flex flex-col gap-1.5 col-span-2 max-sm:col-span-1">
              <label htmlFor="alamat" className="text-xs text-[#6B7280] font-medium">Alamat Lengkap *</label>
              <input id="alamat" name="alamat" type="text" required defaultValue={order.address || ""} className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="city" className="text-xs text-[#6B7280] font-medium">Kota *</label>
              <input id="city" name="city" type="text" required defaultValue={order.city || ""} className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="provinsi" className="text-xs text-[#6B7280] font-medium">Provinsi *</label>
              <input id="provinsi" name="provinsi" type="text" required defaultValue={order.province || ""} className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="kodePos" className="text-xs text-[#6B7280] font-medium">Kode Pos *</label>
              <input id="kodePos" name="kodePos" type="text" required defaultValue={order.postal_code || ""} className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="note" className="text-xs text-[#6B7280] font-medium">Catatan</label>
              <input id="note" name="note" type="text" defaultValue={order.note || ""} className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none" />
            </div>
          </div>

          <div className="grid gap-3">
            <h2 className="text-xl font-medium text-[#111827]">Metode Pengiriman</h2>
            {shippingMethods.map((method) => (
              <label key={method.id} className={`flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all hover:border-green-600 hover:bg-[#f0f7ff] ${selectedShipping?.id === method.id ? 'border-green-600 bg-[#f0f7ff]' : 'border-[#e2e8f0]'}`}>
                <input
                  type="radio"
                  name="shippingMethodId"
                  value={method.id}
                  checked={selectedShipping?.id === method.id}
                  onChange={() => setSelectedShipping(method)}
                  className="w-4.5 h-4.5 accent-green-600"
                />
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm font-medium text-[#111827]">{method.name}</span>
                  <span className="text-xs text-[#718096]">{method.duration || 'Estimasi 3-5 hari'}</span>
                </div>
                <span className="text-sm font-medium text-[#2ec4b6]">{method.price === 0 ? "GRATIS" : formatRupiah(method.price)}</span>
              </label>
            ))}
          </div>

          <button type="submit" disabled={submitting} className="flex flex-1 justify-center items-center gap-2 bg-green-600 hover:bg-green-800 text-white border-none rounded-xl p-4 text-base font-medium cursor-pointer disabled:opacity-50">
            {submitting ? "Menyimpan..." : "Lanjut ke Pembayaran"}
            <FaChevronRight />
          </button>
        </form>

        <div className="grid gap-2 max-lg:order-first">
          <CheckoutSummary order={order} />
        </div>
      </div>
    </section>
  );
}