import { Navigate, useNavigate, useOutletContext } from "react-router";
import { FaCheck, FaChevronRight, FaCreditCard } from "react-icons/fa";
import CheckoutSummary from "./CheckoutSummary";
import { useCheckout } from "../custom_hooks/useCheckout";
import { useState, useEffect } from "react";
import { makeModal } from "../ModalContext";

export default function StepPayment() {
  const navigate = useNavigate();
  const { order } = useOutletContext();
  const { updatePayment, fetchPaymentMethods, paymentMethods, loading } = useCheckout();
  const [submitting, setSubmitting] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const {showAlert} = makeModal()

  useEffect(() => {
    fetchPaymentMethods();
  }, [fetchPaymentMethods]);

  useEffect(() => {
    setTimeout(()=>{
      if (paymentMethods.length > 0 && order.id_payment) {
        const found = paymentMethods.find(m => m.id === order.id_payment);
        setSelectedPayment(found || paymentMethods[0]);
      } else if (paymentMethods.length > 0) {
        setSelectedPayment(paymentMethods[0]);
      }
    })
  }, [paymentMethods, order.id_payment]);

  if (!order.address) {
    return <Navigate to={`/checkout/${order.id}/shipping`} replace />;
  }

  if (loading) return <div className="p-6">Memuat metode pembayaran...</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    const paymentId = parseInt(form.get("payment"));
    try {
      await updatePayment(order.id, paymentId);
      navigate(`/checkout/${order.id}/confirm`, {
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
          <div className="w-10 h-10 rounded-2xl bg-green-600 text-white flex items-center justify-center text-sm font-semibold">2</div>
          <span className="text-xs font-normal text-green-600">Pembayaran</span>
        </div>
        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#E5E7EB]" />
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center text-sm font-semibold">3</div>
          <span className="text-xs font-normal text-[#6B7280]">Konfirmasi</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-8 items-start max-lg:grid-cols-1">
        <form onSubmit={handleSubmit} className="grid gap-6 bg-white border border-[#eef0f2] rounded-2xl p-6">
          <h2 className="text-xl font-medium flex items-center gap-2 text-[#111827]">
            <FaCreditCard className="text-green-600" />
            Metode Pembayaran
          </h2>

          <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
            {paymentMethods.map((method) => (
              <label key={method.id} className={`flex items-center gap-2 p-3 rounded-xl border-2 text-[#111827] text-xs font-medium cursor-pointer hover:border-green-600 hover:bg-[#EFF6FF] ${selectedPayment?.id === method.id ? 'border-green-600 bg-[#EFF6FF]' : 'border-black/10'}`}>
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={selectedPayment?.id === method.id}
                  onChange={() => setSelectedPayment(method)}
                  className="accent-green-600"
                />
                <p>{method.name}</p>
              </label>
            ))}
          </div>

          <div className="flex items-center gap-2 p-3 border border-[#DBEAFE] bg-[#EFF6FF] rounded-lg">
            <p className="text-xs font-normal text-[#5f6368]">Informasi pembayaranmu dienkripsi dengan SSL 256-bit. Kami tidak menyimpan data kartu kreditmu.</p>
          </div>

          <div className="flex gap-3 max-sm:flex-col">
            <button type="button" onClick={() => navigate(`/checkout/${order.id}/shipping`)} className="px-5 py-3.25 rounded-xl border border-black/10 bg-transparent cursor-pointer text-[#111827] hover:bg-[#5f6368] hover:text-white">Kembali</button>
            <button type="submit" disabled={submitting} className="flex flex-1 justify-center items-center gap-2 bg-green-600 hover:bg-green-800 text-white border-none rounded-xl p-4 text-base font-medium cursor-pointer disabled:opacity-50">
              {submitting ? "Menyimpan..." : "Lanjut ke Konfirmasi"}
              <FaChevronRight />
            </button>
          </div>
        </form>

        <div className="grid gap-2 max-lg:order-first">
          <CheckoutSummary order={order} />
        </div>
      </div>
    </section>
  );
}