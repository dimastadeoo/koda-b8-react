import NavBar from "./NavBar";

export default function Contact() {
  return (
    <div>
        <NavBar />
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us 📞</h1>
          <p className="text-gray-500 mb-6">Punya pertanyaan? Silakan hubungi kami melalui formulir di bawah ini:</p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Nama</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Masukkan nama Anda" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Pesan</label>
              <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none h-24" placeholder="Tulis pesan di sini..."></textarea>
            </div>
            <button type="button" className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition active:scale-95">
              Kirim Pesan
            </button>
          </form>
        </div>
    </div>
  );
}