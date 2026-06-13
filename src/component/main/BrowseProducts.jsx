import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router"
import CartItem from "../CartItem"
const urlW3 = 'http://www.w3.org/2000/svg'

export default function BrowseProducts() {
    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>
            <main className="bg-gray-50 min-h-screen text-gray-800 font-sans antialiased">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
                    <ul className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
                        <li>
                            <Link to="landingPage.html" className="hover:text-blue-600 transition-colors">Beranda</Link>
                        </li>
                        <li className="text-gray-400">
                            <svg xmlns={urlW3} width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </li>
                        <li>
                            <Link to="#" className="text-gray-800 font-semibold hover:text-blue-600 transition-colors">Toko</Link>
                        </li>
                    </ul>
                    <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-4 mb-2">
                        Semua Produk
                    </h1>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row gap-8">
                    {/* <!-- bagian Kiri: Sidebar Filter --> */}
                    <aside className="w-full lg:w-64 shrink-0">
                        <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm sticky top-6 space-y-6">

                            <div className="space-y-3">
                                <div className="text-sm font-bold text-gray-900 tracking-wide uppercase text-xs">Harga</div>
                                <div className="w-full pt-2">
                                    <input type="range" min="0" max="20000000" value="0"
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600 price-slider" />
                                </div>
                                <div className="flex items-center justify-between text-xs font-bold text-gray-600">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 price-output">Rp 0</div>
                                    <div className="text-gray-400 priceMax">Rp 20.000.000</div>
                                </div>
                            </div>

                            <hr className="border-gray-100"/>

                            <div className="space-y-3">
                                <div className="text-sm font-bold text-gray-900 tracking-wide uppercase text-xs">Merek</div>
                                <div className="space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-200">
                                    <div
                                        className="flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                        <input type="checkbox" id="merek1"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                                        <label for="merek1" className="cursor-pointer select-none">TechMaster</label>
                                    </div>
                                    <div
                                        className="flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                        <input type="checkbox" id="merek2"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                                        <label for="merek2" className="cursor-pointer select-none">SoundWave</label>
                                    </div>
                                    <div
                                        className="flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                        <input type="checkbox" id="merek3"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                                        <label for="merek3" className="cursor-pointer select-none">PhoneX</label>
                                    </div>
                                    <div
                                        className="flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                        <input type="checkbox" id="merek4"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                                        <label for="merek4" className="cursor-pointer select-none">OptiCam</label>
                                    </div>
                                    <div
                                        className="flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                        <input type="checkbox" id="merek5"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                                        <label for="merek5" className="cursor-pointer select-none">FashionID</label>
                                    </div>
                                    <div
                                        className="flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                        <input type="checkbox" id="merek6"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                                        <label for="merek6" className="cursor-pointer select-none">SportPro</label>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-100"/>

                            <div className="space-y-3">
                                <div className="text-sm font-bold text-gray-900 tracking-wide uppercase text-xs">Rating Minimum
                                </div>
                                <div className="space-y-2.5">
                                    <div className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
                                        <input type="radio" name="rating" id="rating4"
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer" />
                                        <span className="text-amber-400 tracking-wide">★★★★☆</span>
                                        <label for="rating4" className="text-xs text-gray-400 cursor-pointer select-none">ke
                                            atas</label>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
                                        <input type="radio" name="rating" id="rating3"
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer" />
                                        <span className="text-amber-400 tracking-wide">★★★☆☆</span>
                                        <label for="rating3" className="text-xs text-gray-400 cursor-pointer select-none">ke
                                            atas</label>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-100"/>

                            <div className="space-y-3">
                                <div className="text-sm font-bold text-gray-900 tracking-wide uppercase text-xs">Ketersediaan</div>
                                <div
                                    className="flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                    <input type="checkbox" id="ketersedian1"
                                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer" />
                                    <label for="ketersedian1" className="cursor-pointer select-none">Stok tersedia</label>
                                </div>
                            </div>

                        </div>
                    </aside>

                    {/* <!-- bagian Kanan: Konten Katalog Produk --> */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* <!-- Sub-bar informasi dan sorting --> */}
                        <div
                            className="bg-white border border-gray-200/80 rounded-2xl px-5 py-3.5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <span className="text-sm font-semibold text-gray-500 product-count">18 produk ditemukan</span>
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                                <label for="sort-select" className="shrink-0">Urutkan:</label>
                                <select id="sort-select"
                                    className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-gray-800 font-semibold focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer transition-all">
                                    <option>Paling Populer</option>
                                    <option>Harga Terendah</option>
                                    <option>Harga Tertinggi</option>
                                </select>
                            </div>
                        </div>

                        {/* <!-- Grid Produk --> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="all-sale-item">

                            <CartItem />
                        </div>

                        {/* <!-- Tombol Pagination Bawah --> */}
                        <div className="flex justify-center pt-4">
                            <button
                                className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer">
                                Muat Lebih Banyak (6 produk lagi)
                            </button>
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