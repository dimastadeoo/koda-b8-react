import { Navigate, useLocation, useNavigate, useOutletContext } from "react-router";
import { FaCheck, FaChevronRight, FaCreditCard } from "react-icons/fa";
import CheckoutSummary from "./CheckoutSummary";
import { makeProfile } from "../ProfileContext";

export default function StepPayment() {
  const navigate = useNavigate();
  const location = useLocation();

  const { checkout, checkoutId } = useOutletContext();
  const { updateCheckout } = makeProfile();

  const activeCheckout =
    location.state?.checkout?.id === checkoutId
      ? location.state.checkout
      : checkout;

  if (!activeCheckout.shipping) {
    return (
      <Navigate
        to={`/checkout/${checkoutId}/shipping`}
        state={{ checkout: activeCheckout }}
        replace
      />
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payment = form.get("payment");

    const updatedCheckout = updateCheckout(checkoutId, {
      payment,
      checkoutStep: "confirm",
      status: "Belum Selesai",
    });

    navigate(`/checkout/${checkoutId}/confirm`, {
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
          <div className="w-10 h-10 rounded-2xl bg-[#1A73E8] text-white flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <span className="text-xs font-normal text-[#1A73E8]">Pembayaran</span>
        </div>

        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#E5E7EB]" />

        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center text-sm font-semibold">
            3
          </div>
          <span className="text-xs font-normal text-[#6B7280]">Konfirmasi</span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-8 items-start max-lg:grid-cols-1">
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-white border border-[#eef0f2] rounded-2xl p-6"
        >
          <h2 className="text-xl font-medium flex items-center gap-2 text-[#111827]">
            <FaCreditCard className="text-[#1A73E8]" />
            Metode Pembayaran
          </h2>

          <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
            {[
              "Virtual Account BCA",
              "Virtual Account BNI",
              "Kartu Kredit / Debit",
              "Gopay",
              "Ovo",
              "Dana",
            ].map((payment, index) => (
              <label
                key={payment}
                className="flex items-center gap-2 p-3 rounded-xl border-2 border-black/10 text-[#111827] text-xs font-medium cursor-pointer hover:border-[#1A73E8] hover:bg-[#EFF6FF]"
              >
                <input
                  type="radio"
                  name="payment"
                  value={payment}
                  defaultChecked={
                    activeCheckout.payment
                      ? activeCheckout.payment === payment
                      : index === 0
                  }
                  className="accent-[#1A73E8]"
                />
                <p>{payment}</p>
              </label>
            ))}
          </div>

          <div className="flex items-center gap-2 p-3 border border-[#DBEAFE] bg-[#EFF6FF] rounded-lg">
            <p className="text-xs font-normal text-[#5f6368]">
              Informasi pembayaranmu dienkripsi dengan SSL 256-bit. Kami tidak
              menyimpan data kartu kreditmu.
            </p>
          </div>

          <div className="flex gap-3 max-sm:flex-col">
            <button
              type="button"
              onClick={() =>
                navigate(`/checkout/${checkoutId}/shipping`, {
                  state: { checkout: activeCheckout },
                })
              }
              className="px-5 py-3.25 rounded-xl border border-black/10 bg-transparent cursor-pointer text-[#111827] hover:bg-[#5f6368] hover:text-white"
            >
              Kembali
            </button>

            <button
              type="submit"
              className="flex flex-1 justify-center items-center gap-2 bg-[#1A73E8] hover:bg-[#1557B0] text-white border-none rounded-xl p-4 text-base font-medium cursor-pointer"
            >
              Lanjut ke Konfirmasi
              <FaChevronRight />
            </button>
          </div>
        </form>

        <div className="grid gap-2 max-lg:order-first">
          <CheckoutSummary checkout={activeCheckout} />
        </div>
      </div>
    </section>
  );
}