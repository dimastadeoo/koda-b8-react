import { useState } from "react";
import AsideContent from "../Aside";
import NavPage from "../NavPage";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
  FaFilter,
  FaPlus,
  FaTimes,
  FaStar,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Headphone Wireless Premium",
    brand: "SoundWave",
    image: "/item-1.png",
    category: "Elektronik",
    price: "Rp 450.000",
    oldPrice: "Rp 650.000",
    stock: 45,
    rating: 4.8,
    reviews: 512,
    statuses: ["Baru", "Unggulan", "Promo"],
  },
];

const summaryProducts = [
  {
    total: 18,
    label: "Total Produk",
  },
  {
    total: 7,
    label: "Total Baru",
  },
  {
    total: 0,
    label: "Stok Rendah",
  },
  {
    total: 11,
    label: "Produk Promo",
  },
];

function StatusBadge({ children }) {
  const badgeClass = {
    Baru: "bg-[#EFF6FF] text-[#1A73E8]",
    Unggulan: "bg-[#FFF7ED] text-[#F97316]",
    Promo: "bg-[#FAF5FF] text-[#8B5CF6]",
  };

  return (
    <div
      className={`flex w-fit items-center justify-center rounded-2xl px-2 py-1 text-xs font-normal ${
        badgeClass[children] || "bg-[#EFF6FF] text-[#1A73E8]"
      }`}
    >
      {children}
    </div>
  );
}

function ProductRow({ product }) {
  return (
    <tr className="border-b border-black/10 last:border-b-0">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={product.image}
            alt={product.name}
            className="h-10 w-10 rounded-lg bg-[#ccced2] object-contain"
          />

          <div className="grid">
            <h3 className="text-sm font-normal text-[#111827]">
              {product.name}
            </h3>
            <p className="text-xs font-normal text-[#99A1AF]">
              {product.brand}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3">
        <StatusBadge>{product.category}</StatusBadge>
      </td>

      <td className="px-4 py-3">
        <div className="grid">
          <h2 className="text-sm font-normal text-[#1A73E8]">
            {product.price}
          </h2>
          <p className="text-xs font-normal text-[#99A1AF] line-through">
            {product.oldPrice}
          </p>
        </div>
      </td>

      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#111827]">
          {product.stock}
        </h3>
      </td>

      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <FaStar size={12} fill="gold" />
          <h3 className="text-sm font-normal text-[#111827]">
            {product.rating}
          </h3>
          <p className="text-xs font-normal text-[#99A1AF]">
            ({product.reviews})
          </p>
        </div>
      </td>

      <td className="px-4 py-3">
        <div className="grid grid-cols-1 items-center gap-1 xl:grid-cols-3">
          {product.statuses.map((status) => (
            <StatusBadge key={status}>{status}</StatusBadge>
          ))}
        </div>
      </td>

      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <button
            type="button"
            className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
            aria-label="Lihat produk"
          >
            <FaEye size={16} />
          </button>

          <button
            type="button"
            className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
            aria-label="Edit produk"
          >
            <FaEdit size={16} />
          </button>

          <button
            type="button"
            className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#DC2626]"
            aria-label="Hapus produk"
          >
            <FaTrash size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function ProductsList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AsideContent />
      <NavPage />

      <main className="min-h-screen bg-[#F8F9FA] pl-18 pt-16 md:pl-60">
        <section className="grid gap-6 p-6">
          <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
            <h1 className="text-2xl font-medium text-[#111827]">
              Manajemen Produk
            </h1>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex w-fit max-w-40 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 bg-[#F97316] px-4 py-2 transition-colors hover:bg-[#d4780e]"
            >
              <FaPlus size={14} className="text-white" />
              <p className="text-sm font-medium text-white">Tambah Produk</p>
            </button>
          </div>

          <div className="grid items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 md:grid-cols-[minmax(0,1fr)_max-content_max-content]">
            <div className="flex items-center gap-2 rounded-xl bg-[#ccced2] px-4 py-2.5">
              <FaSearch size={16} className="text-[#6B7280]" />
              <input
                type="text"
                name="search"
                className="flex-1 border-0 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#6B7280]"
                placeholder="Cari produk atau merek..."
              />
            </div>

            <select
              name="select-kat"
              className="flex cursor-pointer appearance-none items-center justify-center rounded-xl border border-[#111827] bg-white px-3 py-2.5 text-sm font-normal text-[#111827] outline-none"
              defaultValue="all"
            >
              <option value="all">Semua Kategori</option>
            </select>

            <button
              type="button"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#111827] bg-transparent px-4 py-2.5 transition-colors hover:bg-[#f1d9d9]"
            >
              <FaFilter size={16} className="text-[#6B7280]" />
              <p className="text-sm font-medium text-[#99A1AF]">Filter</p>
            </button>
          </div>

          <section
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
            aria-label="Ringkasan Produk"
          >
            {summaryProducts.map((summary) => (
              <article
                key={summary.label}
                className="grid place-items-center gap-1 rounded-2xl border border-black/10 bg-white p-4 text-center"
              >
                <h1 className="text-2xl font-bold text-[#111827]">
                  {summary.total}
                </h1>
                <p className="text-xs font-normal text-[#99A1AF]">
                  {summary.label}
                </p>
              </article>
            ))}
          </section>

          <section className="grid overflow-hidden rounded-2xl border border-black/10 bg-white">
            <p className="flex items-center px-4 py-3 text-sm font-normal text-[#99A1AF]">
              18 Produk
            </p>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-245 border-collapse">
                <thead>
                  <tr className="bg-[#ccced2] text-left text-sm font-normal text-[#99A1AF]">
                    <th className="px-4 py-3 font-normal">Produk</th>
                    <th className="px-4 py-3 font-normal">Kategori</th>
                    <th className="px-4 py-3 font-normal">Harga</th>
                    <th className="px-4 py-3 font-normal">Stok</th>
                    <th className="px-4 py-3 font-normal">Rating</th>
                    <th className="px-4 py-3 font-normal">Status</th>
                    <th className="px-4 py-3 font-normal">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <ProductRow key={product.id} product={product} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </main>

      {isModalOpen && (
        <section className="fixed inset-0 z-999999 flex items-center justify-center bg-black/50 p-4">
          <form
            action="#"
            onSubmit={(event) => event.preventDefault()}
            className="grid w-full max-w-3xl animate-[munculHalus_0.3s_ease] rounded-2xl border border-black/10 bg-white"
          >
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
              <h1 className="text-lg font-medium text-[#111827]">
                Tambah Produk Baru
              </h1>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex cursor-pointer items-center justify-center border-0 bg-transparent"
                aria-label="Tutup modal"
              >
                <FaTimes size={16} className="text-black" />
              </button>
            </div>

            <div className="grid gap-4 p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid gap-1.5">
                  <label
                    htmlFor="product-name"
                    className="text-sm font-normal text-[#99A1AF]"
                  >
                    Nama Produk
                  </label>
                  <input
                    id="product-name"
                    type="text"
                    className="rounded-xl border-0 bg-[#ccced2] px-3 py-2 text-[#111827] outline-none"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="product-brand"
                    className="text-sm font-normal text-[#99A1AF]"
                  >
                    Merek
                  </label>
                  <input
                    id="product-brand"
                    type="text"
                    className="rounded-xl border-0 bg-[#ccced2] px-3 py-2 text-[#111827] outline-none"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="product-category"
                    className="text-sm font-normal text-[#99A1AF]"
                  >
                    Kategori
                  </label>
                  <input
                    id="product-category"
                    type="text"
                    className="rounded-xl border-0 bg-[#ccced2] px-3 py-2 text-[#111827] outline-none"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="product-price"
                    className="text-sm font-normal text-[#99A1AF]"
                  >
                    Harga
                  </label>
                  <input
                    id="product-price"
                    type="text"
                    className="rounded-xl border-0 bg-[#ccced2] px-3 py-2 text-[#111827] outline-none"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="product-stock"
                    className="text-sm font-normal text-[#99A1AF]"
                  >
                    Stok
                  </label>
                  <input
                    id="product-stock"
                    type="number"
                    className="rounded-xl border-0 bg-[#ccced2] px-3 py-2 text-[#111827] outline-none"
                  />
                </div>

                <div className="grid gap-1.5">
                  <label
                    htmlFor="product-discount-price"
                    className="text-sm font-normal text-[#99A1AF]"
                  >
                    Harga Sebelum Diskon
                  </label>
                  <input
                    id="product-discount-price"
                    type="text"
                    className="rounded-xl border-0 bg-[#ccced2] px-3 py-2 text-[#111827] outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <label
                  htmlFor="product-description"
                  className="text-sm font-normal text-[#99A1AF]"
                >
                  Deskripsi Produk
                </label>
                <textarea
                  id="product-description"
                  className="min-h-20.5 resize-none rounded-xl border-0 bg-[#ccced2] px-3 py-2 text-[#111827] outline-none"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <label
                  htmlFor="unggul-product"
                  className="flex items-center gap-1 text-xs font-normal text-[#111827]"
                >
                  <input
                    type="checkbox"
                    id="unggul-product"
                    value="Produk Unggulan"
                  />
                  Produk Unggulan
                </label>

                <label
                  htmlFor="new-product"
                  className="flex items-center gap-1 text-xs font-normal text-[#111827]"
                >
                  <input type="checkbox" id="new-product" value="Produk Baru" />
                  Produk Baru
                </label>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex w-full cursor-pointer items-center justify-center rounded-xl border border-black/10 bg-transparent py-2.5 text-sm font-medium text-[#99A1AF] transition-colors hover:bg-[#d4b9b9] hover:text-white"
                >
                  Batal
                </button>

                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center rounded-xl border-0 bg-[#1A73E8] py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#9292ef]"
                >
                  Tambah Produk
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
}