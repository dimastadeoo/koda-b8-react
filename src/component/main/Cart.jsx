import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  FaHeart,
  FaMinus,
  FaPlus,
  FaShieldAlt,
  FaTag,
  FaTrash,
  FaLock,
} from "react-icons/fa";

import Header from "../Header";
import Footer from "../Footer";
import { CartItem, formatRupiah } from "../CartItem";
import { makeAuth } from "../AuthContext"
import { makeCart } from "../CartContext";
import { makeProducts } from "../ProdutsContext";
import { makeModal } from "../ModalContext";
import { makeProfile } from "../ProfileContext";

export default function Cart() {
  const navigate = useNavigate();

  const { isLoggedIn } = makeAuth();
  const { createCheckout } = makeProfile();
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    removeCheckedOutCartItems
  } = makeCart();

  const { products } = makeProducts();
  const { showConfirm } = makeModal();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login");
    }
  }, [isLoggedIn, navigate]);


  const getFinalPrice = (item) => {
    const isDiscount = typeof item.badgeContent === "number";

    if (!isDiscount) {
      return item.price;
    }

    return item.price - (item.price * item.badgeContent) / 100;
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + getFinalPrice(item) * item.quantity,
    0
  );

  const recommendationProducts = products
    .filter(
      (product) =>
        !cartItems.some((cartItem) => cartItem.productId === product.id)
    )
    .slice(0, 4);

  const handleRemoveItem = async (productId) => {
    const confirmed = await showConfirm({
      title: "Hapus produk?",
      message: "Produk ini akan dihapus dari keranjang kamu.",
      confirmText: "Ya, Hapus",
      cancelText: "Batal",
    });

    if (!confirmed) return;

    removeFromCart(productId);
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate("/auth/login");
      return;
    }

    if (cartItems.length === 0) return;

    const result = createCheckout({
      source: "cart",
      items: cartItems,
      total: subtotal,
    });

    if (result.requireLogin) {
      navigate("/auth/login");
      return;
    }

    if (result.success) {
      removeCheckedOutCartItems(cartItems);

      navigate(`/main/checkout/${result.checkout.id}/shipping`, {
        state: {
          checkout: result.checkout,
        },
      });
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <header className="sticky top-0 z-50" id="header">
        <Header />
      </header>

      <main className="min-h-screen bg-slate-50 py-10 text-slate-800 antialiased grid gap-8">
        <section className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Keranjang Belanja ({totalQuantity} item)
          </h1>
        </section>

        <section className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="grid gap-3 items-start">
              {cartItems.length === 0 ? (
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <h2 className="text-lg font-bold text-slate-800">
                    Keranjang masih kosong
                  </h2>

                  <p className="text-sm text-slate-400 mt-2">
                    Yuk cari produk favorit kamu dan tambahkan ke keranjang.
                  </p>

                  <button
                    type="button"
                    onClick={() => navigate("/main/all-products")}
                    className="mt-5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Belanja Sekarang
                  </button>
                </div>
              ) : (
                cartItems.map((item) => {
                  const finalPrice = getFinalPrice(item);

                  return (
                    <div
                      key={`${item.userEmail}-${item.productId}`}
                      className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center relative"
                    >
                      <img
                        src={item.image?.[0]}
                        alt={item.cartNameContent}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl bg-amber-100 shrink-0"
                      />

                      <div className="flex-1 space-y-1">
                        <h3 className="text-base font-semibold sm:text-lg pr-8">
                          {item.cartNameContent}
                        </h3>

                        <p className="text-xs text-slate-400 font-medium">
                          {item.cartJenisContent}
                        </p>

                        <p className="text-[11px] text-slate-400">
                          Ditambahkan oleh: {item.userEmail}
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                          <div className="flex items-center border border-slate-200 rounded-full px-2 py-1 bg-slate-50">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.productId)}
                              className="w-7 h-7 flex items-center justify-center font-bold text-slate-500 hover:text-slate-800 transition-colors"
                            >
                              <FaMinus className="w-3 h-3" />
                            </button>

                            <span className="w-8 text-center text-sm font-semibold">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => increaseQuantity(item.productId)}
                              className="w-7 h-7 flex items-center justify-center font-bold text-slate-500 hover:text-slate-800 transition-colors"
                            >
                              <FaPlus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="pt-2 text-xs font-medium text-slate-400 hover:text-rose-500 flex items-center gap-1 transition-colors group"
                        >
                          <FaHeart className="text-sm group-hover:scale-110 transition-transform" />
                          Simpan ke Wishlist
                        </button>
                      </div>

                      <div className="w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end sm:self-stretch gap-4 pt-4 sm:pt-0 border-t sm:border-none border-slate-100">
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(item.productId)}
                          className="sm:absolute sm:top-5 sm:right-5 p-1 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 transition-all"
                          aria-label="Hapus produk"
                        >
                          <FaTrash className="w-5 h-5" />
                        </button>

                        <div className="sm:mt-auto text-right">
                          {typeof item.badgeContent === "number" && (
                            <p className="text-xs text-slate-400 line-through">
                              {formatRupiah(item.price)}
                            </p>
                          )}

                          <p className="text-lg font-bold text-blue-600">
                            {formatRupiah(finalPrice * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="text-sm sm:text-base font-bold flex items-center gap-2">
                <FaTag className="text-blue-600" />
                Kode Promo
              </h3>

              <div className="flex gap-2 max-w-md">
                <input
                  type="text"
                  placeholder="Masukkan kode promo"
                  className="flex-1 bg-slate-50 border-b-2 border-slate-200 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all rounded-t-lg"
                />

                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm shadow-blue-200 transition-colors active:scale-95"
                >
                  Terapkan
                </button>
              </div>

              <p className="text-xs text-slate-400 font-medium">
                Coba:{" "}
                <span className="font-semibold text-slate-500">HEMAT10</span>,{" "}
                <span className="font-semibold text-slate-500">BELIMUDAH</span>, atau{" "}
                <span className="font-semibold text-slate-500">NEWUSER</span>
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-5 lg:sticky lg:top-28">
            <h3 className="text-lg font-bold">Ringkasan Pesanan</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between font-medium text-slate-500">
                <span>Subtotal ({totalQuantity} item)</span>
                <span className="text-slate-800">
                  {formatRupiah(subtotal)}
                </span>
              </div>

              <div className="flex justify-between font-medium text-slate-500">
                <span>Ongkos Kirim</span>
                <span className="text-emerald-600 font-bold tracking-wide text-xs bg-emerald-50 px-2 py-0.5 rounded">
                  GRATIS
                </span>
              </div>

              <hr className="border-slate-100 my-4" />

              <div className="flex justify-between items-center text-base font-bold">
                <span>Total</span>
                <span className="text-lg text-blue-600">
                  {formatRupiah(subtotal)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
              className={`w-full text-white font-bold py-3.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99] ${cartItems.length === 0
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 shadow-orange-100"
                }`}
            >
              <FaShieldAlt className="w-4 h-4" />
              Checkout Aman
            </button>

            <div className="text-center space-y-1 pt-2">
              <p className="text-xs font-semibold text-slate-500 flex items-center justify-center gap-1">
                <FaLock className="w-3 h-3" />
                Pembayaran 100% Aman
              </p>

              <p className="text-[10px] leading-relaxed text-slate-400 font-medium">
                Metode: Transfer Bank • Virtual Account • Kartu Kredit • e-Wallet
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-5xl mx-auto font-sans px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Mungkin Kamu Suka Ini
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendationProducts.map((item) => (
              <CartItem key={item.id} item={item} />
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