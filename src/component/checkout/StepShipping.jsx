import { useLocation, useNavigate, useOutletContext } from "react-router";
import { FaChevronRight, FaTruck } from "react-icons/fa";
import CheckoutSummary from "./CheckoutSummary";
import { makeProfile } from "../ProfileContext";

export default function StepShipping() {
  const navigate = useNavigate();
  const location = useLocation();

  const { checkout, checkoutId } = useOutletContext();
  const { profile, addresses, updateCheckout } = makeProfile();

  const activeCheckout =
    location.state?.checkout?.id === checkoutId
      ? location.state.checkout
      : checkout;

  const primaryAddress = addresses.find((item) => item.isPrimary);
  const shipping = activeCheckout.shipping;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());

    const updatedCheckout = updateCheckout(checkoutId, {
      shipping: data,
      checkoutStep: "payment",
      status: "Belum Selesai",
    });

    navigate(`/checkout/${checkoutId}/payment`, {
      state: {
        checkout: updatedCheckout,
      },
    });
  };

  return (
    <section className="grid w-full gap-10 px-8 py-10 mx-auto mb-16 max-w-300 max-lg:px-4">
      <div className="flex justify-center items-center mb-2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-green-600 text-white flex items-center justify-center text-sm font-semibold">
            1
          </div>
          <span className="text-xs font-normal text-green-600">
            Pengiriman
          </span>
        </div>

        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#E5E7EB]" />

        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <span className="text-xs max-sm:text-[10px] font-normal text-[#6B7280]">
            Pembayaran
          </span>
        </div>

        <div className="w-30 max-sm:w-15 mb-5 border-t-2 border-solid border-[#E5E7EB]" />

        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center text-sm font-semibold">
            3
          </div>
          <span className="text-xs max-sm:text-[10px] font-normal text-[#6B7280]">
            Konfirmasi
          </span>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-8 items-start max-lg:grid-cols-1">
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#eef0f2] rounded-2xl p-6 grid gap-6"
        >
          <h2 className="text-xl font-medium flex items-center gap-2 text-[#111827]">
            <FaTruck className="text-green-600" />
            Alamat Pengiriman
          </h2>

          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="fullName" className="text-xs text-[#6B7280] font-medium">
                Nama Penerima *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                defaultValue={shipping?.fullName || primaryAddress?.receiverName || profile?.name || ""}
                className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="noHp" className="text-xs text-[#6B7280] font-medium">
                Nomor Telepon *
              </label>
              <input
                id="noHp"
                name="noHp"
                type="text"
                required
                defaultValue={shipping?.noHp || primaryAddress?.phone || profile?.noTelp || ""}
                className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
              />
            </div>

            <div className="hidden">
              <label htmlFor="email" className="text-xs text-[#6B7280] font-medium">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                readOnly
                value={profile?.email || ""}
                className="p-3 bg-[#e5e7eb] border border-[#e2e8f0] rounded-lg text-sm outline-none text-[#6B7280]"
              />
            </div>

            <div className="flex flex-col gap-1.5 col-span-2 max-sm:col-span-1">
              <label htmlFor="alamat" className="text-xs text-[#6B7280] font-medium">
                Alamat Lengkap *
              </label>
              <input
                id="alamat"
                name="alamat"
                type="text"
                required
                defaultValue={shipping?.alamat || primaryAddress?.detail || ""}
                className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="city" className="text-xs text-[#6B7280] font-medium">
                Kota *
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                defaultValue={shipping?.city || primaryAddress?.city || ""}
                className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="provinsi" className="text-xs text-[#6B7280] font-medium">
                Provinsi *
              </label>
              <input
                id="provinsi"
                name="provinsi"
                type="text"
                required
                defaultValue={shipping?.provinsi || ""}
                className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="kodePos" className="text-xs text-[#6B7280] font-medium">
                Kode Pos *
              </label>
              <input
                id="kodePos"
                name="kodePos"
                type="text"
                required
                defaultValue={shipping?.kodePos || primaryAddress?.postalCode || ""}
                className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="note" className="text-xs text-[#6B7280] font-medium">
                Catatan
              </label>
              <input
                id="note"
                name="note"
                type="text"
                defaultValue={shipping?.note || ""}
                className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid gap-3">
            <h2 className="text-xl font-medium text-[#111827]">
              Metode Pengiriman
            </h2>

            {["JNE Reguler", "JNE Express", "Same Day Delivery"].map((item, index) => (
              <label
                key={item}
                className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-lg cursor-pointer transition-all hover:border-green-600 hover:bg-[#f0f7ff]"
              >
                <input
                  type="radio"
                  name="shippingMethod"
                  value={item}
                  defaultChecked={
                    shipping?.shippingMethod
                      ? shipping.shippingMethod === item
                      : index === 0
                  }
                  className="w-4.5 h-4.5 accent-green-600"
                />

                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-sm font-medium text-[#111827]">
                    {item}
                  </span>
                  <span className="text-xs text-[#718096]">
                    {index === 0 ? "3-5 hari kerja" : index === 1 ? "1-2 hari kerja" : "Hari ini"}
                  </span>
                </div>

                <span className="text-sm font-medium text-[#2ec4b6]">
                  GRATIS
                </span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="flex flex-1 justify-center items-center gap-2 bg-green-600 hover:bg-green-800 text-white border-none rounded-xl p-4 text-base font-medium cursor-pointer"
          >
            Lanjut ke Pembayaran
            <FaChevronRight />
          </button>
        </form>

        <div className="grid gap-2 max-lg:order-first">
          <CheckoutSummary checkout={activeCheckout} />
        </div>
      </div>
    </section>
  );
}