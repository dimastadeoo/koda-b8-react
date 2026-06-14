import Header from "../Header"
import Footer from "../Footer"
// import { Link } from "react-router"
// import CartItem from "../CartItem"
const urlW3 = 'http://www.w3.org/2000/svg'

export default function Step2() {

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
                                <div className="w-10 h-10 rounded-2xl bg-[#1A73E8] text-white flex items-center justify-center text-sm font-semibold">
                                    2
                                </div>
                                <span className="text-xs font-normal text-[#1A73E8] max-sm:text-[10px]">
                                    Pembayaran
                                </span>
                            </div>
                        </div>

                        <div className="w-[120px] max-sm:w-[60px] mb-5 border-t-2 border-solid border-[#E5E7EB]" />

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-2xl bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center text-sm font-semibold">
                                    3
                                </div>
                                <span className="text-xs font-normal text-[#6B7280] max-sm:text-[10px]">
                                    Konfirmasi
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-[1fr_360px] gap-8 items-start max-lg:grid-cols-1">
                        {/* Left */}
                        <form className="grid gap-6 bg-white border border-[#eef0f2] rounded-2xl p-6">
                            <h2 className="text-xl font-medium flex items-center gap-2 text-[#111827]">
                                <svg
                                    xmlns={urlW3}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1A73E8"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="14" x="2" y="5" rx="2" />
                                    <line x1="2" x2="22" y1="10" y2="10" />
                                </svg>
                                Metode Pembayaran
                            </h2>

                            {/* Payment Options */}
                            <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
                                <label className="flex items-center gap-2 p-3 rounded-xl border-2 border-[#1A73E8] bg-[#EFF6FF] text-[#111827] text-xs font-medium cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        defaultChecked
                                        className="accent-[#1A73E8]"
                                    />
                                    <p>🏦 Virtual Account BCA</p>
                                </label>

                                <label className="flex items-center gap-2 p-3 rounded-xl border-2 border-black/10 text-[#111827] text-xs font-medium cursor-pointer hover:border-[#1A73E8] hover:bg-[#EFF6FF]">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="accent-[#1A73E8]"
                                    />
                                    <p>🏦 Virtual Account BNI</p>
                                </label>

                                <label className="flex items-center gap-2 p-3 rounded-xl border-2 border-black/10 text-[#111827] text-xs font-medium cursor-pointer hover:border-[#1A73E8] hover:bg-[#EFF6FF]">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="accent-[#1A73E8]"
                                    />
                                    <p>💳 Kartu Kredit / Debit</p>
                                </label>

                                <label className="flex items-center gap-2 p-3 rounded-xl border-2 border-black/10 text-[#111827] text-xs font-medium cursor-pointer hover:border-[#1A73E8] hover:bg-[#EFF6FF]">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="accent-[#1A73E8]"
                                    />
                                    <p>📱 Gopay</p>
                                </label>

                                <label className="flex items-center gap-2 p-3 rounded-xl border-2 border-black/10 text-[#111827] text-xs font-medium cursor-pointer hover:border-[#1A73E8] hover:bg-[#EFF6FF]">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="accent-[#1A73E8]"
                                    />
                                    <p>📱 Ovo</p>
                                </label>

                                <label className="flex items-center gap-2 p-3 rounded-xl border-2 border-black/10 text-[#111827] text-xs font-medium cursor-pointer hover:border-[#1A73E8] hover:bg-[#EFF6FF]">
                                    <input
                                        type="radio"
                                        name="payment"
                                        className="accent-[#1A73E8]"
                                    />
                                    <p>📱 Dana</p>
                                </label>
                            </div>

                            {/* Info Box */}
                            <div className="flex items-center gap-2 p-3 border border-[#DBEAFE] bg-[#EFF6FF] rounded-lg">
                                <svg
                                    xmlns={urlW3}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#1A73E8"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="shrink-0"
                                >
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>

                                <p className="text-xs font-normal text-[#5f6368]">
                                    Informasi pembayaranmu dienkripsi dengan SSL 256-bit. Kami tidak
                                    menyimpan data kartu kreditmu.
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
                                    type="submit"
                                    className="flex flex-1 justify-center items-center gap-2 bg-[#1A73E8] hover:bg-[#1557B0] text-white border-none rounded-xl p-4 text-base font-medium cursor-pointer"
                                >
                                    Lanjut ke Pembayaran

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
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </form>

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
                                        <span className="text-[#00A63E]">Gratis</span>
                                    </div>

                                    <div className="flex justify-between border-t border-black/10 pt-2 text-sm font-semibold text-[#1a202c]">
                                        <span>Total</span>
                                        <span className="text-[#1A73E8]">Rp 450.000</span>
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