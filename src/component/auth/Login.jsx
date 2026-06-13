import { Link } from "react-router"
const urlW3 = 'http://www.w3.org/2000/svg'

export default function Login() {


    return (
        <>
            <main
                className="bg-[#f8f9fa] font-sans h-screen w-screen overflow-hidden flex items-center justify-center p-0 md:p-4">

                <div className="w-full h-full md:h-auto md:max-h-[90vh] md:max-w-5xl bg-white md:rounded-2xl md:shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <section
                        className="relative flex-1 bg-gradient-to-br from-[#1447E6] to-[#312C85] p-8 lg:p-12 text-white hidden md:flex flex-col justify-between overflow-hidden">
                        <img src="/bg-auth.jpg" alt="bg-auth"
                            className="absolute inset-0 w-full h-full object-cover opacity-20 z-10" />
                        <div className="z-20 flex flex-col h-full justify-between">
                            <Link to="/main/" className="no-underline inline-block self-start">
                                <div className="font-semibold text-base flex items-center gap-2 text-white">
                                    <span
                                        className="bg-white/15 backdrop-blur-md px-3 py-1.5 flex justify-center items-center font-normal rounded-xl text-base">B</span>
                                    <span>BeliMudah</span>
                                </div>
                            </Link>
                            <div className="my-auto flex flex-col gap-6 max-w-[400px]">
                                <div className="grid gap-2">
                                    <h1 className="font-bold text-2xl lg:text-3xl leading-tight">Belanja lebih mudah, hidup lebih
                                        praktis</h1>
                                    <p className="text-sm text-white/70 font-normal">Ribuan produk pilihan dengan harga terbaik,
                                        pengiriman cepat, dan pembayaran yang aman.</p>
                                </div>
                                <div className="flex gap-6 border-t border-white/10 pt-4">
                                    <div className="flex-1">
                                        <h3 className="text-lg lg:text-xl font-bold">10rb+</h3>
                                        <p className="text-xs text-white/60">Produk</p>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg lg:text-xl font-bold">500rb+</h3>
                                        <p className="text-xs text-white/60">Pelanggan</p>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg lg:text-xl font-bold">4.8 ★</h3>
                                        <p className="text-xs text-white/60">Rating</p>
                                    </div>
                                </div>
                            </div>
                            <p className="font-normal text-xs text-white/40">© 2026 BeliMudah. Seluruh hak cipta dilindungi.</p>
                        </div>
                    </section>
                    <section className="flex-1 bg-[#FAFAFA] p-6 lg:p-6 flex flex-col justify-center overflow-y-auto h-full">
                        <div className="w-full max-w-md mx-auto grid gap-5 lg:gap-6">
                            <div className="grid gap-1">
                                <h2 className="text-xl lg:text-2xl font-bold text-[#111827]">Masuk ke Akun</h2>
                                <p className="text-sm text-[#6B7280]">Belum punya akun? <Link to="/auth/register"
                                    className="text-[#1A73E8] font-medium hover:underline">Daftar gratis</Link></p>
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
                                <span className="relative z-20 bg-[#FAFAFA] px-3 text-xs text-[#6B7280]">atau masuk dengan email</span>
                            </div>
                            <form className="grid gap-4" id="formLogin">
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
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-medium text-[#111827]" for="pass">Kata Sandi</label>
                                        <Link to="forgot-password" className="text-xs text-[#1A73E8] hover:underline">Lupa kata
                                            sandi?</Link>
                                    </div>
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
                                        <input type="password" placeholder="Masukkan kata sandi" required
                                            className="w-full py-2.5 pl-10 pr-10 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
                                            id="pass" name="pass" />
                                        <span className="to-pass absolute right-3.5 cursor-pointer text-[#8C8C8C]">
                                            <svg xmlns={urlW3} width="14" height="14" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="lucide lucide-eye">
                                                <path
                                                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
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
                                <div className="flex items-center gap-2 mt-1">
                                    <input type="checkbox" id="remember"
                                        className="w-4 h-4 rounded border-gray-300 cursor-pointer shrink-0" />
                                    <label for="remember" className="text-xs text-[#6B7280] cursor-pointer select-none">Ingat saya
                                        selama 30 hari</label>
                                </div>
                                <button type="submit"
                                    className="w-full bg-[#1A73E8] hover:bg-[#1565C0] text-white border-none rounded-lg py-3 text-sm font-semibold cursor-pointer flex justify-center items-center gap-2 transition-colors mt-2 shadow-sm">
                                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none"
                                        stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="lucide lucide-log-in">
                                        <path d="m10 17 5-5-5-5" />
                                        <path d="M15 12H3" />
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                                    </svg>
                                    Masuk
                                </button>
                            </form>
                            <div className="grid gap-3 text-center border-t border-gray-100 pt-4">
                                <p className="text-[11px] text-[#8C8C8C]">🔒 Login aman dengan enkripsi SSL 256-bit</p>
                                <p className="text-[11px] text-[#8C8C8C] leading-normal px-2">
                                    Dengan masuk, kamu menyetujui <Link to="#" className="text-[#1877F2] hover:underline">Syarat &
                                        Ketentuan</Link> dan <Link to="#" className="text-[#1877F2] hover:underline">Kebijakan Privasi</Link>
                                    kami.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

            </main>
        </>
    )
}