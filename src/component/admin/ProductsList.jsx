import { useState, useEffect} from "react";
import AsideContent from "../Aside";
import NavPage from "../NavPage";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
  FaFilter,
  FaPlus,
  // FaTimes,
  FaStar,
} from "react-icons/fa";

import { useProducts } from "../custom_hooks/useProduct";
import ProductModal from "./ProductModal";
import { useAdminProducts } from "../custom_hooks/useProductAdmin";
import {formatRupiah} from "../CartItem"
import {makeModal} from "../ModalContext"
import { getImageProducts } from "../utils/image";

// const products = [
//   {
//     id: 1,
//     name: "Headphone Wireless Premium",
//     brand: "SoundWave",
//     image: "/item-1.png",
//     category: "Elektronik",
//     price: "Rp 450.000",
//     oldPrice: "Rp 650.000",
//     stock: 45,
//     rating: 4.8,
//     reviews: 512,
//     statuses: ["Baru", "Unggulan", "Promo"],
//   },
// ];

// const summaryProducts = [
//   {
//     total: 18,
//     label: "Total Produk",
//   },
//   {
//     total: 7,
//     label: "Total Baru",
//   },
//   {
//     total: 0,
//     label: "Stok Rendah",
//   },
//   {
//     total: 11,
//     label: "Produk Promo",
//   },
// ];

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

function ProductRow({ product, onEdit, onDelete, onView }) {
  const primaryImage = getImageProducts(product.primary_image) || getImageProducts("example.jpeg");

  return (
    <tr className="border-b border-black/10 last:border-b-0 hover:bg-gray-50">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <img src={primaryImage} alt={product.name} className="h-10 w-10 rounded-lg bg-[#F3F4F6] object-contain" />
          <div className="grid">
            <h3 className="text-sm font-normal text-[#111827]">{product.name}</h3>
            <p className="text-xs font-normal text-[#99A1AF]">{product.merk_name || '-'}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <StatusBadge>{product.categories?.[0]?.name || 'Umum'}</StatusBadge>
      </td>
      <td className="px-4 py-3">
        <div className="grid">
          <h2 className="text-sm font-normal text-[#1A73E8]">{formatRupiah(product.price)}</h2>
          {product.discount > 0 && (
            <p className="text-xs font-normal text-[#99A1AF] line-through">{formatRupiah(product.original_price)}</p>
          )}
        </div>
      </td>
      <td className="px-4 py-3">
        <h3 className={`text-sm font-normal ${product.stock < 10 ? 'text-red-500' : 'text-[#111827]'}`}>
          {product.stock}
        </h3>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <FaStar size={12} fill="gold" />
          <h3 className="text-sm font-normal text-[#111827]">{product.average_rating?.toFixed(1) || '0'}</h3>
          <p className="text-xs font-normal text-[#99A1AF]">({product.total_reviews || 0})</p>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-wrap gap-1">
          {product.is_new && <StatusBadge>Baru</StatusBadge>}
          {product.is_featured && <StatusBadge>Unggulan</StatusBadge>}
          {product.discount > 0 && <StatusBadge>Promo</StatusBadge>}
          {!product.is_new && !product.is_featured && !product.discount && <span className="text-xs text-[#99A1AF]">-</span>}
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => onView(product.id)} className="cursor-pointer p-1 text-[#6B7280] hover:text-[#1A73E8]">
            <FaEye size={16} />
          </button>
          <button type="button" onClick={() => onEdit(product)} className="cursor-pointer p-1 text-[#6B7280] hover:text-[#1A73E8]">
            <FaEdit size={16} />
          </button>
          <button type="button" onClick={() => onDelete(product.id)} className="cursor-pointer p-1 text-[#6B7280] hover:text-[#DC2626]">
            <FaTrash size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function ProductsList() {
  const { loading, create, update, remove } = useAdminProducts();
  const { products, loadProducts, categories, merks, loadCategories, loadMerks } = useProducts();
  const { showConfirm, showAlert } = makeModal();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    loadProducts();
    if (categories.length === 0) loadCategories();
    if (merks.length === 0) loadMerks();
  }, [loadCategories, loadMerks, loadProducts, categories, merks]);

  const handleSaveProduct = async (formData, productId) => {
    try {
      let result;
      if (productId) {
        // Update: karena formData mengandung file, kita perlu pisahkan
        // Untuk update, kita hanya kirim data text, tidak gambar (gambar via endpoint terpisah)
        const data = {
          name: formData.get('name'),
          price: formData.get('price'),
          stock: formData.get('stock'),
          id_merk: formData.get('id_merk') || undefined,
          description: formData.get('description') || undefined,
          categories: formData.get('categories') || undefined,
          discount: formData.get('discount') || undefined,
        };
        // Hapus field yang kosong
        Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
        result = await update(productId, data);
      } else {
        result = await create(formData);
      }
      if (result.error) throw new Error(result.error);
      await showAlert({
        title: "Berhasil",
        message: productId ? "Produk berhasil diperbarui" : "Produk berhasil ditambahkan",
      });
      setIsModalOpen(false);
      setEditingProduct(null);
      loadProducts();
    } catch (err) {
      await showAlert({
        title: "Gagal",
        message: err.message || "Terjadi kesalahan",
      });
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = async (productId) => {
    const confirmed = await showConfirm({
      title: "Hapus produk?",
      message: "Produk ini akan dihapus permanen termasuk gambarnya.",
      confirmText: "Ya, Hapus",
      cancelText: "Batal",
    });
    if (!confirmed) return;
    try {
      await remove(productId);
      await showAlert({ title: "Berhasil", message: "Produk berhasil dihapus" });
      loadProducts();
    } catch (err) {
      await showAlert({ title: "Gagal", message: err.message });
    }
  };

  // Filter & Search
  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.merk_name?.toLowerCase() || '').includes(searchTerm.toLowerCase());
    const matchCategory = filterCategory === "all" ||
      p.categories?.some(c => c.id === parseInt(filterCategory));
    return matchSearch && matchCategory;
  });

  // Stats
  const totalProducts = products.length;
  const lowStock = products.filter(p => p.stock < 10).length;
  const promoProducts = products.filter(p => p.discount > 0).length;

  const summaryProducts = [
    { total: totalProducts, label: "Total Produk" },
    { total: products.filter(p => p.is_new).length, label: "Produk Baru" },
    { total: lowStock, label: "Stok Rendah" },
    { total: promoProducts, label: "Produk Promo" },
  ];

  if (loading && products.length === 0) {
    return (
      <>
        <AsideContent />
        <NavPage />
        <main className="min-h-screen bg-[#F8F9FA] pt-16 pl-18 md:pl-60">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Memuat produk...</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <AsideContent />
      <NavPage />

      <main className="min-h-screen bg-[#F8F9FA] pl-18 pt-16 md:pl-60">
        <section className="grid gap-6 p-6">
          <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
            <h1 className="text-2xl font-medium text-[#111827]">Manajemen Produk</h1>
            <button
              type="button"
              onClick={() => { setEditingProduct(null); setIsModalOpen(true); }}
              className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <FaPlus size={14} />
              <span className="text-sm font-medium">Tambah Produk</span>
            </button>
          </div>

          {/* Search & Filter */}
          <div className="grid items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 md:grid-cols-[minmax(0,1fr)_max-content_max-content]">
            <div className="flex items-center gap-2 rounded-xl bg-[#F3F4F6] px-4 py-2.5">
              <FaSearch size={16} className="text-[#6B7280]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border-0 bg-transparent text-sm outline-none placeholder:text-[#6B7280]"
                placeholder="Cari produk atau merek..."
              />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="cursor-pointer rounded-xl border border-[#111827] bg-white px-3 py-2.5 text-sm outline-none"
            >
              <option value="all">Semua Kategori</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl border border-[#111827] bg-transparent px-4 py-2.5 transition-colors hover:bg-gray-100"
            >
              <FaFilter size={16} />
              <span className="text-sm font-medium text-[#6B7280]">Filter</span>
            </button>
          </div>

          {/* Stats */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summaryProducts.map((item) => (
              <article key={item.label} className="grid place-items-center gap-1 rounded-2xl border border-black/10 bg-white p-4 text-center">
                <h1 className="text-2xl font-bold text-[#111827]">{item.total}</h1>
                <p className="text-xs font-normal text-[#99A1AF]">{item.label}</p>
              </article>
            ))}
          </section>

          {/* Table */}
          <section className="grid overflow-hidden rounded-2xl border border-black/10 bg-white">
            <div className="flex items-center px-4 py-3 text-sm font-normal text-[#99A1AF]">
              {filteredProducts.length} Produk
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-245 border-collapse">
                <thead>
                  <tr className="bg-[#F1F2F4] text-left text-sm font-normal text-[#6B7280]">
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
                  {filteredProducts.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center py-8 text-[#6B7280]">
                        {searchTerm ? "Tidak ada produk yang sesuai" : "Belum ada produk"}
                      </td>
                    </tr>
                  ) : (
                    filteredProducts.map((p) => (
                      <ProductRow
                        key={p.id}
                        product={p}
                        onEdit={handleEditProduct}
                        onDelete={handleDeleteProduct}
                        onView={(id) => {
                          // Bisa navigasi ke detail atau tampilkan alert
                          showAlert({
                            title: "Detail Produk",
                            message: `ID: ${id}\nNama: ${p.name}\nHarga: ${formatRupiah(p.price)}`
                          });
                        }}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </main>

      {/* Modal Tambah/Edit */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingProduct(null); }}
        onSave={handleSaveProduct}
        product={editingProduct}
        categories={categories}
        merks={merks}
        loading={loading}
      />
    </>
  );
}