import { FaSave } from "react-icons/fa";
import { makeModal } from "../ModalContext";
import { useProfile } from "../custom_hooks/useProfile.js";
import { useState, useEffect } from "react";
import { getImageUrl } from "../utils/image.js";

export default function EditProfile() {
  const { profile, update, uploadPicture, isLoading } = useProfile();
  const { showAlert } = makeModal();
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    hp_number: '',
    birth: '',
    gender: '',
  });

  useEffect(() => {
    async function setData() {
      if (profile) {
        await setFormData({
          name: profile.name || '',
          hp_number: profile.hp_number || '',
          birth: profile.date_birth ? profile.date_birth.split('T')[0] : '',
          gender: profile.gender || '',
        });
        if (profile.picture) {
          setPreviewImage(getImageUrl(profile.picture));
        }
      }
    }
    setData()

  }, [profile]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: formData.name,
      hp_number: formData.hp_number || null,
      date_birth: formData.birth || null,
      gender: formData.gender || null,
    };
    const result = await update(data);
    await showAlert({
      title: result.success ? "Berhasil" : "Gagal",
      message: result.message,
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const result = await uploadPicture(file);
      await showAlert({
        title: result.success ? "Berhasil" : "Gagal",
        message: result.message,
      });
    }
  };

  if (!profile) return <div className="p-6">Memuat profil...</div>;

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col items-start gap-4">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl font-medium text-[#111827]">Pengaturan Profil</h1>
        <button
          type="submit"
          disabled={isLoading}
          className="cursor-pointer flex items-center justify-center gap-1 rounded-xl border border-green-400 bg-transparent px-4 py-2 text-sm font-medium text-green-500 transition-colors hover:bg-green-100 disabled:opacity-50"
        >
          <FaSave className="h-4 w-4" />
          {isLoading ? 'Menyimpan...' : 'Simpan'}
        </button>
      </div>

      <div className="grid w-full gap-5 rounded-2xl border border-[#0000001A] bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-600 overflow-hidden">
            {previewImage ? (
              <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              profile.name?.charAt(0)?.toUpperCase() || "U"
            )}
          </div>
          <button
            type="button"
            className="cursor-pointer text-xs font-normal text-green-500"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            Ganti Foto Profil
          </button>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>

        <div className="grid w-full gap-1">
          <label htmlFor="name" className="text-xs font-normal text-[#6B7280]">
            Nama Lengkap
          </label>
          <input
            className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid w-full gap-1">
          <label htmlFor="email" className="text-xs font-normal text-[#6B7280]">
            Email
          </label>
          <input
            className="cursor-not-allowed rounded-xl border border-[#0000001A] bg-[#E5E7EB] px-4 py-3 text-sm font-normal text-[#6B7280] outline-none"
            id="email"
            name="email"
            type="email"
            value={profile.email || ''}
            readOnly
          />
        </div>

        <div className="grid w-full gap-1">
          <label htmlFor="hp_number" className="text-xs font-normal text-[#6B7280]">
            Nomor Telepon
          </label>
          <input
            className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
            id="hp_number"
            name="hp_number"
            type="tel"
            value={formData.hp_number}
            onChange={handleChange}
            placeholder="Contoh: 081234567890"
          />
        </div>

        <div className="grid w-full gap-1">
          <label htmlFor="birth" className="text-xs font-normal text-[#6B7280]">
            Tanggal Lahir
          </label>
          <input
            className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
            id="birth"
            name="birth"
            type="date"
            value={formData.birth}
            onChange={handleChange}
          />
        </div>

        <div className="grid w-full gap-1">
          <label htmlFor="gender" className="text-xs font-normal text-[#6B7280]">
            Jenis Kelamin
          </label>
          <select
            className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm font-normal text-[#111827] outline-none focus:border-[#1A73E8]"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Pilih jenis kelamin</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
          </select>
        </div>
      </div>
    </form>
  );
}