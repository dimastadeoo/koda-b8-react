// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';
import { FaArrowRight } from 'react-icons/fa';

import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import FormInput from '../FormInputLayout';
import { useFormBuilder } from '../custom_hooks/useFormBuilder.js';
import { makeModal } from '../ModalContext';
import { useAuth } from '../custom_hooks/useAuth.js';

// --- 1. Konfigurasi field (sesuai kebutuhan Register) ---
const fieldConfigs = [
  {
    name: 'name',
    label: 'Nama Lengkap',
    type: 'text',
    placeholder: 'Input Nama Lengkap Kamu',
    required: true,
    leftIcon: <FaUser className="w-3.5 h-3.5" />,
  },
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
  {
    name: 'confirmPass',
    label: 'Masukkan Kembali Kata Sandi',
    type: 'password',
    placeholder: 'Konfirmasi Kata Sandi',
    minLength: 6,
    required: true,
    leftIcon: <FaLock className="w-3.5 h-3.5" />,
  },
];

export default function Register() {
  const {registerUser} = useAuth()
  const navigate = useNavigate();
  const { showAlert, showConfirm } = makeModal();
  // const [isLoading, setIsLoading] = React.useState(false);

  // --- Gunakan useFormBuilder dengan onSubmit langsung ---
  const methods = useFormBuilder(fieldConfigs, {
    mode: 'onSubmit', // atau 'onChange' untuk validasi real-time
    onSubmit: async (data) => {
      const { name, email, pass, confirmPass } = data;

      if (pass !== confirmPass) {
        await showAlert({
          title: 'Password tidak sama',
          message: 'Kata sandi dan konfirmasi kata sandi harus sama.',
        });
        return;
      }

      const isConfirmed = await showConfirm({
        title: 'Buat akun baru?',
        message: `Akun dengan email ${email} akan dibuat. Lanjutkan registrasi?`,
        confirmText: 'Ya, Daftar',
        cancelText: 'Batal',
      });
      if (!isConfirmed) return;

      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        const result = registerUser({ name, email, password: pass });

        await showAlert({
          title: result.success ? 'Berhasil' : 'Gagal',
          message: result.message,
        });

        if (result.success) {
          methods.reset();
          navigate('/auth/login');
        }
      } catch (err) {
        await showAlert({
          title: 'Gagal Membuat Akun karena ', err,
          message: "Silahkan Coba Lagi",
        });
      }
    },
  });

  const { submit, formState } = methods;

  return (
    <FormProvider {...methods}>
      <div className="grid gap-1">
        <h2 className="text-xl lg:text-2xl font-bold text-[#111827]">
          Buat Akun Baru
        </h2>
        <p className="text-sm text-[#6B7280]">
          Sudah punya akun?{' '}
          <Link to="/auth/login" className="text-[#1A73E8] font-medium hover:underline">
            Masuk
          </Link>
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 flex items-center justify-center font-medium text-xs lg:text-sm px-3 py-2.5 rounded-xl border border-black/10 text-[#6B7280] bg-white hover:bg-gray-50 transition-colors"
        >
          Google
        </button>
        <button
          type="button"
          className="flex-1 flex items-center justify-center font-medium text-xs lg:text-sm px-3 py-2.5 rounded-xl border border-black/10 text-[#6B7280] bg-white hover:bg-gray-50 transition-colors"
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

      {/* FORM dengan submit langsung */}
      <form onSubmit={submit} className="grid gap-2.5" id="formReg">
        {fieldConfigs.map((field) => (
          <div key={field.name} className="grid gap-1">
            <FormInput {...field} />
          </div>
        ))}

        <div className="flex items-start gap-2 mt-0.5">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="w-4 h-4 rounded border-gray-300 mt-0.5 cursor-pointer shrink-0"
            required
          />
          <label
            htmlFor="terms"
            className="text-[11px] text-[#6B7280] cursor-pointer select-none leading-tight"
          >
            Saya menyetujui{' '}
            <Link to="#" className="text-[#1877F2] hover:underline">
              Syarat & Ketentuan
            </Link>{' '}
            dan{' '}
            <Link to="#" className="text-[#1877F2] hover:underline">
              Kebijakan Privasi
            </Link>{' '}
            BeliMudah
          </label>
        </div>

        <button
          type="submit"
          disabled={formState.isSubmitting}
          className={`w-full text-white border-none rounded-lg py-2.5 text-xs font-semibold flex justify-center items-center gap-2 transition-colors mt-0.5 shadow-sm ${formState.isSubmitting
            ? 'bg-orange-300 cursor-not-allowed'
            : 'bg-[#F97316] hover:bg-[#EA580C] cursor-pointer'
            }`}
        >
          {formState.isSubmitting ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
              Memproses...
            </>
          ) : (
            <>
              Daftar Sekarang
              <FaArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>

      <div className="text-center text-[11px] text-[#8C8C8C] mt-0.5">
        🔒 Data kamu aman dan terenkripsi
      </div>
    </FormProvider>
  );
}