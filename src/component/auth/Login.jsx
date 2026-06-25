import { Link, useNavigate } from "react-router";
// import React from "react";
import {
  FaEnvelope,
  FaLock,
  FaSignInAlt,
} from "react-icons/fa";
import { makeModal } from "../ModalContext";
import { useAuth } from "../custom_hooks/useAuth.js";
import { FormProvider } from "react-hook-form";
import { useFormBuilder } from "../custom_hooks/useFormBuilder";
import FormInput from "../FormInputLayout";

const fieldConfigs = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'email@contoh.com',
    required: true,
    leftIcon: <FaEnvelope className="w-3.5 h-3.5" />,
  },
  {
    name: 'pass',
    label: 'Kata Sandi',
    type: 'password',
    placeholder: 'Minimal 6 karakter',
    required: true,
    minLength: 6,
    leftIcon: <FaLock className="w-3.5 h-3.5" />,
  },
]

export default function Login() {
  const {loginUser} = useAuth()
  const navigate = useNavigate();
  const { showAlert, showConfirm } = makeModal();

  // const [showPassword, setShowPassword] = React.useState(false);
  // const [isLoading, setIsLoading] = React.useState(false);

  // const isValidEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  //   return emailRegex.test(email);
  // };

  const methods = useFormBuilder(fieldConfigs, {
    mode: 'onSubmit', // atau 'onChange' untuk validasi real-time
    onSubmit: async (data) => {

      // if (isLoading) return;

      // const formElement = e.currentTarget;
      // const form = new FormData(formElement);

      // const data = Object.fromEntries(form.entries())
      // const {email, pass} = data

      const { email, pass } = data;



      // if (!isValidEmail(email)) {
      //   await showAlert({
      //     title: "Email tidak valid",
      //     message: "Masukkan email dengan format yang benar, contoh: nama@email.com",
      //   });
      //   return;
      // }

      const confirmed = await showConfirm({
        title: "Masuk ke akun?",
        message: `Kamu akan login menggunakan email ${email}. Lanjutkan?`,
        confirmText: "Ya, Masuk",
        cancelText: "Batal",
      });

      if (!confirmed) return;

      // setIsLoading(true);

      // try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const result = loginUser({
        email: email,
        password: pass,
      });

      await showAlert({
        title: result.success ? "Berhasil" : "Gagal Login",
        message: result.message,
      });

      if (result.success) {
        // formElement.reset();
        navigate("/main");
      }
      // } finally {
      //   setIsLoading(false);
      // }
    }
  });
  const { submit, formState } = methods;
  return (
    <>
      <FormProvider {...methods}>
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
        {/* FORM dengan submit langsung */}
        <form onSubmit={submit} className="grid gap-2.5" id="formReg">
          {fieldConfigs.map((field) => (
            <div key={field.name} className="grid gap-1">
              <FormInput {...field} />
            </div>
          ))}

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
            disabled={formState.isSubmitting}
            className={`w-full text-white border-none rounded-lg py-3 text-sm font-semibold flex justify-center items-center gap-2 transition-colors mt-2 shadow-sm ${formState.isSubmitting
              ? "bg-green-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-800 cursor-pointer"
              }`}
          >
            {formState.isSubmitting ? (
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
      </FormProvider>
    </>
  );
}