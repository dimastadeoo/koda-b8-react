import { Link, useLocation, useOutletContext } from "react-router";
import { FaBoxOpen, FaCheck, FaCheckCircle, FaTruck } from "react-icons/fa";

import { formatRupiah } from "../CartItem";

export default function StepSuccess() {
  const location = useLocation();
  const { checkout, checkoutId } = useOutletContext();

  const activeCheckout =
    location.state?.checkout?.id === checkoutId
      ? location.state.checkout
      : checkout;


  return (
    <section className="grid gap-8 px-4 py-12 mx-auto max-w-4xl">
      <div className="place-self-center flex justify-center items-center w-24 h-24 rounded-full bg-[#DCFCE7]">
        <FaCheckCircle className="w-12 h-12 text-[#00C950]" />
      </div>

      <div className="grid gap-2 justify-center items-center">
        <h1 className="text-center font-bold text-2xl text-[#111827]">
          Pesanan Berhasil! 🎉
        </h1>
        <p className="text-center text-base font-normal text-[#6B7280]">
          Terima kasih telah berbelanja di BeliMudah. Pesananmu sedang diproses.
        </p>
      </div>

      <div className="grid gap-4 p-6 border border-black/10 bg-white rounded-2xl">
        <div className="flex justify-between gap-6 max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1">
          <div>
            <p className="font-normal text-sm text-[#6B7280]">Nomor Pesanan</p>
            <h2 className="font-bold text-base text-[#1A73E8]">
              #{activeCheckout.id}
            </h2>
          </div>

          <div>
            <p className="font-normal text-sm text-[#6B7280]">
              Total Pembayaran
            </p>
            <h1 className="font-bold text-base text-[#111827]">
              {formatRupiah(activeCheckout.total)}
            </h1>
          </div>

          <div>
            <h4 className="text-sm font-normal text-[#111827]">
              {activeCheckout.shipping?.shippingMethod}
            </h4>
            <p className="text-xs font-normal text-[#6B7280]">
              Estimasi tiba: 3-5 hari kerja
            </p>
          </div>

          <div>
            <h4 className="text-sm font-normal text-[#111827]">
              Alamat Pengiriman
            </h4>
            <p className="text-xs font-normal text-[#6B7280]">
              {activeCheckout.shipping?.alamat}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-6 border border-black/10 bg-white rounded-2xl">
        <h2 className="text-xl font-medium flex items-center gap-2 text-[#111827]">
          Status Pesanan
        </h2>

        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#DCFCE7] shrink-0">
            <FaCheck className="text-[#00A63E]" />
          </div>

          <div className="flex flex-col">
            <p className="font-medium text-sm text-[#111827]">
              Pesanan Diterima
            </p>
            <p className="text-xs text-[#6B7280]">Baru saja</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E5E7EB] shrink-0">
            <FaBoxOpen className="text-[#6B7280]" />
          </div>

          <div className="flex flex-col">
            <p className="font-medium text-sm text-[#111827]">
              Sedang Dikemas
            </p>
            <p className="text-xs text-[#6B7280]">Estimasi 1-2 jam</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E5E7EB] shrink-0">
            <FaTruck className="text-[#6B7280]" />
          </div>

          <div className="flex flex-col">
            <p className="font-medium text-sm text-[#111827]">
              Dalam Pengiriman
            </p>
            <p className="text-xs text-[#6B7280]">3-5 hari kerja</p>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center gap-3 px-3 max-md:flex-wrap max-sm:flex-col max-sm:items-stretch">
        <Link
          to="/profile/my-orders"
          className="flex justify-center items-center gap-2 bg-[#1A73E8] hover:bg-[#1565c0] text-white border-none px-6 py-3 rounded-xl text-base font-normal cursor-pointer"
        >
          Lihat Riwayat Pesanan
        </Link>

        <Link
          to="/main"
          className="ml-auto flex items-center justify-center gap-2 text-[#1A73E8] no-underline font-normal text-base px-6 py-3 hover:underline max-md:ml-0"
        >
          Lanjut Belanja
        </Link>
      </div>
    </section>
  );
}