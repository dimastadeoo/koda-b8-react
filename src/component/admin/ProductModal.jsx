import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function ProductModal({
  isOpen,
  onClose,
  onSave,
  onDeleteImage,
  product = null,
  categories = [],
  merks = [],
  loading = false,
}) {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    id_merk: '',
    description: '',
    discount: '',
    categories: '',
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [existingImages, setExistingImages] = useState([]);

  // =====================================================
  // INITIAL DATA
  // =====================================================

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    async function setData() {
        if (product) {
          setFormData({
            name: product.name || '',
            price: product.price || '',
            stock: product.stock || '',
            id_merk:
              product.id_merk ||
              product.merk?.id ||
              '',
            description: product.description || '',
            discount: product.discount || '',
            categories:
              product.categories
                ?.map((category) => category.id)
                .join(',') ||
              '',
          });
    
          setExistingImages(
            Array.isArray(product.images)
              ? product.images
              : []
          );
        } else {
          setFormData({
            name: '',
            price: '',
            stock: '',
            id_merk: '',
            description: '',
            discount: '',
            categories: '',
          });
    
          setExistingImages([]);
        }
    
        setSelectedFiles([]);
        setPreviewUrls([]);
    }
    setData()

  }, [product, isOpen]);

  // =====================================================
  // CLOSE / CLEANUP
  // =====================================================

  const handleClose = () => {
    setSelectedFiles([]);
    setPreviewUrls([]);
    setExistingImages([]);

    onClose();
  };

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // FILE CHANGE
  // =====================================================

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);

    if (files.length === 0) {
      return;
    }

    setSelectedFiles((prev) => [
      ...prev,
      ...files,
    ]);

    const urls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewUrls((prev) => [
      ...prev,
      ...urls,
    ]);

    // Supaya input bisa memilih file yang sama lagi
    event.target.value = '';
  };

  // =====================================================
  // REMOVE NEW FILE
  // =====================================================

  const removeFile = (index) => {
    const previewUrl = previewUrls[index];

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFiles((prev) =>
      prev.filter((_, i) => i !== index)
    );

    setPreviewUrls((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  // =====================================================
  // DELETE EXISTING IMAGE
  // =====================================================

  const handleDeleteExistingImage = async (imageId) => {
    if (!onDeleteImage) {
      return;
    }

    const confirmed = window.confirm(
      'Apakah kamu yakin ingin menghapus gambar ini?'
    );

    if (!confirmed) {
      return;
    }

    try {
      await onDeleteImage(imageId);

      setExistingImages((prev) =>
        prev.filter(
          (image) => image.id !== imageId
        )
      );
    } catch (err) {
      console.error(
        'Gagal menghapus gambar:',
        err
      );
    }
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    const submitData = new FormData();

    // Product fields
    submitData.append(
      'name',
      formData.name
    );

    submitData.append(
      'price',
      formData.price
    );

    submitData.append(
      'stock',
      formData.stock
    );

    if (formData.id_merk) {
      submitData.append(
        'id_merk',
        formData.id_merk
      );
    }

    if (formData.description) {
      submitData.append(
        'description',
        formData.description
      );
    }

    if (formData.discount !== '') {
      submitData.append(
        'discount',
        formData.discount
      );
    }

    if (formData.categories) {
      submitData.append(
        'categories',
        formData.categories
      );
    }

    // ===================================================
    // NEW IMAGES
    // ===================================================

    selectedFiles.forEach((file) => {
      submitData.append(
        'images',
        file
      );
    });

    try {
      await onSave(
        submitData,
        product?.id || null
      );
    } catch (err) {
      console.error(
        'Submit product error:',
        err
      );
    }
  };

  // =====================================================
  // CLEANUP OBJECT URL
  // =====================================================

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [previewUrls]);

  // =====================================================
  // MODAL CLOSED
  // =====================================================

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h2 className="text-xl font-semibold">
              {product
                ? 'Edit Produk'
                : 'Tambah Produk'}
            </h2>

            <p className="text-sm text-gray-500">
              {product
                ? 'Perbarui informasi produk'
                : 'Tambahkan produk baru'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
          >
            <FaTimes />
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >
          {/* NAME */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Nama Produk
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
              placeholder="Nama produk"
            />
          </div>

          {/* PRICE + STOCK */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Harga
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
                placeholder="Harga"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Stok
              </label>

              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                min="0"
                className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
                placeholder="Stok"
              />
            </div>
          </div>

          {/* MERK */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Merk
            </label>

            <select
              name="id_merk"
              value={formData.id_merk}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
            >
              <option value="">
                Pilih Merk
              </option>

              {merks.map((merk) => (
                <option
                  key={merk.id}
                  value={merk.id}
                >
                  {merk.name}
                </option>
              ))}
            </select>
          </div>

          {/* CATEGORY */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Kategori
            </label>

            <select
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
            >
              <option value="">
                Pilih Kategori
              </option>

              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.id}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* DISCOUNT */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Diskon
            </label>

            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              min="0"
              className="w-full rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
              placeholder="Diskon"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Deskripsi
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full resize-none rounded-lg border px-3 py-2 outline-none focus:border-blue-500"
              placeholder="Deskripsi produk"
            />
          </div>

          {/* EXISTING IMAGES */}
          {product && existingImages.length > 0 && (
            <div>
              <label className="mb-2 block text-sm font-medium">
                Gambar Saat Ini
              </label>

              <div className="flex flex-wrap gap-3">
                {existingImages.map((image) => (
                  <div
                    key={image.id}
                    className="relative h-20 w-20 overflow-hidden rounded-lg border"
                  >
                    <img
                      src={image.url_img}
                      alt="Product"
                      className="h-full w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        handleDeleteExistingImage(
                          image.id
                        )
                      }
                      className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
                      title="Hapus gambar"
                    >
                      <FaTimes size={11} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* UPLOAD */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              {product
                ? 'Tambah Gambar'
                : 'Gambar Produk'}
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="block w-full cursor-pointer rounded-lg border p-2 text-sm"
            />
          </div>

          {/* NEW IMAGE PREVIEW */}
          {previewUrls.length > 0 && (
            <div>
              <label className="mb-2 block text-sm font-medium">
                Gambar Baru
              </label>

              <div className="flex flex-wrap gap-3">
                {previewUrls.map(
                  (url, index) => (
                    <div
                      key={`${url}-${index}`}
                      className="relative h-20 w-20 overflow-hidden rounded-lg border"
                    >
                      <img
                        src={url}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          removeFile(index)
                        }
                        className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
                      >
                        <FaTimes size={11} />
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* FOOTER */}
          <div className="flex justify-end gap-3 border-t pt-5">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? 'Menyimpan...'
                : product
                  ? 'Update Produk'
                  : 'Tambah Produk'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}