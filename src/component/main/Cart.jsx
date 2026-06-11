import Header from "../Header"
import Footer from "../Footer"
// import { Link } from "react-router"
import CartItem from "../CartItem"

export default function Cart() {
    const urlW3 = 'http://www.w3.org/2000/svg'

    return (
        <>
            <header className="sticky top-0 z-50" id="header">
                <Header />
            </header>
            <main className="min-h-screen bg-slate-50 py-10 text-slate-800 antialiased grid gap-8">

                <section className="container mx-auto px-4 max-w-5xl">
                    <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Keranjang Belanja (1 item)
                    </h1>
                </section>

                <section className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-6 items-start">

                    <div className="w-full lg:w-2/3 flex flex-col gap-6">

                        <div id="product-list-container" className="grid gap-2 items-start">
                            <div
                                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center relative">
                                <img src="/item-1.png" alt="Headphone"
                                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl bg-amber-100 flex-shrink-0" />
                                <div className="flex-1 space-y-1">
                                    <h3 className="text-base font-semibold sm:text-lg pr-8">Headphone Wireless Premium</h3>
                                    <p className="text-xs text-slate-400 font-medium">Hitam</p>
                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="flex items-center border border-slate-200 rounded-full px-2 py-1 bg-slate-50">
                                            <button
                                                className="w-7 h-7 flex items-center justify-center font-bold text-slate-500 hover:text-slate-800 transition-colors">-</button>
                                            <span className="w-8 text-center text-sm font-semibold">1</span>
                                            <button
                                                className="w-7 h-7 flex items-center justify-center font-bold text-slate-500 hover:text-slate-800 transition-colors">+</button>
                                        </div>
                                    </div>
                                    <button
                                        className="pt-2 text-xs font-medium text-slate-400 hover:text-rose-500 flex items-center gap-1 transition-colors group">
                                        <span className="text-sm group-hover:scale-110 transition-transform">♡</span> Simpan ke Wishlist
                                    </button>
                                </div>
                                <div
                                    className="w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end sm:self-stretch gap-4 pt-4 sm:pt-0 border-t sm:border-none border-slate-100">
                                    <button
                                        className="sm:absolute sm:top-5 sm:right-5 p-1 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 transition-all">
                                        <svg xmlns={urlW3} width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" className="lucide lucide-trash-2">
                                            <path d="M10 11v6" />
                                            <path d="M14 11v6" />
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                            <path d="M3 6h18" />
                                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        </svg>
                                    </button>
                                    <p className="text-lg font-bold text-blue-600 sm:mt-auto">Rp 450.000</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                            <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
                                <span className="text-base">🏷️</span> Kode Promo
                            </h3>
                            <div className="flex gap-2 max-w-md">
                                <input type="text" placeholder="Masukkan kode promo"
                                    className="flex-1 bg-slate-50 border-b-2 border-slate-200 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all rounded-t-lg" />
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm shadow-blue-200 transition-colors active:scale-95">
                                        Terapkan
                                    </button>
                            </div>
                            <p className="text-xs text-slate-400 font-medium">
                                Coba: <span className="font-semibold text-slate-500">HEMAT10</span>, <span
                                    className="font-semibold text-slate-500">BELIMUDAH</span>, atau <span
                                        className="font-semibold text-slate-500">NEWUSER</span>
                            </p>
                        </div>
                    </div>

                    <div
                        className="w-full lg:w-1/3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-5 lg:sticky lg:top-6">
                        <h3 className="text-lg font-bold">Ringkasan Pesanan</h3>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between font-medium text-slate-500">
                                <span id="qty-produk-cart">Subtotal (1 item)</span>
                                <span className="text-slate-800" id="total-price">Rp 450.000</span>
                            </div>
                            <div className="flex justify-between font-medium text-slate-500">
                                <span>Ongkos Kirim</span>
                                <span
                                    className="text-emerald-600 font-bold tracking-wide text-xs bg-emerald-50 px-2 py-0.5 rounded">GRATIS</span>
                            </div>

                            <hr className="border-slate-100 my-4" />

                            <div className="flex justify-between items-center text-base font-bold">
                                <span>Total</span>
                                <span className="text-lg text-blue-600" id="sub-total-price">Rp 450.000</span>
                            </div>
                        </div>

                        <button type="button" id="btn-checkout"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-orange-100 flex items-center justify-center gap-2 transition-all active:scale-[0.99]">
                            <svg xmlns={urlW3} width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className="lucide lucide-shield">
                                <path
                                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            </svg>
                            Checkout Aman
                        </button>

                        <div className="text-center space-y-1 pt-2">
                            <p className="text-xs font-semibold text-slate-500 flex items-center justify-center gap-1">
                                🔒 Pembayaran 100% Aman
                            </p>
                            <p className="text-[10px] leading-relaxed text-slate-400 font-medium">
                                Metode: Transfer Bank • Virtual Account • Kartu Kredit • e-Wallet
                            </p>
                        </div>
                    </div>

                </section>

                <section className="w-full max-w-5xl mx-auto font-sans">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                        Mungkin Kamu Suka Ini
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="love-sale-item">
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