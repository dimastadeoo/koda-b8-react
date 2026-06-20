import { FaSave } from "react-icons/fa";
import { makeProfile } from "../ProfileContext";
import { makeModal } from "../ModalContext";

export default function EditProfile() {
  const { profile, saveProfile } = makeProfile();
  const { showAlert } = makeModal();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());

    const result = saveProfile(data);

    await showAlert({
      title: result.success ? "Berhasil" : "Gagal",
      message: result.message,
    });
  };

  if (!profile) return null;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-start gap-4"
    >
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl font-medium text-[#111827]">
          Pengaturan Profil
        </h1>

        <button
          type="submit"
          className="flex items-center justify-center gap-1 rounded-xl border border-[#1A73E8] bg-transparent px-4 py-2 text-sm font-medium text-[#1A73E8] transition-colors hover:bg-[#EFF6FF]"
        >
          <FaSave className="h-4 w-4" />
          Simpan
        </button>
      </div>

      <div className="grid w-full gap-5 rounded-2xl border border-[#0000001A] bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1A73E81A] text-xl font-bold text-[#1A73E8]">
            {profile.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <button
            type="button"
            className="cursor-pointer text-xs font-normal text-[#1A73E8]"
          >
            Ganti Foto Profil
          </button>
        </div>

        <div className="grid w-full gap-1">
          <label
            htmlFor="name"
            className="text-xs font-normal text-[#6B7280]"
          >
            Nama Lengkap
          </label>

          <input
            className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
            id="name"
            name="name"
            type="text"
            defaultValue={profile.name}
            required
          />
        </div>

        <div className="grid w-full gap-1">
          <label
            htmlFor="email"
            className="text-xs font-normal text-[#6B7280]"
          >
            Email
          </label>

          <input
            className="cursor-not-allowed rounded-xl border border-[#0000001A] bg-[#E5E7EB] px-4 py-3 text-sm font-normal text-[#6B7280] outline-none"
            id="email"
            name="email"
            type="email"
            value={profile.email}
            readOnly
          />
        </div>

        <div className="grid w-full gap-1">
          <label
            htmlFor="noTelp"
            className="text-xs font-normal text-[#6B7280]"
          >
            Nomor Telepon
          </label>

          <input
            className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
            id="noTelp"
            name="noTelp"
            type="tel"
            defaultValue={profile.noTelp}
            placeholder="Contoh: 081234567890"
          />
        </div>

        <div className="grid w-full gap-1">
          <label
            htmlFor="birth"
            className="text-xs font-normal text-[#6B7280]"
          >
            Tanggal Lahir
          </label>

          <input
            className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
            id="birth"
            name="birth"
            type="date"
            defaultValue={profile.birth}
          />
        </div>

        <div className="grid w-full gap-1">
          <label
            htmlFor="gender"
            className="text-xs font-normal text-[#6B7280]"
          >
            Jenis Kelamin
          </label>

          <select
            className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
            id="gender"
            name="gender"
            defaultValue={profile.gender || ""}
          >
            <option value="">Pilih jenis kelamin</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>
      </div>

      <div className="grid w-full gap-3.5 rounded-2xl border border-[#0000001A] bg-white p-6">
        <p className="text-base font-semibold text-[#111827]">
          Keamanan Akun
        </p>

        <button
          type="button"
          className="w-fit text-xs font-normal text-[#1A73E8]"
        >
          Ubah kata sandi
        </button>

        <button
          type="button"
          className="w-fit text-xs font-normal text-[#1A73E8]"
        >
          Aktifkan verifikasi 2 langkah
        </button>
      </div>
    </form>
  );
}