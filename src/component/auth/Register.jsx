import { Link } from "react-router"
const urlW3 = 'http://www.w3.org/2000/svg'

export default function Register() {
    return (
        <>
            <main
                className="bg-[#f8f9fa] font-sans h-screen w-screen overflow-hidden flex items-center justify-center p-0 md:p-4">

                <div className="w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white md:rounded-2xl md:shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <section
                        className="relative flex-1 bg-gradient-to-br from-[#1447E6] to-[#312C85] p-8 lg:p-12 text-white hidden md:flex flex-col justify-between overflow-hidden">
                        <img src="/bg-auth-regis.jpg" alt="bg auth register"
                            className="absolute inset-0 w-full h-full object-cover opacity-20 z-10" />

                            <div className="z-20 flex flex-col h-full justify-between">
                                <Link to="/main/" className="no-underline inline-block self-start">
                                    <div className="font-semibold text-base flex items-center gap-2 text-white">
                                        <span
                                            className="bg-white/15 backdrop-blur-md px-3 py-1.5 flex justify-center items-center font-normal rounded-xl text-base">B</span>
                                        <span>BeliMudah</span>
                                    </div>
                                </Link>

                                <div className="my-auto flex flex-col gap-5 max-w-[400px]">
                                    <h1 className="font-bold text-2xl lg:text-3xl leading-tight">Bergabung dengan 500.000+ pelanggan puas
                                    </h1>
                                    <ul className="list-none grid gap-3">
                                        <li className="flex items-center gap-3">
                                            <span
                                                className="flex items-center justify-center w-5 h-5 bg-[#4D61BA] border border-white/40 rounded-full shrink-0">
                                                <svg xmlns={urlW3} width="12" height="12" viewBox="0 0 24 24"
                                                    fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" className="lucide lucide-circle-check-big">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </span>
                                            <span className="text-sm text-white/80 font-normal">Akses ribuan produk dengan harga
                                                terbaik</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span
                                                className="flex items-center justify-center w-5 h-5 bg-[#4D61BA] border border-white/40 rounded-full shrink-0">
                                                <svg xmlns={urlW3} width="12" height="12" viewBox="0 0 24 24"
                                                    fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" className="lucide lucide-circle-check-big">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </span>
                                            <span className="text-sm text-white/80 font-normal">Lacak pesanan secara real-time</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <span
                                                className="flex items-center justify-center w-5 h-5 bg-[#4D61BA] border border-white/40 rounded-full shrink-0">
                                                <svg xmlns={urlW3} width="12" height="12" viewBox="0 0 24 24"
                                                    fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" className="lucide lucide-circle-check-big">
                                                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                                    <path d="m9 11 3 3L22 4" />
                                                </svg>
                                            </span>
                                            <span className="text-sm text-white/80 font-normal">Simpan wishlist & alamat favorit</span>
                                        </li>
                                    </ul>
                                </div>

                                <p className="font-normal text-xs text-white/40">© 2026 BeliMudah. Seluruh hak cipta dilindungi.</p>
                            </div>
                    </section>

                    <section className="flex-1 bg-[#FAFAFA] p-6 lg:p-6 flex flex-col justify-center overflow-y-auto h-full">
                        <div className="w-full max-w-md mx-auto grid gap-5 lg:gap-6">

                            <div className="grid gap-1">
                                <h2 className="text-xl lg:text-2xl font-bold text-[#111827]">Buat Akun Baru</h2>
                                <p className="text-sm text-[#6B7280]">Sudah punya akun? <Link to="login.html"
                                    className="text-[#1A73E8] font-medium hover:underline">Masuk</Link></p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    className="flex-1 flex items-center justify-center font-medium text-xs lg:text-sm px-3 py-2.5 rounded-xl border border-black/10 text-[#6B7280] bg-white hover:bg-gray-50 transition-colors"
                                    type="button">
                                    Google
                                </button>
                                <button
                                    className="flex-1 flex items-center justify-center font-medium text-xs lg:text-sm px-3 py-2.5 rounded-xl border border-black/10 text-[#6B7280] bg-white hover:bg-gray-50 transition-colors"
                                    type="button">
                                    Facebook
                                </button>
                            </div>

                            <div className="text-center relative my-1">
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#E5E5E5] z-10"></div>
                                <span className="relative z-20 bg-[#FAFAFA] px-3 text-xs text-[#6B7280]">atau daftar dengan email</span>
                            </div>

                            <form className="grid gap-3.5" id="formReg">
                                <div className="grid gap-1">
                                    <label className="text-xs font-medium text-[#111827]" for="name">Nama Lengkap</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3.5 text-[#6B7280]">
                                            <svg xmlns={urlW3} width="14" height="14" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="lucide lucide-user">
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </span>
                                        <input type="text" placeholder="Input Nama Lengkap Kamu" required
                                            className="w-full py-2.5 pl-10 pr-3.5 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
                                            id="name" name="name" />
                                    </div>
                                </div>

                                <div className="grid gap-1">
                                    <label className="text-xs font-medium text-[#111827]" for="email">Email</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3.5 text-[#6B7280]">
                                            <svg xmlns={urlW3} width="14" height="14" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="lucide lucide-mail">
                                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                            </svg>
                                        </span>
                                        <input type="email" placeholder="email@contoh.com" required
                                            className="w-full py-2.5 pl-10 pr-3.5 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
                                            id="email" name="email" />
                                    </div>
                                </div>

                                <div className="grid gap-1">
                                    <label className="text-xs font-medium text-[#111827]" id="pass">Kata Sandi</label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3.5 text-[#6B7280]">
                                            <svg xmlns={urlW3} width="14" height="14" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="lucide lucide-lock-keyhole">
                                                <circle cx="12" cy="16" r="1" />
                                                <rect x="3" y="10" width="18" height="12" rx="2" />
                                                <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                                            </svg>
                                        </span>
                                        <input type="password" placeholder="Minimal 6 karakter" required
                                            className="w-full py-2.5 pl-10 pr-10 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
                                            id="pass" name="pass" />
                                        <span className="to-pass absolute right-3.5 cursor-pointer text-[#8C8C8C]">
                                            <svg xmlns={urlW3} width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye">
                                                <path
                                                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <svg xmlns={urlW3} width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="lucide lucide-eye-closed-icon lucide-eye-closed hidden">
                                                <path d="m15 18-.722-3.25" />
                                                <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                                                <path d="m20 15-1.726-2.05" />
                                                <path d="m4 15 1.726-2.05" />
                                                <path d="m9 18 .722-3.25" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="grid gap-1">
                                    <label className="text-xs font-medium text-[#111827]" for="confirmPass">Masukkan Kembali Kata
                                        Sandi
                                    </label>
                                    <div className="relative flex items-center">
                                        <span className="absolute left-3.5 text-[#6B7280]">
                                            <svg xmlns={urlW3} width="14" height="14" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="lucide lucide-lock-keyhole">
                                                <circle cx="12" cy="16" r="1" />
                                                <rect x="3" y="10" width="18" height="12" rx="2" />
                                                <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                                            </svg>
                                        </span>
                                        <input type="password" placeholder="Ulangi kata sandi" required
                                            className="w-full py-2.5 pl-10 pr-10 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
                                            id="confirmPass" name="confirmPass" />
                                        <span className="to-confPass absolute right-3.5 cursor-pointer text-[#8C8C8C]">
                                            <svg xmlns={urlW3} width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye">
                                                <path
                                                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <svg xmlns={urlW3} width="14" height="14"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="lucide lucide-eye-closed-icon lucide-eye-closed hidden">
                                                <path d="m15 18-.722-3.25" />
                                                <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                                                <path d="m20 15-1.726-2.05" />
                                                <path d="m4 15 1.726-2.05" />
                                                <path d="m9 18 .722-3.25" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 mt-1">
                                    <input type="checkbox" id="remember"
                                        className="w-4 h-4 rounded border-gray-300 mt-0.5 cursor-pointer shrink-0" required />
                                        <label for="remember"
                                            className="text-[11px] text-[#6B7280] cursor-pointer select-none leading-tight">Saya menyetujui
                                            <Link to="#" className="text-[#1877F2] hover:underline">Syarat & Ketentuan</Link> dan <Link to="#"
                                                className="text-[#1877F2] hover:underline">Kebijakan Privasi</Link> BeliMudah</label>
                                </div>

                                <button type="submit"
                                    className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white border-none rounded-lg py-3 text-sm font-semibold cursor-pointer flex justify-center items-center gap-2 transition-colors mt-2 shadow-sm">
                                    Daftar Sekarang
                                    <svg xmlns={urlW3} width="18" height="18" viewBox="0 0 24 24" fill="none"
                                        stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="lucide lucide-arrow-right">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </button>
                            </form>

                            <div className="text-center text-[11px] text-[#8C8C8C]">
                                🔒 Data kamu aman dan terenkripsi
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}