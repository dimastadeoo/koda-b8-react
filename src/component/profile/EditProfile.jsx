import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router"
import ProfileInfo from "../ProfileInfo";
// import CartItem from "../CartItem"

const urlW3 = "http://www.w3.org/2000/svg"

export default function EditProfile() {
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
                    <form className="flex min-w-125 flex-col items-start gap-4">
                        <div className="flex w-full items-center justify-between">
                            <h1 className="text-xl font-medium text-[#111827]">
                                Pengaturan profil
                            </h1>

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-1 rounded-xl border border-[#1A73E8] bg-transparent px-4 py-2 text-sm font-medium text-[#1A73E8]"
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
                                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                                </svg>
                                Simpan
                            </button>
                        </div>

                        {/* FORM EDIT PROFILE */}
                        <div className="grid w-full gap-5 rounded-2xl border border-[#0000001A] bg-white p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1A73E81A] text-xl font-bold text-[#1A73E8]">
                                    B
                                </div>

                                <button className="cursor-pointer text-xs font-normal text-[#1A73E8]">
                                    Ganti Foto Profil
                                </button>
                            </div>

                            <div className="grid w-full gap-1">
                                <label htmlFor="name" className="text-xs font-normal text-[#6B7280]">
                                    Nama Lengkap
                                </label>
                                <input
                                    className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
                                    id="name"
                                    name="name"
                                    type="text"
                                    defaultValue="Dimas Tadeo"
                                />
                            </div>

                            <div className="grid w-full gap-1">
                                <label htmlFor="email" className="text-xs font-normal text-[#6B7280]">
                                    Email
                                </label>
                                <input
                                    className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
                                    id="email"
                                    name="email"
                                    type="email"
                                    defaultValue="dimas@contoh.com"
                                />
                            </div>

                            <div className="grid w-full gap-1">
                                <label htmlFor="noTelp" className="text-xs font-normal text-[#6B7280]">
                                    Nomor Telepon
                                </label>
                                <input
                                    className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
                                    id="noTelp"
                                    name="noTelp"
                                    type="tel"
                                    defaultValue="086745231908"
                                />
                            </div>

                            <div className="grid w-full gap-1">
                                <label htmlFor="birth" className="text-xs font-normal text-[#6B7280]">
                                    Tanggal Lahir
                                </label>
                                <input
                                    className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
                                    id="birth"
                                    name="birth"
                                    type="date"
                                    defaultValue="2020-12-12"
                                />
                            </div>

                            <div className="grid w-full gap-1">
                                <label htmlFor="gender" className="text-xs font-normal text-[#6B7280]">
                                    Jenis Kelamin
                                </label>
                                <input
                                    className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
                                    id="gender"
                                    name="gender"
                                    type="text"
                                    defaultValue="Laki - Laki"
                                />
                            </div>
                        </div>

                        {/* SECURITY */}
                        <div className="grid w-full gap-3.5 rounded-2xl border border-[#0000001A] bg-white p-6">
                            <p className="text-base font-semibold text-[#111827]">
                                Keamanan Akun
                            </p>

                            <Link to="#" className="text-xs font-normal text-[#1A73E8]">
                                Ubah kata sandi
                            </Link>

                            <Link to="#" className="text-xs font-normal text-[#1A73E8]">
                                Aktifkan verifikasi 2 langkah
                            </Link>
                        </div>
                    </form>
                </section>
            </main>

            <footer id="footer">
                <Footer />
            </footer>
        </>
    )
}