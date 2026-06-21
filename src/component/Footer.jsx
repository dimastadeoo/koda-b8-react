import { Link } from 'react-router';

export default function Footer() {
  return (
    <>
      <div className="bg-[#0f172a] text-gray-400 font-sans pt-12 pb-6">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0">
              <img className="w-6 h-6 object-contain text-blue-500" src="/img/van.svg" alt="Icon Van Ekspedisi" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Gratis Ongkir</h4>
              <p className="text-xs text-gray-400 mt-0.5">Pembelian di atas Rp 100.000</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0">
              <img className="w-6 h-6 object-contain text-blue-500" src="/img/shield.svg" alt="Icon shield" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Pembayaran Aman</h4>
              <p className="text-xs text-gray-400 mt-0.5">SSL terenkripsi 256-bit</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0">
              <img className="w-6 h-6 object-contain text-blue-500" src="/img/refresh-ccw.svg" alt="Icon Return" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Pengembalian Mudah</h4>
              <p className="text-xs text-gray-400 mt-0.5">30 hari pengembalian gratis</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center shrink-0">
              <img className="w-6 h-6 object-contain text-blue-500" src="/img/headset.svg" alt="Icon Call Center" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Dukungan 24/7</h4>
              <p className="text-xs text-gray-400 mt-0.5">Bantuan kapan saja</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mx-auto px-4 mb-10" />

        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link to="/main/" className="flex items-center gap-2 no-underline">
              <div className="w-8 h-8 bg-blue-600 text-white flex justify-center items-center text-base font-bold rounded-md">B</div>
              <div className="text-lg font-bold text-white tracking-tight">BeliMudah</div>
            </Link>
            <p className="text-xs leading-relaxed text-gray-400 max-w-sm">
              Platform belanja online terpercaya dengan ribuan produk pilihan. Belanja mudah, aman, dan menyenangkan.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <Link to="#" className="w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-sm"><i className="fab fa-facebook-f"></i></Link>
              <Link to="#" className="w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-sm"><i className="fab fa-instagram"></i></Link>
              <Link to="#" className="w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-sm"><i className="fab fa-twitter"></i></Link>
              <Link to="#" className="w-9 h-9 rounded-full bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-sm"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-sm tracking-wide mb-4">Layanan</h3>
            <ul className="flex flex-col gap-2.5 text-xs p-0 m-0 list-none">
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">Karir</Link></li>
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">Program Afiliasi</Link></li>
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">Jual di BeliMudah</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold text-sm tracking-wide mb-4">Bantuan</h3>
            <ul className="flex flex-col gap-2.5 text-xs p-0 m-0 list-none">
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">Cara Belanja</Link></li>
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">Kebijakan Pengembalian</Link></li>
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">Lacak Pesanan</Link></li>
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="no-underline text-gray-400 hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm tracking-wide mb-1">Kontak</h3>
            <div className="flex items-start gap-2.5 text-xs">
              <img className="w-4 h-4 object-contain mt-0.5 shrink-0" src="/img/map-icon.png" alt="Icon Map" />
              <p className="m-0 leading-relaxed">Jl. Sudirman No. 1, Jakarta Selatan, DKI Jakarta 12190</p>
            </div>
            <div className="flex items-center gap-2.5 text-xs">
              <img className="w-4 h-4 object-contain shrink-0" src="/img/phone.svg" alt="Icon Phone" />
              <p className="m-0">0800-1234-5678 (Gratis)</p>
            </div>
            <div className="flex items-center gap-2.5 text-xs mb-3">
              <img className="w-4 h-4 object-contain shrink-0" src="/img/mail.svg" alt="Icon Mail" />
              <p className="m-0">bantuan@belimudah.id</p>
            </div>

            <div className="bg-slate-900/50 border border-gray-800 rounded-xl p-4 max-w-sm">
              <h4 className="text-white font-medium text-xs mb-2">Newsletter</h4>
              <form className="flex items-center gap-2">
                <input type="email" className="w-full bg-slate-800 border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-500 outline-none focus:border-blue-500 transition-colors" placeholder="Email kamu" required />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-1.5 rounded-lg shrink-0 cursor-pointer transition-colors">Langganan</button>
              </form>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mx-auto px-4 mb-6" />

        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p className="m-0 text-gray-500">&copy; 2026 BeliMudah. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <Link to="#" className="no-underline text-gray-500 hover:text-gray-300 transition-colors">Kebijakan Privasi</Link>
            <Link to="#" className="no-underline text-gray-500 hover:text-gray-300 transition-colors">Syarat & Ketentuan</Link>
            <Link to="#" className="no-underline text-gray-500 hover:text-gray-300 transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </>
  )
}