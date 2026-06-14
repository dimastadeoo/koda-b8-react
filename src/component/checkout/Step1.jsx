import Header from "../Header"
import Footer from "../Footer"
// import { Link } from "react-router"
// import CartItem from "../CartItem"
const urlW3 = 'http://www.w3.org/2000/svg'

export default function Step1() {
    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>
            <main>
                <section className="grid w-full gap-10 px-8 py-16 mx-auto mb-16 max-w-[1200px] max-lg:px-4">
                    {/* Stepper */}
                    <div className="flex justify-center items-center mb-2">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-2xl bg-[#1A73E8] text-white flex items-center justify-center text-sm font-semibold">
                                    1
                                </div>
                                <span className="text-xs font-normal text-[#1A73E8]">
                                    Pengiriman
                                </span>
                            </div>

                            <div className="w-30 max-sm:w-[60px] mb-5 border-t-2 border-solid border-[#E5E7EB]" />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-2xl bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center text-sm font-semibold">
                                    2
                                </div>
                                <span className="text-xs max-sm:text-[10px] font-normal text-[#6B7280]">
                                    Pembayaran
                                </span>
                            </div>

                            <div className="w-[120px] max-sm:w-[60px] mb-5 border-t-2 border-solid border-[#E5E7EB]" />
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-2xl bg-[#E5E7EB] text-[#6B7280] flex items-center justify-center text-sm font-semibold">
                                    3
                                </div>
                                <span className="text-xs max-sm:text-[10px] font-normal text-[#6B7280]">
                                    Konfirmasi
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-[1fr_360px] gap-8 items-start max-lg:grid-cols-1">
                        {/* Left */}
                        <form className="bg-white border border-[#eef0f2] rounded-2xl p-6 grid gap-6">
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
                                    className="lucide lucide-truck"
                                >
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                                    <path d="M15 18H9" />
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                                    <circle cx="17" cy="18" r="2" />
                                    <circle cx="7" cy="18" r="2" />
                                </svg>
                                Alamat Pengiriman
                            </h2>

                            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="fullName" className="text-xs text-[#6B7280] font-medium">
                                        Nama Penerima *
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        required
                                        className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="noHp" className="text-xs text-[#6B7280] font-medium">
                                        Nomor Telepon *
                                    </label>
                                    <input
                                        id="noHp"
                                        name="noHp"
                                        type="text"
                                        required
                                        className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5 col-span-2 max-sm:col-span-1">
                                    <label htmlFor="email" className="text-xs text-[#6B7280] font-medium">
                                        Email *
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5 col-span-2 max-sm:col-span-1">
                                    <label htmlFor="alamat" className="text-xs text-[#6B7280] font-medium">
                                        Alamat Lengkap *
                                    </label>
                                    <input
                                        id="alamat"
                                        name="alamat"
                                        type="text"
                                        required
                                        className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="city" className="text-xs text-[#6B7280] font-medium">
                                        Kota *
                                    </label>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        required
                                        className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="provinsi" className="text-xs text-[#6B7280] font-medium">
                                        Provinsi *
                                    </label>
                                    <input
                                        id="provinsi"
                                        name="provinsi"
                                        type="text"
                                        required
                                        className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="kodePos" className="text-xs text-[#6B7280] font-medium">
                                        Kode Pos *
                                    </label>
                                    <input
                                        id="kodePos"
                                        name="kodePos"
                                        type="text"
                                        required
                                        className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="note" className="text-xs text-[#6B7280] font-medium">
                                        Catatan (opsional)
                                    </label>
                                    <input
                                        id="note"
                                        name="note"
                                        type="text"
                                        className="p-3 bg-[#f4f5f7] border border-[#e2e8f0] rounded-lg text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Shipping */}
                            <div className="grid gap-3">
                                <h2 className="text-xl font-medium flex items-center gap-2 text-[#111827]">
                                    Metode Pengiriman
                                </h2>

                                <div className="flex flex-col gap-3">
                                    <label className="flex items-center gap-4 p-4 border border-[#1877f2] bg-[#f0f7ff] rounded-lg cursor-pointer transition-all">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="JNE Reguler"
                                            defaultChecked
                                            className="w-[18px] h-[18px] accent-[#1877f2]"
                                        />

                                        <div className="flex flex-col gap-1 flex-1">
                                            <span className="text-sm font-medium text-[#111827]">
                                                JNE Reguler
                                            </span>
                                            <span className="text-xs text-[#718096]">
                                                3-5 hari kerja
                                            </span>
                                        </div>

                                        <span className="text-sm font-medium text-[#2ec4b6]">
                                            GRATIS
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-lg cursor-pointer transition-all hover:border-[#1877f2] hover:bg-[#f0f7ff]">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="JNE Express"
                                            className="w-[18px] h-[18px] accent-[#1877f2]"
                                        />

                                        <div className="flex flex-col gap-1 flex-1">
                                            <span className="text-sm font-medium text-[#111827]">
                                                JNE Express
                                            </span>
                                            <span className="text-xs text-[#718096]">
                                                1-2 hari kerja
                                            </span>
                                        </div>

                                        <span className="text-sm font-medium text-[#2ec4b6]">
                                            GRATIS
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-4 p-4 border border-[#e2e8f0] rounded-lg cursor-pointer transition-all hover:border-[#1877f2] hover:bg-[#f0f7ff]">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            value="Same Day Delivery"
                                            className="w-[18px] h-[18px] accent-[#1877f2]"
                                        />

                                        <div className="flex flex-col gap-1 flex-1">
                                            <span className="text-sm font-medium text-[#111827]">
                                                Same Day Delivery
                                            </span>
                                            <span className="text-xs text-[#718096]">
                                                Hari ini (sebelum 16:00)
                                            </span>
                                        </div>

                                        <span className="text-sm font-medium text-[#2ec4b6]">
                                            GRATIS
                                        </span>
                                    </label>
                                </div>
                            </div>

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
                                    className="lucide lucide-chevron-right"
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
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