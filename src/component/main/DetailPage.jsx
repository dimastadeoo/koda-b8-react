import React from "react";
import { Link, useParams, useNavigate } from "react-router";

import Header from "../Header";
import Footer from "../Footer";
import { CartItem, formatRupiah } from "../CartItem";
import { transformProduct } from "../utils/productTransformer.js";
// import { makeProducts } from "../ProdutsContext";
import { useProducts } from "../custom_hooks/useProduct.js";
import { makeCart } from "../CartContext";
import { makeModal } from "../ModalContext";
import { useProfileData } from "../custom_hooks/useProfileData.js";

import { useAuth } from "../custom_hooks/useAuth.js";

import {
  FaChevronRight,
  FaStar,
  FaCheckCircle,
  FaShoppingCart,
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaSyncAlt,
  FaStarHalfAlt,
} from "react-icons/fa";

// Helper render bintang
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="w-4 h-4 text-amber-400" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="w-4 h-4 text-amber-400" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaStar key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
    </>
  );
};

export default function DetailPage() {
  const navigate = useNavigate();
  const { addToCart } = makeCart();
  const { showAlert } = makeModal();
  const { id } = useParams();
  const {
    selectedProduct,
    loading,
    error,
    loadProductDetail,
    products,
    categories,
  } = useProducts();
  const { isLoggedIn, currentUser } = useAuth();
  const { createOrder } = useProfileData();

  const [quantity, setQuantity] = React.useState(1);
  const [selectedImage, setSelectedImage] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("description");
  const productId = Number(id);

  // 🔥 ONLY ONE useEffect for fetching product detail
  React.useEffect(() => {
    if (productId) {
      loadProductDetail(productId);
    }

  }, [productId]);

  // 🔥 Set default image when product loaded
  React.useEffect(() => {
    if (selectedProduct) {
      const primaryImg = selectedProduct.images?.find(img => img.is_primary) || selectedProduct.images?.[0];
      setTimeout(()=>{
        if (primaryImg) {
          setSelectedImage(primaryImg.url_img);
        } else if (selectedProduct.primary_image) {
          setSelectedImage(selectedProduct.primary_image);
        }
      })
    }
  }, [selectedProduct]); 

 
  if (loading) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-gray-600">Memuat produk...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-10">
          <div className="max-w-5xl mx-auto px-4 text-center text-red-500">
            <p>{error}</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!selectedProduct) {
    return (
      <>
        <Header />
        <main className="bg-gray-50 min-h-screen py-10">
          <section className="w-full max-w-5xl mx-auto font-sans px-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Produk tidak ditemukan
              </h1>
              <p className="text-gray-500 mb-6">
                Produk dengan ID tersebut tidak tersedia.
              </p>
              <Link
                to="/main/"
                className="inline-flex items-center justify-center bg-green-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const product = selectedProduct;
  const {
    id: productIdValue,
    name,
    price,
    stock = 0,
    description,
    average_rating = 0,
    total_reviews = 0,
    images = [],
    specifications = [],
    categories: productCategories = [],
    merk_name,
  } = product;

  // Cari kategori untuk breadcrumb
  const categoryId = productCategories?.[0]?.id || 0;
  const kategoriName = categories.find((cat) => cat.id === categoryId);

  // Transform untuk CartItem (jika digunakan di related products)
  const transformedProduct = transformProduct(product);

  // Hitung harga final (diskon dari backend jika ada)
  const discount = product.discount || 0;
  const isDiscount = discount > 0;
  const finalPrice = isDiscount ? price - (price * discount) / 100 : price;
  const savingPrice = isDiscount ? price - finalPrice : 0;

  // Produk terkait
  const relatedProductsByBrand = products.filter(
    (item) => item.id !== productIdValue && item.merk_name === merk_name
  );
  const fallbackRelatedProducts = products.filter(
    (item) => item.id !== productIdValue
  );
  const relatedProducts =
    relatedProductsByBrand.length > 0
      ? relatedProductsByBrand.slice(0, 4)
      : fallbackRelatedProducts.slice(0, 4);

  // Handler quantity
  const handleMinusQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };
  const handlePlusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Add to cart
  const handleAddToCart = async () => {
    const result = addToCart(transformedProduct, quantity);

    if (result.requireLogin) {
      await showAlert({
        title: "Login diperlukan",
        message: result.message,
      });
      navigate("/auth/login");
      return;
    }

    await showAlert({
      title: "Berhasil",
      message: result.message,
    });
  };

  // Buy now
  const handleBuyNow = () => {
    if (!isLoggedIn) {
      navigate("/auth/login");
      return;
    }

    const checkoutItem = {
      productId: productIdValue,
      userEmail: currentUser.email,
      quantity,
      cartNameContent: name,
      cartJenisContent: merk_name || "Umum",
      price: finalPrice,
      originalPrice: price,
      badgeContent: discount,
      image: images.map((img) => img.url_img),
    };

    const result = createOrder({
      source: "detail",
      items: [checkoutItem],
      total: finalPrice * quantity,
    });

    if (result.requireLogin) {
      navigate("/auth/login");
      return;
    }

    navigate(`/checkout/${result.checkout.id}/shipping`, {
      state: {
        checkout: result.checkout,
      },
    });
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen py-6">
        {/* Breadcrumb */}
        <section className="w-full max-w-5xl mx-auto font-sans px-4 mb-6">
          <ul className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <li>
              <Link to="/main/" className="hover:text-green-600 transition-colors">
                Beranda
              </Link>
            </li>
            <li className="text-gray-400">
              <FaChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link
                to={`/main/all-products/${kategoriName?.name?.toLowerCase() || "all"}`}
                className="hover:text-green-600 transition-colors"
              >
                {kategoriName?.name || "Produk"}
              </Link>
            </li>
            <li className="text-gray-400">
              <FaChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link to="#" className="hover:text-green-600 transition-colors">
                {merk_name || "Brand"}
              </Link>
            </li>
            <li className="text-gray-400">
              <FaChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <span className="text-gray-900 font-medium">{name}</span>
            </li>
          </ul>
        </section>

        {/* Product Detail */}
        <section className="w-full max-w-5xl mx-auto font-sans px-4 grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Gambar */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-sm">
              {isDiscount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
                  -{discount}%
                </span>
              )}
              <img
                id="main-product-image"
                src={selectedImage || "/img/placeholder.png"}
                alt={name}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>

            <div className="flex gap-3 flex-wrap max-sm:hidden">
              {images.map((img, index) => (
                <button
                  key={img.id || index}
                  type="button"
                  onClick={() => setSelectedImage(img.url_img)}
                  className={`w-20 h-20 bg-white rounded-xl overflow-hidden p-1 cursor-pointer transition-all ${
                    selectedImage === img.url_img
                      ? "border-2 border-blue-600"
                      : "border border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img.url_img}
                    alt={`${name} ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info Produk */}
          <div className="md:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                {merk_name || "Produk"} &bull; Produk
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
                {name}
              </h1>

              {/* Rating */}
              <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-gray-100 mb-4 text-sm">
                <span className="flex items-center gap-0.5">
                  {renderStars(average_rating)}
                </span>
                <span className="font-bold text-gray-800 ml-1">
                  {average_rating.toFixed(1)}
                </span>
                <span className="text-gray-400">({total_reviews} Ulasan)</span>
                <span className="ml-auto text-green-600 font-medium flex items-center gap-1">
                  <FaCheckCircle className="w-4 h-4" />
                  {stock > 0 ? `Stok tersedia (${stock})` : "Stok habis"}
                </span>
              </div>

              {/* Harga */}
              <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-3xl font-black text-green-600">
                    {formatRupiah(finalPrice)}
                  </span>
                  {isDiscount && (
                    <>
                      <span className="text-base text-gray-400 line-through">
                        {formatRupiah(price)}
                      </span>
                      <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-md">
                        Hemat {discount}%
                      </span>
                    </>
                  )}
                </div>
                {isDiscount && (
                  <div className="text-xs text-green-600 font-medium mt-1">
                    Kamu hemat {formatRupiah(savingPrice)}
                  </div>
                )}
              </div>

              {/* Warna (opsional) */}
              <div className="mb-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">
                  Warna: <span className="text-gray-900 font-normal">Hitam</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium border-2 border-blue-600 text-green-600 bg-green-50/50 rounded-xl transition-all">
                    Hitam
                  </button>
                  <button className="px-4 py-2 text-sm font-medium border border-gray-200 text-gray-700 hover:border-gray-400 rounded-xl transition-all">
                    Putih
                  </button>
                  <button className="px-4 py-2 text-sm font-medium border border-gray-200 text-gray-700 hover:border-gray-400 rounded-xl transition-all">
                    Biru
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-2">
                  Jumlah
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-xl bg-white overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={handleMinusQuantity}
                      className="w-10 h-10 flex justify-center items-center font-bold text-gray-600 hover:bg-gray-100 transition-colors text-lg cursor-pointer"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="w-12 h-10 text-center font-semibold text-sm text-gray-800 outline-none bg-transparent"
                    />
                    <button
                      type="button"
                      onClick={handlePlusQuantity}
                      className="w-10 h-10 flex justify-center items-center font-bold text-gray-600 hover:bg-gray-100 transition-colors text-lg cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-gray-400">
                    Stok tersisa: {stock} pcs
                  </span>
                </div>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-3 border-t border-gray-100 pt-5">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-white border border-blue-600 text-green-600 hover:bg-green-50 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
                type="button"
              >
                <FaShoppingCart className="w-4 h-4" />
                Tambah ke Keranjang
              </button>

              <button
                onClick={handleBuyNow}
                type="button"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-md shadow-blue-100 cursor-pointer text-sm"
              >
                Beli Sekarang
              </button>

              <button
                type="button"
                className="w-12 h-12 bg-white border border-gray-200 hover:border-red-200 text-gray-400 hover:text-red-500 rounded-xl flex justify-center items-center text-lg transition-colors shadow-sm cursor-pointer shrink-0"
              >
                <FaHeart className="w-5 h-5" />
              </button>
            </div>

            {/* Promo */}
            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-gray-100 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <FaTruck className="text-2xl text-green-600" />
                <div>
                  <div className="text-xs font-bold text-gray-800">Gratis Ongkir</div>
                  <div className="text-[10px] text-gray-400">Min. Rp 100.000</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 border-x border-gray-100 px-2">
                <FaShieldAlt className="text-2xl text-green-600" />
                <div>
                  <div className="text-xs font-bold text-gray-800">Garansi Aman</div>
                  <div className="text-[10px] text-gray-400">SSL Terenkripsi</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <FaSyncAlt className="text-2xl text-green-600" />
                <div>
                  <div className="text-xs font-bold text-gray-800">Retur 30 Hari</div>
                  <div className="text-[10px] text-gray-400">Gratis biaya retur</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deskripsi, Spesifikasi, Ulasan */}
        <section className="w-full max-w-5xl mx-auto font-sans px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex border-b border-gray-200 bg-gray-50/70 p-2 gap-1 flex-wrap">
              <button
                onClick={() => setActiveTab("description")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeTab === "description"
                    ? "text-green-600 bg-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Deskripsi
              </button>
              <button
                onClick={() => setActiveTab("specifications")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeTab === "specifications"
                    ? "text-green-600 bg-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Spesifikasi
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeTab === "reviews"
                    ? "text-green-600 bg-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                Ulasan ({total_reviews})
              </button>
            </div>

            <div className="p-6 text-sm text-gray-600 leading-relaxed">
              {activeTab === "description" && (
                <div>
                  <p>{description || `Deskripsi produk ${name} dari ${merk_name || "toko"} dengan kualitas terbaik.`}</p>
                </div>
              )}

              {activeTab === "specifications" && (
                <div>
                  {specifications && specifications.length > 0 ? (
                    <table className="w-full text-sm">
                      <tbody>
                        {specifications.map((spec, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-2 font-semibold text-gray-700 w-1/3">{spec.key}</td>
                            <td className="py-2 text-gray-600">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-gray-500">Belum ada spesifikasi untuk produk ini.</p>
                  )}
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  {total_reviews > 0 ? (
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-gray-900">{average_rating.toFixed(1)}</span>
                        <span className="flex items-center gap-0.5">
                          {renderStars(average_rating)}
                        </span>
                        <span className="text-gray-500">({total_reviews} ulasan)</span>
                      </div>
                      {/* Di sini bisa ditambahkan list reviews dari API jika tersedia */}
                      <p className="text-gray-500">Fitur ulasan akan segera hadir.</p>
                    </div>
                  ) : (
                    <p className="text-gray-500">Belum ada ulasan untuk produk ini.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Produk Terkait */}
        <section className="w-full max-w-5xl mx-auto font-sans px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Produk Terkait
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <CartItem
                key={item.id}
                item={transformProduct(item)}
              />
            ))}
          </div>
        </section>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}