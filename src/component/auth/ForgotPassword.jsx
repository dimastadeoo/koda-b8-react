import { Link } from "react-router";
import { FaArrowLeft, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function ForgotPassword() {
  return (
    <>
      <Link to="/auth/login" className="no-underline inline-block self-start group">
        <div className="flex items-center gap-2 text-sm text-[#6B7280] font-medium hover:text-[#111827] transition-colors">
          <FaArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Login</span>
        </div>
      </Link>

      <div className="grid gap-2 pt-1">
        <h2 className="text-xl lg:text-2xl font-bold text-[#111827]">
          Lupa Kata Sandi?
        </h2>

        <p className="text-xs lg:text-sm text-[#6B7280] leading-relaxed">
          Tidak perlu khawatir. Masukkan email yang terdaftar dan kami akan
          mengirimkan tautan untuk membuat kata sandi baru.
        </p>
      </div>

      <form className="grid gap-4">
        <div className="grid gap-1">
          <label className="text-xs font-medium text-[#111827]" htmlFor="email">
            Email
          </label>

          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-[#6B7280]">
              <FaEnvelope className="w-3.5 h-3.5" />
            </span>

            <input
              type="email"
              placeholder="email@contoh.com"
              required
              className="w-full py-2.5 pl-10 pr-3.5 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-green-600 focus:bg-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-800 text-white border-none rounded-lg py-3 text-sm font-semibold cursor-pointer flex justify-center items-center gap-2 transition-colors mt-1 shadow-sm"
        >
          <FaPaperPlane className="w-4 h-4" />
          Kirim Tautan Reset
        </button>
      </form>

      <div className="bg-[#F1F1F3]/60 border border-[#E5E5E5]/60 rounded-xl p-4 grid gap-1.5">
        <p className="text-xs font-semibold text-[#111827] flex items-center gap-1">
          💡 Tips keamanan:
        </p>

        <ul className="list-none grid gap-1 text-[11px] text-[#6B7280] pl-0">
          <li className="flex items-start gap-1.5">
            <span className="text-[#8C8C8C] shrink-0">•</span>
            <span>
              Pastikan kamu memeriksa folder spam/junk email jika tidak
              menemukannya di kotak masuk.
            </span>
          </li>

          <li className="flex items-start gap-1.5">
            <span className="text-[#8C8C8C] shrink-0">•</span>
            <span>
              Tautan konfirmasi reset hanya berlaku selama 30 menit demi
              keamanan akun.
            </span>
          </li>
        </ul>
      </div>

      <div className="text-center text-xs text-[#6B7280] border-t border-gray-100 pt-4">
        Ingat kata sandi kamu?{" "}
        <Link
          to="/auth/login"
          className="text-green-600 font-medium hover:underline"
        >
          Masuk sekarang
        </Link>
      </div>
    </>
  );
}