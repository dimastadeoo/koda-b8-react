import { Link } from 'react-router';

export default function Header() {
    return (
        <>
            <div className="bg-blue-600 text-white py-2">
                <div className="container mx-auto max-w-5xl px-4 flex justify-between items-center text-xs">
                    <div className="flex items-center gap-1.5">
                        <img className="w-4 h-4 object-contain" src="/map-icon.png" alt="Icon Map" />
                            <span>Kirim ke: <span className="font-semibold">Jakarta Selatan</span></span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1">📞 0800-1234-5678 (Gratis)</span>
                        <span className="flex items-center gap-1">🚀 Gratis ongkir di atas Rp 100.000</span>
                    </div>
                </div>
            </div>
            
            <div className="border-b border-gray-200 bg-white py-4 relative">
                <div className="container mx-auto max-w-5xl px-4 flex items-center justify-between gap-4">
                    <Link to="/" className="flex items-center gap-2 no-underline shrink-0">
                        <div className="w-10 h-10 bg-blue-600 text-white flex justify-center items-center text-xl font-bold rounded-lg">B</div>
                        <div className="text-xl font-semibold text-gray-800 tracking-tight">BeliMudah</div>
                    </Link>

                    <div className="flex-1 max-w-2xl mx-4">
                        <form className="flex items-center bg-gray-100 rounded-lg overflow-hidden border border-gray-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all">
                            <input type="text" className="w-full bg-transparent px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none" placeholder="Cari produk, merek, kategori..." />
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-10 flex justify-center items-center cursor-pointer transition-colors shrink-0">
                                    <img className="w-5 h-5 object-contain brightness-0 invert" src="/search-icon.png" alt="search-icon" />
                                </button>
                        </form>
                    </div>

                    <div className="flex items-center gap-5 shrink-0 text-gray-600 relative">
                        <button className="cursor-pointer hover:text-blue-600 transition-colors relative">
                            <img className="w-6 h-6 object-contain" src="/bell.png" alt="lonceng" />
                        </button>

                        <button id="profile-btn" className="flex items-center gap-1.5 cursor-pointer hover:text-blue-600 transition-colors relative">
                            <img className="w-6 h-6 object-contain rounded-full" src="/profile.png" alt="Icon Profile" />
                                <span id="profile-name-nav" className="text-sm font-medium text-gray-700"></span>
                        </button>

                        <button id="wishlist-btn" className="cursor-pointer hover:text-blue-600 transition-colors">
                            <img className="w-6 h-6 object-contain" src="/love.png" alt="Icon Favorite" />
                        </button>

                        <button id="cart-btn" className="cursor-pointer hover:text-blue-600 transition-colors">
                            <img className="w-6 h-6 object-contain" src="/cart.png" alt="Icon Keranjang" />
                        </button>

                        <div id="account-modal" className="hidden absolute right-16 top-10 w-64 bg-white rounded-lg shadow-xl border border-gray-150 p-4 z-50">
                            <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-3">
                                <img className="w-10 h-10 rounded-full object-cover" src="/profile.png" alt="User Avatar" />
                                    <div>
                                        <h4 id="modal-user-name" className="font-semibold text-sm text-gray-800">Nama Pengguna</h4>
                                        <p id="modal-user-email" className="text-xs text-gray-400">user@email.com</p>
                                    </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button id="view-account-btn" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 rounded-md transition-colors cursor-pointer text-center">
                                    Lihat Akun
                                </button>
                                <button id="close-modal-btn" className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-medium py-2 rounded-md transition-colors cursor-pointer text-center">
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <nav className="bg-white border-b border-gray-100 shadow-sm py-3">
                <div className="container mx-auto max-w-5xl px-4">

                    <button id="menu-btn" className="flex lg:hidden items-center gap-1.5 font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors w-full justify-between">
                        <div className="flex items-center gap-1.5 text-sm">
                            <img className="w-4 h-4 object-contain" src="/list.png" alt="icon list" />
                                <span>Semua Kategori</span>
                        </div>
                        <img className="w-3 h-3 object-contain opacity-70 transition-transform duration-200" id="arrow-icon" src="/bottom-arrow.png" alt="bottom arrow" />
                    </button>

                    <div id="nav-menu" className="hidden lg:flex flex-col lg:flex-row flex-wrap items-start lg:items-center gap-4 lg:gap-6 text-sm text-gray-600 mt-3 lg:mt-0">
                        <Link to="#" className="no-underline text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto py-1 lg:py-0">💻 Elektronik</Link>
                        <Link to="#" className="no-underline text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto py-1 lg:py-0">👗 Fashion</Link>
                        <Link to="#" className="no-underline text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto py-1 lg:py-0">🏠 Rumah & Dapur</Link>
                        <Link to="#" className="no-underline text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto py-1 lg:py-0">💄 Kecantikan</Link>
                        <Link to="#" className="no-underline text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto py-1 lg:py-0">⚽ Olahraga</Link>
                        <Link to="#" className="no-underline text-gray-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto py-1 lg:py-0">📚 Buku & Alat Tulis</Link>
                        <Link to="#" className="no-underline text-red-500 font-semibold hover:text-red-600 transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto py-1 lg:py-0">🔥 Promo</Link>
                    </div>

                </div>
            </nav>
        </>

    )


}