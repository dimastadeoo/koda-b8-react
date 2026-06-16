import Header from "../Header"
import Footer from "../Footer"
// import { Link } from "react-router"
// import CartItem from "../CartItem"

const urlW3 = "http://www.w3.org/2000/svg"

export default function AlamatSaya() {
    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>

            <main className="mx-auto mb-16 flex w-full max-w-300 items-center justify-center">
                <section className="flex gap-8 py-8">
                    {/* LEFT PROFILE */}
                    <div className="flex flex-col gap-4 pb-1">
                        <div className="grid gap-3 rounded-2xl border border-[#0000001A] bg-white p-5">
                            <div className="flex h-16 w-16 place-self-center items-center justify-center rounded-full bg-[#1A73E81A] text-2xl font-bold text-[#1A73E8]">
                                B
                            </div>

                            <div className="grid place-self-center items-center text-center">
                                <h2 className="text-base font-semibold text-[#111827]">
                                    Budi Santoso
                                </h2>
                                <p className="text-sm font-normal text-[#6B7280]">
                                    budi@email.com
                                </p>
                            </div>

                            <div className="flex place-self-center items-center gap-4 border-t border-[#0000001A] pt-1">
                                <div className="grid items-center justify-center">
                                    <h2 className="place-self-center text-base font-semibold text-[#111827]">
                                        2
                                    </h2>
                                    <p className="place-self-center text-base font-normal text-[#6B7280]">
                                        Pesanan
                                    </p>
                                </div>

                                <div className="grid place-self-center">
                                    <h2 className="place-self-center text-base font-semibold text-[#111827]">
                                        0
                                    </h2>
                                    <p className="place-self-center text-base font-normal text-[#6B7280]">
                                        Wishlist
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* NAVIGATION */}
                        <div className="grid rounded-2xl border border-[#0000001A] bg-white">
                            <div className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm font-normal text-[#6B7280]">
                                <div className="flex w-full items-center gap-3">
                                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 10a4 4 0 0 1-8 0" />
                                        <path d="M3.103 6.034h17.794" />
                                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                                    </svg>
                                    Pesanan Saya
                                </div>

                                <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>

                            <div className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm font-normal text-[#6B7280]">
                                <div className="flex w-full items-center gap-3">
                                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                                    </svg>
                                    Wishlist
                                </div>

                                <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>

                            <div className="flex cursor-pointer items-center justify-between gap-3 bg-[#EFF6FF] p-4 text-sm font-normal text-[#1A73E8]">
                                <div className="flex w-full items-center gap-3">
                                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    Alamat Saya
                                </div>

                                <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>

                            <div className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm font-normal text-[#6B7280]">
                                <div className="flex w-full items-center gap-3">
                                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="14" x="2" y="5" rx="2" />
                                        <line x1="2" x2="22" y1="10" y2="10" />
                                    </svg>
                                    Metode Pembayaran
                                </div>

                                <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>

                            <div className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm font-normal text-[#6B7280]">
                                <div className="flex w-full items-center gap-3">
                                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    Pengaturan Profil
                                </div>

                                <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </div>

                            <div className="flex cursor-pointer items-center justify-start gap-3 p-4 text-sm font-normal text-[#DC2626]">
                                <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m16 17 5-5-5-5" />
                                    <path d="M21 12H9" />
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                </svg>
                                Keluar
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="grid min-w-125 auto-rows-max content-start gap-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-medium text-[#111827]">
                                Alamat Saya
                            </h1>

                            <button className="flex items-center justify-center gap-1 rounded-xl bg-[#1A73E8] px-4 py-2 text-sm font-normal text-white">
                                <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                                Tambah Alamat
                            </button>
                        </div>

                        {/* ADDRESS CARD 1 */}
                        <div className="grid w-full gap-3 rounded-2xl border border-[#0000001A] bg-white p-5">
                            <div className="flex w-full items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-base font-semibold text-[#111827]">
                                        Rumah (Utama)
                                    </h2>

                                    <div className="flex items-center justify-center rounded-full bg-[#1A73E8] px-2 py-0.5 text-sm font-medium text-white">
                                        Utama
                                    </div>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-[#6B7280]">
                                    <svg className="cursor-pointer" xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                    </svg>

                                    <svg className="cursor-pointer" xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 11v6" />
                                        <path d="M14 11v6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                        <path d="M3 6h18" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </div>
                            </div>

                            <div className="grid gap-1">
                                <p className="text-sm font-normal text-[#111827]">
                                    Budi Santoso · 0812-3456-7890
                                </p>
                                <p className="text-xs font-normal text-[#6B7280]">
                                    Jl. Kebon Jeruk No. 15, RT.003/RW.002
                                </p>
                                <p className="text-xs font-normal text-[#6B7280]">
                                    Jakarta Barat, DKI Jakarta 11530
                                </p>
                            </div>
                        </div>

                        {/* ADDRESS CARD 2 */}
                        <div className="grid w-full gap-3 rounded-2xl border border-[#0000001A] bg-white p-5">
                            <div className="flex w-full items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-base font-semibold text-[#111827]">
                                        Kantor
                                    </h2>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-[#6B7280]">
                                    <svg className="cursor-pointer" xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                    </svg>

                                    <svg className="cursor-pointer" xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10 11v6" />
                                        <path d="M14 11v6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                        <path d="M3 6h18" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </div>
                            </div>

                            <div className="grid gap-1">
                                <p className="text-sm font-normal text-[#111827]">
                                    Budi Santoso · 0812-3456-7890
                                </p>
                                <p className="text-xs font-normal text-[#6B7280]">
                                    Jl. Sudirman Kav. 52-53
                                </p>
                                <p className="text-xs font-normal text-[#6B7280]">
                                    Jakarta Selatan, DKI Jakarta 12190
                                </p>
                            </div>

                            <a href="#" className="text-xs font-normal text-[#1A73E8]">
                                Jadikan Alamat Utama
                            </a>
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