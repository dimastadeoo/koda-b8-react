import Header from "../Header"
import Footer from "../Footer"
import ProfileInfo from "../ProfileInfo"
// import { Link } from "react-router"
// import CartItem from "../CartItem"

const urlW3 = "http://www.w3.org/2000/svg"

export default function Myorder() {
    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>

            <main className="mx-auto mb-16 flex w-full max-w-300 items-center justify-center">
                <section className="flex gap-8 py-8">
                    {/* LEFT PROFILE */}
                    <div className="flex flex-col gap-4 pb-0.5">
                        <ProfileInfo />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex min-w-125 flex-col items-start gap-4">
                        <h1 className="text-xl font-medium text-[#111827]">
                            Pesanan Saya
                        </h1>

                        {/* ORDER CARD 1 */}
                        <div className="grid w-full gap-4 rounded-2xl border border-[#0000001A] bg-white p-5">
                            <div className="flex w-full justify-between">
                                <div className="grid">
                                    <h2 className="text-base font-semibold text-[#111827]">
                                        #BM98765432
                                    </h2>
                                    <p className="text-xs font-normal text-[#6B7280]">
                                        20 Mei 2026
                                    </p>
                                </div>

                                <div className="flex h-6 w-22 items-center justify-center gap-1.5 rounded-full bg-[#E5E7EB] px-3 py-1 text-xs font-normal text-[#00A63E]">
                                    <svg
                                        xmlns={urlW3}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                        <path d="m9 11 3 3L22 4" />
                                    </svg>
                                    Terkirim
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <img
                                    src="/item-1.png"
                                    alt="headphone"
                                    className="h-12 w-12 rounded-lg object-cover"
                                />

                                <div className="grid">
                                    <h2 className="text-sm font-normal text-[#111827]">
                                        Headphone Wireless Premium
                                    </h2>
                                    <p className="text-xs font-normal text-[#6B7280]">
                                        ×1 · Rp 450.000
                                    </p>
                                </div>
                            </div>

                            <div className="flex w-full justify-between border-t border-[#0000001A] pt-3">
                                <p className="text-sm font-medium text-[#6B7280]">
                                    Total:{" "}
                                    <span className="text-[#1A73E8]">
                                        Rp 450.000
                                    </span>
                                </p>

                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center rounded-lg border border-[#1A73E8] px-3 py-1.5 text-xs font-normal text-[#1A73E8]"
                                    >
                                        Lacak
                                    </button>

                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-1 rounded-lg border-none bg-[#F97316] px-3 py-1.5 text-xs font-medium text-white"
                                    >
                                        <svg
                                            xmlns={urlW3}
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                        </svg>
                                        Beri Ulasan
                                    </button>

                                    <button
                                        type="button"
                                        className="flex items-center justify-center rounded-lg border border-[#0000001A] px-3 py-1.5 text-xs font-medium text-[#6B7280]"
                                    >
                                        Beli Lagi
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* ORDER CARD 2 */}
                        <div className="grid w-full gap-4 rounded-2xl border border-[#0000001A] bg-white p-5">
                            <div className="flex w-full justify-between">
                                <div className="grid">
                                    <h2 className="text-base font-semibold text-[#111827]">
                                        #BM87654321
                                    </h2>
                                    <p className="text-xs font-normal text-[#6B7280]">
                                        26 Mei 2026
                                    </p>
                                </div>

                                <div className="flex h-6 w-22 items-center justify-center gap-1.5 rounded-full bg-[#E5E7EB] px-3 py-1 text-xs font-normal text-[#1A73E8]">
                                    <svg
                                        xmlns={urlW3}
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
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
                                    Dikirim
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <img
                                    src="/item-12.png"
                                    alt="kaos polos"
                                    className="h-12 w-12 rounded-lg object-cover"
                                />

                                <div className="grid">
                                    <h2 className="text-sm font-normal text-[#111827]">
                                        Kaos Polos Premium Cotton
                                    </h2>
                                    <p className="text-xs font-normal text-[#6B7280]">
                                        ×2 · Rp 125.000
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <img
                                    src="/item-4.png"
                                    alt="sneakers"
                                    className="h-12 w-12 rounded-lg object-cover"
                                />

                                <div className="grid">
                                    <h2 className="text-sm font-normal text-[#111827]">
                                        Sneakers Sport Runfast
                                    </h2>
                                    <p className="text-xs font-normal text-[#6B7280]">
                                        ×1 · Rp 550.000
                                    </p>
                                </div>
                            </div>

                            <div className="flex w-full justify-between border-t border-[#0000001A] pt-3">
                                <p className="text-sm font-medium text-[#6B7280]">
                                    Total:{" "}
                                    <span className="text-[#1A73E8]">
                                        Rp 800.000
                                    </span>
                                </p>

                                <div className="flex gap-2">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center rounded-lg border border-[#1A73E8] px-3 py-1.5 text-xs font-normal text-[#1A73E8]"
                                    >
                                        Lacak
                                    </button>

                                    <button
                                        type="button"
                                        className="flex items-center justify-center rounded-lg border border-[#0000001A] px-3 py-1.5 text-xs font-medium text-[#6B7280]"
                                    >
                                        Beli Lagi
                                    </button>
                                </div>
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