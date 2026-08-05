/**
 * Transform product from backend format to CartItem format
 * @param {Object} product - Product from backend API
 * @returns {Object} Transformed product with CartItem expected fields
 */
export function transformProduct(product) {
  // Ambil gambar pertama dari array images, atau primary_image, atau placeholder
  const images = product.images?.length
    ? product.images.map(img => img.url_img)
    : [product.primary_image || '/img/placeholder.png'];

  // Cek apakah ada diskon? Jika tidak ada, set 0
  const discount = product.discount || 0;

  // Rating dan total review dari backend (jika ada)
  const rating = product.average_rating || 0;
  const totalReviews = product.total_reviews || 0;

  return {
    id: product.id,
    // Nama produk
    cartNameContent: product.name,
    // Brand / jenis
    cartJenisContent: product.merk_name || 'Umum',
    // Harga
    price: product.price,
    // Gambar (array)
    image: images,
    // Badge / label diskon (0 jika tidak ada)
    badgeContent: discount,
    // Rating (bisa berupa integer atau float, kita bulatkan ke 1 desimal)
    rateContent: parseFloat(rating.toFixed(1)),
    // Total review
    reviewContent: totalReviews,
    // Kategori (ambil dari categories pertama jika ada)
    kategori: product.categories?.[0]?.id || 0,
    // Simpan data asli jika diperlukan untuk keperluan lain
    _original: product,
  };
}