import Header from "../Header"
import Footer from "../Footer"
import ProfileInfo from "../ProfileInfo"
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
                        <ProfileInfo />
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