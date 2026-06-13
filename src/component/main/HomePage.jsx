import Header from "../Header"
import Footer from "../Footer"
import CartItem from "../CartItem"
import { Link } from "react-router"

export default function HomePage() {
    const urlW3 = 'http://www.w3.org/2000/svg'
    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>

            <main className="grid gap-7">
               
                <section
                    className="relative w-full bg-gradient-to-r from-[#4F39F6] from-50% to-[#8200DB] to-50% overflow-hidden min-h-[440px] flex items-center group">

                    <div
                        className="absolute inset-y-0 right-0 w-1/2 h-full opacity-60 md:opacity-90 mix-blend-multiply pointer-events-none">
                        <img className="w-full h-full object-cover object-center" src="/landing-section.png"
                            alt="Gambar Landing Utama" />
                    </div>

                    <div className="relative w-full max-w-5xl mx-auto px-4 z-10 py-16">
                        <div className="max-w-xl text-white">
                            <h1
                                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 animate-fade-in">
                                Elektronik Pilihan, Harga Spesial
                            </h1>
                            <p className="text-sm md:text-base text-purple-100/90 leading-relaxed mb-8 max-w-md">
                                Laptop, smartphone, headphone, dan masih banyak lagi dengan diskon hingga 40%
                            </p>

                            <button
                                className="bg-white hover:bg-purple-50 text-blue-600 font-medium text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer">
                                <span>Lihat Promo</span>
                                <img className="w-4 h-4 object-contain" src="/arrow-right.png" alt="icon arrow right" />
                            </button>
                        </div>
                    </div>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all text-white border border-white/10 opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Previous Slide">
                        <img className="w-5 h-5 object-contain brightness-0 invert" src="/chevron-left (1).svg"
                            alt="Sebelumnya" />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all text-white border border-white/10 opacity-0 group-hover:opacity-100 focus:opacity-100"
                        aria-label="Next Slide">
                        <img className="w-5 h-5 object-contain brightness-0 invert" src="/chevron-right.svg"
                            alt="Selanjutnya" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                        <span className="w-2 h-2 rounded-full bg-white/40 transition-all"></span>
                        <span className="w-6 h-2 rounded-full bg-white transition-all"></span>
                        <span className="w-2 h-2 rounded-full bg-white/40 transition-all"></span>
                    </div>
                </section>
                
                <section className="w-full max-w-5xl mx-auto font-sans">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Belanja Berdasarkan Kategori</h2>
                        <Link to="/main/all-products"
                            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors no-underline group">
                            <span>Lihat Semua</span>
                            <img className="w-4 h-4 object-contain transition-transform group-hover:translate-x-1"
                                src="/arrow-right.png" alt="icon arrow right" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" id="kategori">
                        <div
                            className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group">
                            <Link to="#" className="no-underline w-full flex flex-col items-center">
                                <img className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105 duration-300"
                                    src="/landing-section.png" alt="Icon Elektronik" />
                                    <div
                                        className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        Elektronik</div>
                                    <div className="text-xs text-gray-400">7 Produk</div>
                            </Link>
                        </div>
                        <div
                            className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group">
                            <Link to="#" className="no-underline w-full flex flex-col items-center">
                                <img className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105 duration-300"
                                    src="/landing-section.png" alt="Icon Elektronik" />
                                    <div
                                        className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        Elektronik</div>
                                    <div className="text-xs text-gray-400">7 Produk</div>
                            </Link>
                        </div>
                        <div
                            className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group">
                            <Link to="#" className="no-underline w-full flex flex-col items-center">
                                <img className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105 duration-300"
                                    src="/landing-section.png" alt="Icon Elektronik" />
                                    <div
                                        className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        Elektronik</div>
                                    <div className="text-xs text-gray-400">7 Produk</div>
                            </Link>
                        </div>
                        <div
                            className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group">
                            <Link to="#" className="no-underline w-full flex flex-col items-center">
                                <img className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105 duration-300"
                                    src="/landing-section.png" alt="Icon Elektronik" />
                                    <div
                                        className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        Elektronik</div>
                                    <div className="text-xs text-gray-400">7 Produk</div>
                            </Link>
                        </div>
                        <div
                            className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group">
                            <Link to="#" className="no-underline w-full flex flex-col items-center">
                                <img className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105 duration-300"
                                    src="/landing-section.png" alt="Icon Elektronik" />
                                    <div
                                        className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        Elektronik</div>
                                    <div className="text-xs text-gray-400">7 Produk</div>
                            </Link>
                        </div>
                        <div
                            className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group">
                            <Link to="#" className="no-underline w-full flex flex-col items-center">
                                <img className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105 duration-300"
                                    src="/landing-section.png" alt="Icon Elektronik" />
                                    <div
                                        className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                        Elektronik</div>
                                    <div className="text-xs text-gray-400">7 Produk</div>
                            </Link>
                        </div>

                    </div>
                </section>
                {/* <!-- flash Sale --> */}
                <section className="w-full max-w-5xl mx-auto font-sans">

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <span
                                className="inline-flex items-center gap-1.5 bg-[#db2777] text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-sm">
                                <svg xmlns={urlW3} viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="w-4 h-4 fill-current">
                                    <path
                                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                                </svg>
                                Flash Deal
                            </span>
                            <span className="flex items-center gap-2 text-gray-900 text-sm font-medium">
                                <svg xmlns={urlW3} viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="w-4 h-4 text-gray-500">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                <span className="text-gray-500 font-normal">Berakhir dalam:</span>
                                <span className="flex items-center gap-1 font-bold tracking-wider text-base">
                                    <span>05</span><span className="animate-pulse">:</span>
                                    <span>21</span><span className="animate-pulse">:</span>
                                    <span className="text-[#db2777]">38</span>
                                </span>
                            </span>
                        </div>
                        <Link to="/main/all-products"
                            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors no-underline group/link">
                            <span>Lihat Semua</span>
                            <img className="w-4 h-4 object-contain transition-transform group-hover/link:translate-x-1"
                                src="/arrow-right.png" alt="icon arrow right" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="flash-sale-item">        
                        <CartItem />
                    </div>
                </section>
                {/* <!-- section 4 --> */}
                <section className="w-full max-w-5xl mx-auto font-sans grid lg:grid-cols-2  sm:grid-cols-1 gap-3">
                    <div
                        className="relative min-h-[180px] sm:min-h-[220px] rounded-[24px] overflow-hidden bg-cover bg-center bg-no-repeat flex items-center p-6 sm:p-10 text-white shadow-md bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.2)_100%),url('/kat-1.png')]">

                        <div className="flex flex-col items-start gap-3 sm:gap-4 z-10">
                            <span className="text-sm sm:text-base font-medium opacity-90 tracking-wide">Fashion Wanita</span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Diskon s/d 50%</h2>
                            <button
                                className="text-xs sm:text-sm font-medium border border-white/80 rounded-xl px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                                Belanja Sekarang
                            </button>
                        </div>
                    </div>

                    <div
                        className="relative min-h-[180px] sm:min-h-[220px] rounded-[24px] overflow-hidden bg-cover bg-center bg-no-repeat flex items-center p-6 sm:p-10 text-white shadow-md bg-[linear-gradient(90deg,rgba(28,57,142,0.8)_0%,rgba(28,57,142,0.2)_100%),url('/kat2.png')]">

                        <div className="flex flex-col items-start gap-3 sm:gap-4 z-10">
                            <span className="text-sm sm:text-base font-medium opacity-90 tracking-wide">Elektronik Pilihan</span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Harga Terbaik</h2>
                            <button
                                className="text-xs sm:text-sm font-medium border border-white/80 rounded-xl px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
                                Lihat Produk
                            </button>
                        </div>
                    </div>
                </section>

                {/* <!-- section 5 new product --> */}
                <section className="w-full max-w-5xl mx-auto font-sans">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <span className="flex gap-3">
                                <svg xmlns={urlW3} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="#1A73E8" stroke="currentColor" stroke-width="1.67" stroke-linecap="round"
                                    stroke-linejoin="round" className="lucide lucide-trending-up-icon lucide-trending-up">
                                    <path d="M16 7h6v6" />
                                    <path d="m22 7-8.5 8.5-5-5L2 17" />
                                </svg>
                                Produk Terbaru
                            </span>
                        </div>
                        <Link to="/main/all-products"
                            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors no-underline group/link">
                            <span>Lihat Semua</span>
                            <img className="w-4 h-4 object-contain transition-transform group-hover/link:translate-x-1"
                                src="/arrow-right.png" alt="icon arrow right" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="new-sale-item">
                        <CartItem />
                    </div>

                </section>

                {/* <!-- section 6 Best product --> */}
                <section className="w-full max-w-5xl mx-auto font-sans">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        <span className="flex flex-wrap items-center gap-4">
                            Produk Unggulan
                        </span>
                        <Link to="/main/all-products"
                            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors no-underline group/link">
                            <span>Lihat Semua</span>
                            <img className="w-4 h-4 object-contain transition-transform group-hover/link:translate-x-1"
                                src="/arrow-right.png" alt="icon arrow right"  />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="super-sale-item">
                        <CartItem />
                    </div>
                </section>

                {/* <!-- section 7 last-section --> */}
                <section className="w-full bg-white border border-gray-100 py-2 shadow-xs">

                    <div className="max-w-5xl mx-auto font-sans text-center">

                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-10 tracking-wide">
                            Kenapa Belanja di BeliMudah?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">

                            <div className="flex flex-col items-center p-4">
                                <div
                                    className="text-4xl sm:text-5xl mb-4 transform hover:scale-110 transition-transform duration-200 select-none">
                                    🚚
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                                    Gratis Ongkir
                                </h3>
                                <p className="text-sm text-gray-500 max-w-[240px] leading-relaxed">
                                    Pembelian di atas Rp 100.000 gratis ongkir ke seluruh Indonesia
                                </p>
                            </div>

                            <div className="flex flex-col items-center p-4">
                                <div
                                    className="text-4xl sm:text-5xl mb-4 transform hover:scale-110 transition-transform duration-200 select-none">
                                    🔒
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                                    Pembayaran Aman
                                </h3>
                                <p className="text-sm text-gray-500 max-w-[240px] leading-relaxed">
                                    Data kamu terenkripsi dengan standar keamanan tertinggi
                                </p>
                            </div>

                            <div className="flex flex-col items-center p-4">
                                <div
                                    className="text-4xl sm:text-5xl mb-4 transform hover:scale-110 transition-transform duration-200 select-none">
                                    ↩️
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                                    Retur Mudah
                                </h3>
                                <p className="text-sm text-gray-500 max-w-[240px] leading-relaxed">
                                    Produk tidak sesuai? Kembalikan dalam 30 hari tanpa ribet
                                </p>
                            </div>

                            <div className="flex flex-col items-center p-4">
                                <div
                                    className="text-4xl sm:text-5xl mb-4 transform hover:scale-110 transition-transform duration-200 select-none">
                                    💬
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                                    CS 24/7
                                </h3>
                                <p className="text-sm text-gray-500 max-w-[240px] leading-relaxed">
                                    Tim kami siap membantu kamu kapan saja
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