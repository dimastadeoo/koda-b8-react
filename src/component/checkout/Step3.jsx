import Header from "../Header"
import Footer from "../Footer"
// import { Link } from "react-router"
// import CartItem from "../CartItem"
const urlW3 = 'http://www.w3.org/2000/svg'

export default function Step3() {

    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>
            <main className="flex justify-center items-center w-full max-w-[1200px] mx-auto mb-16">
                <section className="grid w-full gap-10 px-8 py-4 max-sm:px-4">
                    {/* Stepper */}
                    <div className="flex justify-center items-center mb-2">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-2xl bg-[#00C950] text-white flex items-center justify-center text-sm font-semibold">
                                    <svg
                                        xmlns={urlW3}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                <span className="text-xs font-normal text-[#6B7280] max-sm:text-[10px]">
                                    Pengiriman
                                </span>
                            </div>

                            <div className="w-[120px] max-sm:w-[60px] mb-5 border-t-2 border-solid border-[#00C950]" />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-2xl bg-[#00C950] text-white flex items-center justify-center text-sm font-semibold">
                                    <svg
                                        xmlns={urlW3}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                                <span className="text-xs font-normal text-[#6B7280] max-sm:text-[10px]">
                                    Pembayaran
                                </span>
                            </div>
                        </div>

                        <div className="w-[120px] max-sm:w-[60px] mb-5 border-t-2 border-solid border-[#00C950]" />

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-2xl bg-[#1A73E8] text-white flex items-center justify-center text-sm font-semibold">
                                    3
                                </div>
                                <span className="text-xs font-normal text-[#1A73E8] max-sm:text-[10px]">
                                    Konfirmasi
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-[1fr_360px] gap-8 items-start max-lg:grid-cols-1">
                        {/* Left */}
                        <div className="grid gap-6 bg-white border border-[#eef0f2] rounded-2xl p-6">
                            <h2 className="text-xl font-medium flex items-center gap-2 text-[#111827]">
                                Konfirmasi Pembayaran
                            </h2>

                            {/* Alamat */}
                            <div
                                id="confirm-alamat-box"
                                className="grid gap-1 p-4 rounded-xl bg-[#E5E7EB4D]"
                            >
                                <h5 className="font-normal text-sm text-[#111827]">
                                    Alamat Pengiriman
                                </h5>
                                <p
                                    id="confirm-customer-name-phone"
                                    className="font-normal text-sm text-[#6B7280]"
                                >
                                    ---
                                </p>
                                <p
                                    id="confirm-address-detail"
                                    className="font-normal text-sm text-[#6B7280]"
                                >
                                    ---
                                </p>
                            </div>

                            {/* Shipping & Payment */}
                            <div
                                id="confirm-shipping-box"
                                className="grid gap-1 p-4 rounded-xl bg-[#E5E7EB4D]"
                            >
                                <h5 className="font-normal text-sm text-[#111827]">
                                    Metode Pengiriman & Pembayaran
                                </h5>
                                <p
                                    id="confirm-shipping-method"
                                    className="font-normal text-sm text-[#6B7280]"
                                >
                                    ---
                                </p>
                                <p
                                    id="confirm-payment-method"
                                    className="font-normal text-sm text-[#6B7280]"
                                >
                                    ---
                                </p>
                            </div>

                            {/* Produk */}
                            <div
                                id="confirm-products-container"
                                className="grid gap-3 p-4 rounded-xl bg-[#E5E7EB4D]"
                            >
                                <h5 className="font-normal text-sm text-[#111827]">
                                    Daftar Produk
                                </h5>

                                <div className="flex items-center gap-3">
                                    <img
                                        src="/item-1.png"
                                        alt="Headphone"
                                        className="w-12 h-12 object-cover rounded-lg"
                                    />

                                    <div className="grid items-center">
                                        <h4 className="text-sm font-normal text-[#111827]">
                                            Headphone Wireless Premium
                                        </h4>
                                        <p className="text-xs font-normal text-[#6B7280]">
                                            x1
                                        </p>
                                    </div>

                                    <span className="ml-auto text-sm font-normal text-[#1A73E8]">
                                        450.000
                                    </span>
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="flex items-center gap-2 p-3 border border-[#DBEAFE] bg-[#EFF6FF] rounded-lg">
                                <svg
                                    xmlns={urlW3}
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1A73E8"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="shrink-0"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                </svg>

                                <p className="text-xs font-normal text-[#5f6368]">
                                    Dengan menekan "Bayar Sekarang", kamu menyetujui Syarat &
                                    Ketentuan kami. Pembayaran baru akan diproses setelah kamu
                                    mengkonfirmasi di langkah ini.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 max-sm:flex-col">
                                <button
                                    type="button"
                                    className="px-5 py-[13px] rounded-xl border border-black/10 bg-transparent cursor-pointer text-[#111827] hover:bg-[#5f6368] hover:text-white"
                                >
                                    Kembali
                                </button>

                                <button
                                    type="button"
                                    className="flex flex-1 justify-center items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white border-none rounded-xl p-4 text-base font-medium cursor-pointer"
                                >
                                    <svg
                                        xmlns={urlW3}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    Bayar Rp 450.000 Sekarang
                                </button>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="grid gap-2 max-lg:order-first">
                            <div className="grid gap-4 p-5 bg-white border border-black/10 rounded-xl">
                                <h3 className="font-medium text-lg text-[#111827]">
                                    Ringkasan Pesanan
                                </h3>

                                <div className="flex items-center gap-2">
                                    <img
                                        src="/item-1.png"
                                        alt="Headphone"
                                        className="w-10 h-10 object-cover rounded-lg"
                                    />

                                    <div>
                                        <h4 className="font-normal text-xs text-[#6B7280]">
                                            Headphone Wireless Premium
                                        </h4>
                                    </div>

                                    <span className="ml-auto text-xs font-normal text-[#111827]">
                                        ×1
                                    </span>
                                </div>

                                <div className="grid pt-3 gap-2 border-t border-black/10">
                                    <div className="flex justify-between text-sm font-normal text-[#6B7280]">
                                        <span>Subtotal</span>
                                        <span>Rp 450.000</span>
                                    </div>

                                    <div className="flex justify-between text-sm font-normal text-[#6B7280]">
                                        <span>Ongkir</span>
                                        <span className="text-[#00A63E]">
                                            Gratis
                                        </span>
                                    </div>

                                    <div className="flex justify-between border-t border-black/10 pt-2 text-sm font-semibold text-[#1a202c]">
                                        <span>Total</span>
                                        <span className="text-[#1A73E8]">
                                            Rp 450.000
                                        </span>
                                    </div>
                                </div>

                                <p className="text-center text-xs font-normal text-[#6B7280]">
                                    🛡️ Pembayaran aman dan terenkripsi
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer id="footer">
                <Footer />
            </footer>
        </>
    )
}