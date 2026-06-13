import Header from "../Header"
import Footer from "../Footer"
import { Link } from "react-router"
import CartItem from "../CartItem"

export default function DetailPage() {
    const urlW3 = 'http://www.w3.org/2000/svg'

    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>

            <main className="bg-gray-50 min-h-screen py-6">
                <section className="w-full max-w-5xl mx-auto font-sans px-4 mb-6">
                    <ul className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
                        <li><Link to="/main/" className="hover:text-blue-600 transition-colors">Beranda</Link></li>
                        <li className="text-gray-400">
                            <svg xmlns={urlW3} width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </li>
                        <li><Link to="#" className="hover:text-blue-600 transition-colors">Toko</Link></li>
                        <li className="text-gray-400">
                            <svg xmlns={urlW3} width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </li>
                        <li><Link to="#" className="hover:text-blue-600 transition-colors">Electronics</Link></li>
                        <li className="text-gray-400">
                            <svg xmlns={urlW3} width="14" height="14" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-chevron-right">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </li>
                        <li><a className="text-gray-900 font-medium pointer-events-none" href="#">Headphone Wireless Premium</a>
                        </li>
                    </ul>
                </section>

                <section className="w-full max-w-5xl mx-auto font-sans px-4 grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                    <div className="md:col-span-5 flex flex-col gap-4">
                        <div
                            className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-sm">
                            <span
                                className="absolute top-4 left-4 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">-31%</span>
                            <img id="main-product-image" src="/item-1.png" alt="Headphone Wireless Premium"
                                className="w-full h-full object-contain transition-all duration-300" />
                        </div>
                        <div className="flex gap-3">
                            <div
                                className="w-20 h-20 bg-white border-2 border-blue-600 rounded-xl overflow-hidden p-1 cursor-pointer transition-all thumbnail-item">
                                <img src="/item-1.png" alt="Thumbnail 1" className="w-full h-full object-contain" />
                            </div>
                            <div
                                className="w-20 h-20 bg-white border border-gray-200 hover:border-gray-400 rounded-xl overflow-hidden p-1 cursor-pointer transition-all thumbnail-item">
                                <img src="/item-1a.png" alt="Thumbnail 2" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>

                    <div
                        className="md:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">SoundWave &bull;
                                Audio</div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">Headphone Wireless
                                Premium</h1>

                            <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-gray-100 mb-4 text-sm">
                                <span className="flex text-amber-400">
                                    <svg xmlns={urlW3} width="18" height="18" viewBox="0 0 24 24"
                                        fill="currentColor" stroke="none">
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <svg xmlns={urlW3} width="18" height="18" viewBox="0 0 24 24"
                                        fill="currentColor" stroke="none">
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <svg xmlns={urlW3} width="18" height="18" viewBox="0 0 24 24"
                                        fill="currentColor" stroke="none">
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <svg xmlns={urlW3} width="18" height="18" viewBox="0 0 24 24"
                                        fill="currentColor" stroke="none">
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    <svg xmlns={urlW3} width="18" height="18" viewBox="0 0 24 24"
                                        fill="currentColor" stroke="none">
                                        <path
                                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </span>
                                <span className="font-bold text-gray-800">4.8</span>
                                <span className="text-gray-400">(512 Ulasan)</span>
                                <span className="ml-auto text-green-600 font-medium flex items-center gap-1">
                                    <span>✓</span> Stok tersedia (45)
                                </span>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <span className="text-3xl font-black text-blue-600">Rp 450.000</span>
                                    <span className="text-base text-gray-400 line-through">Rp 650.000</span>
                                    <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-md">Hemat
                                        31%</span>
                                </div>
                                <div className="text-xs text-green-600 font-medium mt-1">Kamu hemat Rp 200.000</div>
                            </div>

                            <div className="mb-5">
                                <div className="text-sm font-semibold text-gray-700 mb-2">Warna: <span
                                    className="text-gray-900 font-normal" id="selected-color">Hitam</span></div>
                                <div className="flex gap-2">
                                    <button
                                        className="px-4 py-2 text-sm font-medium border-2 border-blue-600 text-blue-600 bg-blue-50/50 rounded-xl transition-all color-variant-btn">Hitam</button>
                                    <button
                                        className="px-4 py-2 text-sm font-medium border border-gray-200 text-gray-700 hover:border-gray-400 rounded-xl transition-all color-variant-btn">Putih</button>
                                    <button
                                        className="px-4 py-2 text-sm font-medium border border-gray-200 text-gray-700 hover:border-gray-400 rounded-xl transition-all color-variant-btn">Biru</button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="text-sm font-semibold text-gray-700 mb-2">Jumlah</div>
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex items-center border border-gray-300 rounded-xl bg-white overflow-hidden shadow-sm">
                                        <button
                                            className="w-10 h-10 flex justify-center items-center font-bold text-gray-600 hover:bg-gray-100 transition-colors text-lg cursor-pointer"
                                            id="qty-minus">-</button>
                                        <input type="text" value="1"
                                            className="w-12 h-10 text-center font-semibold text-sm text-gray-800 outline-none bg-transparent"
                                            id="qty-input" readonly />
                                            <button
                                                className="w-10 h-10 flex justify-center items-center font-bold text-gray-600 hover:bg-gray-100 transition-colors text-lg cursor-pointer"
                                                id="qty-plus">+</button>
                                    </div>
                                    <span className="text-xs text-gray-400">Stok tersisa: 45 pcs</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 border-t border-gray-100 pt-5">
                            <button
                                className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm" id="btn-add-to-cart" type="button">
                                🛒 Tambah ke Keranjang
                            </button>
                            <button type="button"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-md shadow-blue-100 cursor-pointer text-sm">
                                Beli Sekarang
                            </button>
                            <button type="button"
                                className="w-12 h-12 bg-white border border-gray-200 hover:border-red-200 text-gray-400 hover:text-red-500 rounded-xl flex justify-center items-center text-lg transition-colors shadow-sm cursor-pointer shrink-0">
                                🤍
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-gray-100 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row items-center gap-2">
                                <span className="text-2xl">🚚</span>
                                <div>
                                    <div className="text-xs font-bold text-gray-800">Gratis Ongkir</div>
                                    <div className="text-[10px] text-gray-400">Min. Rp 100.000</div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-2 border-x border-gray-100 px-2">
                                <span className="text-2xl">🛡️</span>
                                <div>
                                    <div className="text-xs font-bold text-gray-800">Garansi Aman</div>
                                    <div className="text-[10px] text-gray-400">SSL Terenkripsi</div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-2">
                                <span className="text-2xl">🔄</span>
                                <div>
                                    <div className="text-xs font-bold text-gray-800">Retur 30 Hari</div>
                                    <div className="text-[10px] text-gray-400">Gratis biaya retur</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-5xl mx-auto font-sans px-4 mb-8">
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="flex border-b border-gray-200 bg-gray-50/70 p-2 gap-1">
                            <button
                                className="tab-btn px-5 py-2.5 text-sm font-semibold rounded-xl text-blue-600 bg-white shadow-sm transition-all cursor-pointer"
                                data-target="deskripsi">Deskripsi</button>
                            <button
                                className="tab-btn px-5 py-2.5 text-sm font-medium rounded-xl text-gray-500 hover:text-gray-800 transition-all cursor-pointer"
                                data-target="spesifikasi">Spesifikasi</button>
                            <button
                                className="tab-btn px-5 py-2.5 text-sm font-medium rounded-xl text-gray-500 hover:text-gray-800 transition-all cursor-pointer"
                                data-target="ulasan">Ulasan (2)</button>
                        </div>

                        <div className="p-6 text-sm text-gray-600 leading-relaxed">
                            <div className="tab-pane block" id="deskripsi">
                                <p>Headphone wireless dengan teknologi noise-cancelling terdepan. Nikmati musik favoritmu tanpa
                                    gangguan dengan kualitas suara yang memukau.</p>
                            </div>
                            <div className="tab-pane hidden" id="spesifikasi">
                                <p className="text-gray-400 italic">Spesifikasi produk belum ditambahkan.</p>
                            </div>
                            <div className="tab-pane hidden" id="ulasan">
                                <p className="text-gray-400 italic">Belum ada ulasan untuk produk ini.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-5xl mx-auto font-sans">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        Produk Terkait
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="terkait-sale-item">
                        <CartItem />
                    </div>
                </section>
            </main>

            <footer id="footer">
                <Footer />
            </footer>
        </>
    )
}