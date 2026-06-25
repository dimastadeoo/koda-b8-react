import { Link, useNavigate } from "react-router";
import { FaHome, FaArrowLeft, FaSearch } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50" id="header">
        <Header />
      </header>
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
        <section className="w-full max-w-xl rounded-3xl border border-slate-100 bg-green-50 p-8 text-center shadow-sm">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-50 text-blue-600">
            <span className="text-4xl font-bold">404</span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Halaman Tidak Ditemukan
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
            Maaf, halaman yang kamu cari tidak tersedia, sudah dipindahkan, atau
            alamat URL yang dimasukkan tidak sesuai.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-green-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              <FaArrowLeft className="h-4 w-4" />
              Kembali
            </button>

            <Link
              to="/main"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              <FaHome className="h-4 w-4" />
              Ke Beranda
            </Link>

            <Link
              to="/main/all-products"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              <FaSearch className="h-4 w-4" />
              Cari Produk
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-400">
            BeliMudah • Belanja lebih mudah dan aman
          </p>
        </section>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}