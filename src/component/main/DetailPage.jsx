import React from "react";
import { Link, useParams, useNavigate } from "react-router";

import Header from "../Header";
import Footer from "../Footer";
import { CartItem, formatRupiah } from "../CartItem";
import { makeProducts } from "../ProdutsContext";
import { makeCart } from "../CartContext";
import { makeModal } from "../ModalContext";
import { makeProfile } from "../ProfileContext";
import { makeAuth } from "../AuthContext";

import {
  FaChevronRight,
  FaStar,
  FaCheckCircle,
  FaShoppingCart,
  FaHeart,
  FaTruck,
  FaShieldAlt,
  FaSyncAlt,
} from "react-icons/fa";

export default function DetailPage() {
  const navigate = useNavigate();
  const { addToCart } = makeCart();
  const { showAlert } = makeModal();
  const { id } = useParams();
  const { products, loading, error, kategoriProducts } = makeProducts();
  const { isLoggedIn, currentUser } = makeAuth();
  const { createCheckout } = makeProfile();

  const [quantity, setQuantity] = React.useState(1);
  const [selectedImage, setSelectedImage] = React.useState("");
  const productId = Number(id);
  const product = products.find((item) => item.id === productId);

  React.useEffect(() => {
    if (product?.image?.[0]) {
      setTimeout(() => {
        setSelectedImage(product.image[0]);
      })
    }
  }, [product]);

  if (loading) {
    return <p className="text-center py-10">Loading produk...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  if (!product) {
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
                className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold"
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

  const {
    badgeContent,
    cartJenisContent,
    cartNameContent,
    kategori,
    rateContent,
    reviewContent,
    price,
    image,
  } = product;

  const kategoriName = kategoriProducts.find((item) => item.id === kategori)

  const isDiscount = typeof badgeContent === "number";

  const finalPrice = isDiscount
    ? price - (price * badgeContent) / 100
    : price;

  const savingPrice = isDiscount ? price - finalPrice : 0;

  const relatedProductsByBrand = products.filter(
    (item) =>
      item.id !== product.id &&
      item.cartJenisContent === product.cartJenisContent
  );

  const fallbackRelatedProducts = products.filter(
    (item) => item.id !== product.id
  );

  const relatedProducts =
    relatedProductsByBrand.length > 0
      ? relatedProductsByBrand.slice(0, 4)
      : fallbackRelatedProducts.slice(0, 4);

  const handleMinusQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handlePlusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = async () => {
    const result = addToCart(product, quantity);

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

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      navigate("/auth/login");
      return;
    }

    const isDiscount = typeof product.badgeContent === "number";
    const finalPrice = isDiscount
      ? product.price - (product.price * product.badgeContent) / 100
      : product.price;

    const checkoutItem = {
      productId: product.id,
      userEmail: currentUser.email,
      quantity,
      cartNameContent: product.cartNameContent,
      cartJenisContent: product.cartJenisContent,
      price: finalPrice,
      originalPrice: product.price,
      badgeContent: product.badgeContent,
      image: product.image,
    };

    const result = createCheckout({
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
      <header className="sticky top-0 z-50" id="header">
        <Header />
      </header>

      <main className="bg-gray-50 min-h-screen py-6">
        <section className="w-full max-w-5xl mx-auto font-sans px-4 mb-6">
          <ul className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <li>
              <Link
                to="/main/"
                className="hover:text-blue-600 transition-colors"
              >
                Beranda
              </Link>
            </li>

            <li className="text-gray-400">
              <FaChevronRight className="w-3.5 h-3.5" />
            </li>

            <li>
              <Link
                to={`/main/all-products/${kategoriName.title.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors"
              >
                {kategoriName.title}
              </Link>
            </li>

            <li className="text-gray-400">
              <FaChevronRight className="w-3.5 h-3.5" />
            </li>

            <li>
              <Link
                to="#"
                className="hover:text-blue-600 transition-colors"
              >
                {cartJenisContent}
              </Link>
            </li>

            <li className="text-gray-400">
              <FaChevronRight className="w-3.5 h-3.5" />
            </li>

            <li>
              <span className="text-gray-900 font-medium">
                {cartNameContent}
              </span>
            </li>
          </ul>
        </section>

        <section className="w-full max-w-5xl mx-auto font-sans px-4 grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-sm">
              {badgeContent !== "" &&
                badgeContent !== null &&
                badgeContent !== undefined && (
                  <span className={`absolute top-4 left-4 
                    ${isDiscount ? "bg-red-500" : "bg-blue-600"} 
                    text-white text-xs font-bold px-2.5 py-1 rounded-full z-10`}>
                    {isDiscount ? `-${badgeContent}%` : badgeContent}
                  </span>
                )}

              <img
                id="main-product-image"
                src={selectedImage || null}
                alt={cartNameContent}
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>

            <div className="flex gap-3 flex-wrap max-sm:hidden">
              {image?.map((img, index) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 bg-white rounded-xl overflow-hidden p-1 cursor-pointer transition-all ${selectedImage === img
                    ? "border-2 border-blue-600"
                    : "border border-gray-200 hover:border-gray-400"
                    }`}
                >
                  <img
                    src={img}
                    alt={`${cartNameContent} ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                {cartJenisContent} &bull; Produk
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
                {cartNameContent}
              </h1>

              <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-gray-100 mb-4 text-sm">
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="w-4.5 h-4.5" />
                  ))}
                </span>

                <span className="font-bold text-gray-800">
                  {rateContent}
                </span>

                <span className="text-gray-400">
                  ({reviewContent} Ulasan)
                </span>

                <span className="ml-auto text-green-600 font-medium flex items-center gap-1">
                  <FaCheckCircle className="w-4 h-4" />
                  Stok tersedia (45)
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-5 border border-gray-100">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-3xl font-black text-blue-600">
                    {formatRupiah(finalPrice)}
                  </span>

                  {isDiscount && (
                    <>
                      <span className="text-base text-gray-400 line-through">
                        {formatRupiah(price)}
                      </span>

                      <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-md">
                        Hemat {badgeContent}%
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

              <div className="mb-5">
                <div className="text-sm font-semibold text-gray-700 mb-2">
                  Warna:{" "}
                  <span className="text-gray-900 font-normal">
                    Hitam
                  </span>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium border-2 border-blue-600 text-blue-600 bg-blue-50/50 rounded-xl transition-all">
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
                    Stok tersisa: 45 pcs
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 border-t border-gray-100 pt-5">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
                type="button"
              >
                <FaShoppingCart className="w-4 h-4" />
                Tambah ke Keranjang
              </button>

              <button
                onClick={handleBuyNow}
                type="button"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors shadow-md shadow-blue-100 cursor-pointer text-sm"
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

            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-gray-100 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <FaTruck className="text-2xl text-blue-600" />

                <div>
                  <div className="text-xs font-bold text-gray-800">
                    Gratis Ongkir
                  </div>

                  <div className="text-[10px] text-gray-400">
                    Min. Rp 100.000
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 border-x border-gray-100 px-2">
                <FaShieldAlt className="text-2xl text-blue-600" />

                <div>
                  <div className="text-xs font-bold text-gray-800">
                    Garansi Aman
                  </div>

                  <div className="text-[10px] text-gray-400">
                    SSL Terenkripsi
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <FaSyncAlt className="text-2xl text-blue-600" />

                <div>
                  <div className="text-xs font-bold text-gray-800">
                    Retur 30 Hari
                  </div>

                  <div className="text-[10px] text-gray-400">
                    Gratis biaya retur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl mx-auto font-sans px-4 mb-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex border-b border-gray-200 bg-gray-50/70 p-2 gap-1">
              <button className="px-5 py-2.5 text-sm font-semibold rounded-xl text-blue-600 bg-white shadow-sm transition-all cursor-pointer">
                Deskripsi
              </button>

              <button className="px-5 py-2.5 text-sm font-medium rounded-xl text-gray-500 hover:text-gray-800 transition-all cursor-pointer">
                Spesifikasi
              </button>

              <button className="px-5 py-2.5 text-sm font-medium rounded-xl text-gray-500 hover:text-gray-800 transition-all cursor-pointer">
                Ulasan ({reviewContent})
              </button>
            </div>

            <div className="p-6 text-sm text-gray-600 leading-relaxed">
              <p>
                {cartNameContent} dari {cartJenisContent} adalah produk pilihan
                dengan rating {rateContent} dan sudah mendapatkan {reviewContent} ulasan.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl mx-auto font-sans px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Produk Terkait
            </h2>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            id="terkait-sale-item"
          >
            {relatedProducts.map((item) => (
              <CartItem
                key={`${item.id}-${item.cartNameContent}`}
                item={item}
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