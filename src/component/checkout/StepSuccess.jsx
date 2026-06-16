import Header from "../Header"
import Footer from "../Footer"
// import { Link } from "react-router"
// import CartItem from "../CartItem"
const urlW3 = 'http://www.w3.org/2000/svg'

export default function Success() {

    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>
            <main className="flex justify-center items-center mx-auto mb-16">
                <section className="grid gap-8 px-4 py-12 mx-auto">
                    {/* Success Icon */}
                    <div className="place-self-center flex justify-center items-center w-24 h-24 rounded-full bg-[#DCFCE7]">
                        <svg
                            xmlns={urlW3}
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#00C950"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                            <path d="m9 11 3 3L22 4" />
                        </svg>
                    </div>

                    {/* Message */}
                    <div className="grid gap-2 justify-center items-center">
                        <h1 className="text-center font-bold text-2xl text-[#111827]">
                            Pesanan Berhasil! 🎉
                        </h1>
                        <p className="text-center text-base font-normal text-[#6B7280]">
                            Terima kasih telah berbelanja di BeliMudah. Pesananmu sedang diproses.
                        </p>
                    </div>

                    {/* Order Info */}
                    <div className="grid gap-4 p-6 border border-black/10 bg-white rounded-2xl">
                        <div className="flex justify-between gap-6 max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1">
                            <div>
                                <p className="font-normal text-sm text-[#6B7280]">Nomor Pesanan</p>
                                <h2 id="success-order-id" className="font-bold text-base text-[#1A73E8]">
                                    #BM28371132
                                </h2>
                            </div>

                            <div>
                                <p className="font-normal text-sm text-[#6B7280]">Total Pembayaran</p>
                                <h1 id="success-total-price" className="font-bold text-base text-[#111827]">
                                    Rp. 450.000
                                </h1>
                            </div>

                            <div>
                                <h4 id="success-shipping-method" className="text-sm font-normal text-[#111827]">
                                    JNE Reguler
                                </h4>
                                <p id="success-shipping-estimation" className="text-xs font-normal text-[#6B7280]">
                                    Estimasi tiba: -
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-normal text-[#111827]">
                                    Alamat Pengiriman
                                </h4>
                                <p id="success-shipping-address" className="text-xs font-normal text-[#6B7280]">
                                    Jl. Kebon Jeruk No. 15...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Status Order */}
                    <div className="grid gap-4 p-6 border border-black/10 bg-white rounded-2xl">
                        <div className="grid gap-4">
                            <h2 className="text-xl font-medium flex items-center gap-2 text-[#111827]">
                                Status Pesanan
                            </h2>

                            {/* Step 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#DCFCE7] shrink-0">
                                    <svg
                                        xmlns={urlW3}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#00A63E"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                        <path d="m9 11 3 3L22 4" />
                                    </svg>
                                </div>

                                <div className="flex flex-col">
                                    <p className="font-medium text-sm text-[#111827]">
                                        Pesanan Diterima
                                    </p>
                                    <p className="text-xs text-[#6B7280]">
                                        Baru saja
                                    </p>
                                </div>

                                <div className="ml-auto w-6.75 h-5 px-2 py-0.5 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                                    <svg
                                        xmlns={urlW3}
                                        width="11"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#00A63E"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6 9 17l-5-5" />
                                    </svg>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E5E7EB] shrink-0">
                                    <svg
                                        xmlns={urlW3}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#6B7280"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                                        <path d="M12 22V12" />
                                        <polyline points="3.29 7 12 12 20.71 7" />
                                        <path d="m7.5 4.27 9 5.15" />
                                    </svg>
                                </div>

                                <div className="flex flex-col">
                                    <p className="font-medium text-sm text-[#111827]">
                                        Sedang Dikemas
                                    </p>
                                    <p className="text-xs text-[#6B7280]">
                                        Estimasi 1-2 jam
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E5E7EB] shrink-0">
                                    <svg
                                        xmlns={urlW3}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#6B7280"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                                        <path d="M15 18H9" />
                                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                                        <circle cx="17" cy="18" r="2" />
                                        <circle cx="7" cy="18" r="2" />
                                    </svg>
                                </div>

                                <div className="flex flex-col">
                                    <p className="font-medium text-sm text-[#111827]">
                                        Dalam Pengiriman
                                    </p>
                                    <p className="text-xs text-[#6B7280]">
                                        3-5 hari kerja
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E5E7EB] shrink-0">
                                    <svg
                                        xmlns={urlW3}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#6B7280"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>

                                <div className="flex flex-col">
                                    <p className="font-medium text-sm text-[#111827]">
                                        Terkirim
                                    </p>
                                    <p className="text-xs text-[#6B7280]">
                                        2-3 Juni 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-start items-center gap-3 px-3 max-md:flex-wrap max-sm:flex-col max-sm:items-stretch">
                        <button className="flex justify-center items-center gap-2 bg-[#1A73E8] hover:bg-[#1565c0] text-white border-none px-6 py-3 rounded-xl text-base font-normal cursor-pointer">
                            <svg
                                xmlns={urlW3}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                                <path d="M12 22V12" />
                                <polyline points="3.29 7 12 12 20.71 7" />
                                <path d="m7.5 4.27 9 5.15" />
                            </svg>
                            Lacak Pesanan
                        </button>

                        <button className="bg-transparent text-[#6B7280] border border-black/10 px-6 py-3 rounded-xl font-normal text-base cursor-pointer hover:bg-[#f5f5f5]">
                            Lihat Riwayat Pesanan
                        </button>

                        <a
                            href="/main/landing-page.html"
                            className="ml-auto flex items-center justify-center gap-2 text-[#1A73E8] no-underline font-normal text-base px-6 py-3 hover:underline max-md:ml-0"
                        >
                            Lanjut Belanja
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
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </section>
            </main>
            <footer id="footer">
                <Footer />
            </footer>
        </>
    )
}