import NavBar from "./NavBar.jsx"

export default function About() {
  return (
    
    <div className="">
        <NavBar />
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us ℹ️</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Aplikasi ini dibuat untuk mendemonstrasikan cara kerja Routing pada React. Dengan memisahkan halaman menjadi komponen-komponen kecil, aplikasi menjadi lebih modular dan cepat.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
            <p className="text-sm text-amber-800 font-medium">
              💡 Info: Perhatikan URL di browser kamu saat berpindah halaman, jalurnya berubah secara dinamis!
            </p>
          </div>
        </div>
    </div>
  );
}

