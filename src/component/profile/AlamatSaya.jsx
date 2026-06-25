import { useState } from "react";
import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPlus,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

import { makeProfile } from "../ProfileContext";
import { makeModal } from "../ModalContext";

export default function AlamatSaya() {
  const { addresses, addAddress, removeAddress, setPrimaryAddress } =
    makeProfile();

  const { showConfirm, showAlert } = makeModal();

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());

    addAddress(data);

    await showAlert({
      title: "Berhasil",
      message: "Alamat berhasil ditambahkan.",
    });

    event.currentTarget.reset();
    setShowForm(false);
  };

  const handleRemove = async (addressId) => {
    const confirmed = await showConfirm({
      title: "Hapus alamat?",
      message: "Alamat ini akan dihapus dari akun kamu.",
      confirmText: "Ya, Hapus",
      cancelText: "Batal",
    });

    if (!confirmed) return;

    removeAddress(addressId);

    await showAlert({
      title: "Berhasil",
      message: "Alamat berhasil dihapus.",
    });
  };

  const handleSetPrimary = async (addressId) => {
    setPrimaryAddress(addressId);

    await showAlert({
      title: "Berhasil",
      message: "Alamat utama berhasil diperbarui.",
    });
  };

  return (
    <div className="grid w-full auto-rows-max content-start gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium text-[#111827]">Alamat Saya</h1>

        <button
          type="button"
          onClick={() => setShowForm((prev) => !prev)}
          className="flex items-center justify-center gap-1 rounded-xl bg-green-600 px-4 py-2 text-sm font-normal text-white transition-colors hover:bg-green-800"
        >
          {showForm ? (
            <>
              <FaTimes className="h-3.5 w-3.5" />
              Tutup
            </>
          ) : (
            <>
              <FaPlus className="h-3.5 w-3.5" />
              Tambah Alamat
            </>
          )}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="grid w-full gap-3 rounded-2xl border border-[#0000001A] bg-white p-5"
        >
          <div className="grid gap-1">
            <label className="text-xs text-[#6B7280]" htmlFor="label">
              Label Alamat
            </label>

            <input
              id="label"
              name="label"
              type="text"
              placeholder="Contoh: Rumah, Kantor, Kos"
              className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm outline-none focus:border-green-600"
              required
            />
          </div>

          <div className="grid gap-1">
            <label className="text-xs text-[#6B7280]" htmlFor="receiverName">
              Nama Penerima
            </label>

            <input
              id="receiverName"
              name="receiverName"
              type="text"
              placeholder="Nama penerima paket"
              className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm outline-none focus:border-green-600"
              required
            />
          </div>

          <div className="grid gap-1">
            <label className="text-xs text-[#6B7280]" htmlFor="phone">
              Nomor Telepon
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Contoh: 081234567890"
              className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm outline-none focus:border-green-600"
              required
            />
          </div>

          <div className="grid gap-1">
            <label className="text-xs text-[#6B7280]" htmlFor="detail">
              Alamat Lengkap
            </label>

            <textarea
              id="detail"
              name="detail"
              placeholder="Nama jalan, nomor rumah, RT/RW, patokan, dan detail lainnya"
              className="min-h-24 resize-none rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm outline-none focus:border-green-600"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="grid gap-1">
              <label className="text-xs text-[#6B7280]" htmlFor="city">
                Kota / Kabupaten
              </label>

              <input
                id="city"
                name="city"
                type="text"
                placeholder="Contoh: Jakarta Selatan"
                className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm outline-none focus:border-green-600"
                required
              />
            </div>

            <div className="grid gap-1">
              <label className="text-xs text-[#6B7280]" htmlFor="postalCode">
                Kode Pos
              </label>

              <input
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder="Contoh: 12190"
                className="rounded-xl border border-[#0000001A] bg-[#F3F4F6] px-4 py-3 text-sm outline-none focus:border-green-600"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-1 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-800"
          >
            Simpan Alamat
          </button>
        </form>
      )}

      {addresses.length === 0 ? (
        <div className="rounded-2xl border border-[#0000001A] bg-white p-8 text-center">
          <FaMapMarkerAlt className="mx-auto mb-3 h-10 w-10 text-[#6B7280]" />

          <h2 className="text-base font-semibold text-[#111827]">
            Belum ada alamat
          </h2>

          <p className="mt-2 text-sm text-[#6B7280]">
            Tambahkan alamat untuk mempermudah proses checkout.
          </p>
        </div>
      ) : (
        addresses.map((address) => (
          <div
            key={address.id}
            className="grid w-full gap-3 rounded-2xl border border-[#0000001A] bg-white p-5"
          >
            <div className="flex w-full items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-[#111827]">
                  {address.label}
                </h2>

                {address.isPrimary && (
                  <div className="rounded-full bg-green-600 px-2 py-0.5 text-sm font-medium text-white">
                    Utama
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => handleRemove(address.id)}
                className="text-[#6B7280] transition-colors hover:text-red-500"
                aria-label="Hapus alamat"
              >
                <FaTrash className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-1">
              <p className="text-sm font-normal text-[#111827]">
                {address.receiverName} · {address.phone}
              </p>

              <p className="text-xs font-normal text-[#6B7280]">
                {address.detail}
              </p>

              <p className="text-xs font-normal text-[#6B7280]">
                {address.city}, {address.postalCode}
              </p>
            </div>

            {!address.isPrimary && (
              <button
                type="button"
                onClick={() => handleSetPrimary(address.id)}
                className="flex w-fit items-center gap-1 text-xs font-normal text-green-600"
              >
                <FaCheckCircle className="h-3.5 w-3.5" />
                Jadikan Alamat Utama
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}