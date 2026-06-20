import { Navigate, useLocation, useNavigate, useOutletContext } from "react-router";
import { FaCheck, FaLock } from "react-icons/fa";
import CheckoutSummary from "./CheckoutSummary";
import { makeProfile } from "../ProfileContext";
import { makeModal } from "../ModalContext";
import { formatRupiah } from "../CartItem";

export default function StepConfirm() {
  const navigate = useNavigate();
  const location = useLocation();

  const { checkout, checkoutId } = useOutletContext();
  const { completeCheckout } = makeProfile();
  const { showConfirm } = makeModal();

  const activeCheckout =
    location.state?.checkout?.id === checkoutId
      ? location.state.checkout
      : checkout;

  if (!activeCheckout.shipping) {
    return (
      <Navigate
        to={`/main/checkout/${checkoutId}/shipping`}
        state={{ checkout: activeCheckout }}
        replace
      />
    );
  }

  if (!activeCheckout.payment) {
    return (
      <Navigate
        to={`/main/checkout/${checkoutId}/payment`}
        state={{ checkout: activeCheckout }}
        replace
      />
    );
  }

  const handlePay = async () => {
    const confirmed = await showConfirm({
      title: "Bayar sekarang?",
      message: `Total pembayaran ${formatRupiah(activeCheckout.total)} akan diproses.`,
      confirmText: "Ya, Bayar",
      cancelText: "Batal",
    });

    if (!confirmed) return;

    const updatedCheckout = completeCheckout(checkoutId);

    navigate(`/main/checkout/${checkoutId}/success`, {
      state: {
        checkout: updatedCheckout,
      },
    });
  };

  return (
    <section className="grid w-full gap-10 px-8 py-10 mx-auto mb-16 max-w-300 max-lg:px-4">
      <div className="flex justify-center items-center mb-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#00C950] text-white flex items-center justify-center text-sm font-semibold">
            <FaCheck />
          </div>
          <span className="text-xs font-normal text-[#6B7280]">Pengiriman</span>
        </div>

        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#00C950]" />

        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#00C950] text-white flex items-center justify-center text-sm font-semibold">
            <FaCheck />
          </div>
          <span className="text-xs font-normal text-[#6B7280]">Pembayaran</span>
        </div>

        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#00C950]" />

        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#1A73E8] text-white flex items-center justify-center text-sm font-semibold">
            3
          </div>
          <span className="text-xs font-normal text-[#1A73E8]">Konfirmasi</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-8 items-start max-lg:grid-cols-1">
        <div className="grid gap-6 bg-white border border-[#eef0f2] rounded-2xl p-6">
          <h2 className="text-xl font-medium text-[#111827]">
            Konfirmasi Pembayaran
          </h2>

          <div className="grid gap-1 p-4 rounded-xl bg-[#E5E7EB4D]">
            <h5 className="font-normal text-sm text-[#111827]">
              Alamat Pengiriman
            </h5>
            <p className="font-normal text-sm text-[#6B7280]">
              {activeCheckout.shipping.fullName} · {activeCheckout.shipping.noHp}
            </p>
            <p className="font-normal text-sm text-[#6B7280]">
              {activeCheckout.shipping.alamat}, {activeCheckout.shipping.city},{" "}
              {activeCheckout.shipping.provinsi} {activeCheckout.shipping.kodePos}
            </p>
          </div>

          <div className="grid gap-1 p-4 rounded-xl bg-[#E5E7EB4D]">
            <h5 className="font-normal text-sm text-[#111827]">
              Metode Pengiriman & Pembayaran
            </h5>
            <p className="font-normal text-sm text-[#6B7280]">
              {activeCheckout.shipping.shippingMethod}
            </p>
            <p className="font-normal text-sm text-[#6B7280]">
              {activeCheckout.payment}
            </p>
          </div>

          <div className="grid gap-3 p-4 rounded-xl bg-[#E5E7EB4D]">
            <h5 className="font-normal text-sm text-[#111827]">
              Daftar Produk
            </h5>

            {activeCheckout.items.map((item) => (
              <div key={item.productId} className="flex items-center gap-3">
                <img
                  src={item.image?.[0]}
                  alt={item.cartNameContent}
                  className="w-12 h-12 object-cover rounded-lg"
                />

                <div className="grid items-center">
                  <h4 className="text-sm font-normal text-[#111827]">
                    {item.cartNameContent}
                  </h4>
                  <p className="text-xs font-normal text-[#6B7280]">
                    ×{item.quantity}
                  </p>
                </div>

                <span className="ml-auto text-sm font-normal text-[#1A73E8]">
                  {formatRupiah(item.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 p-3 border border-[#DBEAFE] bg-[#EFF6FF] rounded-lg">
            <p className="text-xs font-normal text-[#5f6368]">
              Dengan menekan "Bayar Sekarang", kamu menyetujui Syarat &
              Ketentuan kami.
            </p>
          </div>

          <div className="flex gap-3 max-sm:flex-col">
            <button
              type="button"
              onClick={() =>
                navigate(`/main/checkout/${checkoutId}/payment`, {
                  state: { checkout: activeCheckout },
                })
              }
              className="px-5 py-3 rounded-xl border border-black/10 bg-transparent cursor-pointer text-[#111827] hover:bg-[#5f6368] hover:text-white"
            >
              Kembali
            </button>

            <button
              type="button"
              onClick={handlePay}
              className="flex flex-1 justify-center items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white border-none rounded-xl p-4 text-base font-medium cursor-pointer"
            >
              <FaLock />
              Bayar {formatRupiah(activeCheckout.total)} Sekarang
            </button>
          </div>
        </div>

        <div className="grid gap-2 max-lg:order-first">
          <CheckoutSummary checkout={activeCheckout} />
        </div>
      </div>
    </section>
  );
}