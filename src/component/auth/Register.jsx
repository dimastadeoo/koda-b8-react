import { Link } from "react-router";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaArrowRight,
} from "react-icons/fa";

export default function Register() {
  return (
    <>
      <div className="grid gap-1">
        <h2 className="text-xl lg:text-2xl font-bold text-[#111827]">
          Buat Akun Baru
        </h2>

        <p className="text-sm text-[#6B7280]">
          Sudah punya akun?{" "}
          <Link
            to="/auth/login"
            className="text-[#1A73E8] font-medium hover:underline"
          >
            Masuk
          </Link>
        </p>
      </div>

      <div className="flex gap-3">
        <button
          className="flex-1 flex items-center justify-center font-medium text-xs lg:text-sm px-3 py-2.5 rounded-xl border border-black/10 text-[#6B7280] bg-white hover:bg-gray-50 transition-colors"
          type="button"
        >
          Google
        </button>

        <button
          className="flex-1 flex items-center justify-center font-medium text-xs lg:text-sm px-3 py-2.5 rounded-xl border border-black/10 text-[#6B7280] bg-white hover:bg-gray-50 transition-colors"
          type="button"
        >
          Facebook
        </button>
      </div>

      <div className="text-center relative my-1">
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#E5E5E5] z-10"></div>
        <span className="relative z-20 bg-[#FAFAFA] px-3 text-xs text-[#6B7280]">
          atau daftar dengan email
        </span>
      </div>

      <form className="grid gap-3.5" id="formReg">
        <div className="grid gap-1">
          <label className="text-xs font-medium text-[#111827]" htmlFor="name">
            Nama Lengkap
          </label>

          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-[#6B7280]">
              <FaUser className="w-3.5 h-3.5" />
            </span>

            <input
              type="text"
              placeholder="Input Nama Lengkap Kamu"
              required
              className="w-full py-2.5 pl-10 pr-3.5 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
              id="name"
              name="name"
            />
          </div>
        </div>

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
              className="w-full py-2.5 pl-10 pr-3.5 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
              id="email"
              name="email"
            />
          </div>
        </div>

        <div className="grid gap-1">
          <label className="text-xs font-medium text-[#111827]" htmlFor="pass">
            Kata Sandi
          </label>

          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-[#6B7280]">
              <FaLock className="w-3.5 h-3.5" />
            </span>

            <input
              type="password"
              placeholder="Minimal 6 karakter"
              required
              className="w-full py-2.5 pl-10 pr-10 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
              id="pass"
              name="pass"
            />

            <span className="absolute right-3.5 cursor-pointer text-[#8C8C8C]">
              <FaEye className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        <div className="grid gap-1">
          <label
            className="text-xs font-medium text-[#111827]"
            htmlFor="confirmPass"
          >
            Masukkan Kembali Kata Sandi
          </label>

          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-[#6B7280]">
              <FaLock className="w-3.5 h-3.5" />
            </span>

            <input
              type="password"
              placeholder="Ulangi kata sandi"
              required
              className="w-full py-2.5 pl-10 pr-10 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
              id="confirmPass"
              name="confirmPass"
            />

            <span className="absolute right-3.5 cursor-pointer text-[#8C8C8C]">
              <FaEye className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        <div className="flex items-start gap-2 mt-1">
          <input
            type="checkbox"
            id="terms"
            className="w-4 h-4 rounded border-gray-300 mt-0.5 cursor-pointer shrink-0"
            required
          />

          <label
            htmlFor="terms"
            className="text-[11px] text-[#6B7280] cursor-pointer select-none leading-tight"
          >
            Saya menyetujui{" "}
            <Link to="#" className="text-[#1877F2] hover:underline">
              Syarat & Ketentuan
            </Link>{" "}
            dan{" "}
            <Link to="#" className="text-[#1877F2] hover:underline">
              Kebijakan Privasi
            </Link>{" "}
            BeliMudah
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white border-none rounded-lg py-3 text-sm font-semibold cursor-pointer flex justify-center items-center gap-2 transition-colors mt-2 shadow-sm"
        >
          Daftar Sekarang
          <FaArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="text-center text-[11px] text-[#8C8C8C]">
        🔒 Data kamu aman dan terenkripsi
      </div>
    </>
  );
}