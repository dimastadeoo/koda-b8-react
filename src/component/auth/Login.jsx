import { Link, useNavigate } from "react-router";
import React from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaSignInAlt,
  FaEyeSlash,
} from "react-icons/fa";
import { makeModal } from "../ModalContext";
import { makeAuth } from "../AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { loginUser } = makeAuth();
  const { showAlert, showConfirm } = makeModal();

  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) return;

    const formElement = e.currentTarget;
    const form = new FormData(formElement);

    const data = Object.fromEntries(form.entries())
    const {email, pass} = data

    if (!isValidEmail(email)) {
      await showAlert({
        title: "Email tidak valid",
        message: "Masukkan email dengan format yang benar, contoh: nama@email.com",
      });
      return;
    }

    const confirmed = await showConfirm({
      title: "Masuk ke akun?",
      message: `Kamu akan login menggunakan email ${email}. Lanjutkan?`,
      confirmText: "Ya, Masuk",
      cancelText: "Batal",
    });

    if (!confirmed) return;

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      const result = loginUser({
        email: email,
        password: pass,
      });

      await showAlert({
        title: result.success ? "Berhasil" : "Gagal Login",
        message: result.message,
      });

      if (result.success) {
        formElement.reset();
        navigate("/main");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="grid gap-1">
        <h2 className="text-xl lg:text-2xl font-bold text-[#111827]">
          Masuk ke Akun
        </h2>

        <p className="text-sm text-[#6B7280]">
          Belum punya akun?{" "}
          <Link
            to="/auth/register"
            className="text-[#1A73E8] font-medium hover:underline"
          >
            Daftar gratis
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
          atau masuk dengan email
        </span>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4" id="formLogin">
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
          <div className="flex justify-between items-center">
            <label className="text-xs font-medium text-[#111827]" htmlFor="pass">
              Kata Sandi
            </label>

            <Link
              to="/auth/forgot-password"
              className="text-xs text-[#1A73E8] hover:underline"
            >
              Lupa kata sandi?
            </Link>
          </div>

          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-[#6B7280]">
              <FaLock className="w-3.5 h-3.5" />
            </span>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi"
              required
              className="w-full py-2.5 pl-10 pr-10 bg-[#F1F1F3] border border-[#E5E5E5] rounded-lg text-sm outline-none transition-colors focus:border-[#1877F2] focus:bg-white"
              id="pass"
              name="pass"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3.5 cursor-pointer text-[#8C8C8C] hover:text-[#111827] transition-colors"
              aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
            >
              {showPassword ? (
                <FaEyeSlash className="w-3.5 h-3.5" />
              ) : (
                <FaEye className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-1">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 rounded border-gray-300 cursor-pointer shrink-0"
          />

          <label
            htmlFor="remember"
            className="text-xs text-[#6B7280] cursor-pointer select-none"
          >
            Ingat saya selama 30 hari
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-white border-none rounded-lg py-3 text-sm font-semibold flex justify-center items-center gap-2 transition-colors mt-2 shadow-sm ${isLoading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-[#1A73E8] hover:bg-[#1565C0] cursor-pointer"
            }`}
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
              Memproses...
            </>
          ) : (
            <>
              <FaSignInAlt className="w-4 h-4" />
              Masuk
            </>
          )}
        </button>
      </form>

      <div className="grid gap-3 text-center border-t border-gray-100 pt-4">
        <p className="text-[11px] text-[#8C8C8C]">
          🔒 Login aman dengan enkripsi SSL 256-bit
        </p>

        <p className="text-[11px] text-[#8C8C8C] leading-normal px-2">
          Dengan masuk, kamu menyetujui{" "}
          <Link to="#" className="text-[#1877F2] hover:underline">
            Syarat & Ketentuan
          </Link>{" "}
          dan{" "}
          <Link to="#" className="text-[#1877F2] hover:underline">
            Kebijakan Privasi
          </Link>{" "}
          kami.
        </p>
      </div>
    </>
  );
}