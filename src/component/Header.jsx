import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRocket,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaChevronDown,
  FaLaptop,
  FaTshirt,
  FaHome,
  FaSpa,
  FaFutbol,
  FaBook,
  FaFire,
  FaSignOutAlt,
  FaUserEdit,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

import { useAuth } from "./custom_hooks/useAuth.js";
import { makeModal } from "./ModalContext";
import { makeProducts } from "./ProdutsContext";

export default function Header() {
  const navigate = useNavigate();
  const {isLoggedIn, currentUser, logoutUser} = useAuth()
  const { kategoriProducts } = makeProducts();
  const [searchParams] = useSearchParams();

  const [searchKeyword, setSearchKeyword] = React.useState("");
  const [isSearchTouched, setIsSearchTouched] = React.useState(false);
  const { showConfirm, showAlert } = makeModal();

  const trimmedSearchKeyword = searchKeyword.trim();

  const isSearchEmpty = trimmedSearchKeyword.length === 0;
  const isSearchTooShort =
    trimmedSearchKeyword.length > 0 && trimmedSearchKeyword.length < 3;

  const isSearchInvalid = isSearchEmpty || isSearchTooShort;

  const searchError = isSearchEmpty
    ? "Kolom pencarian harus diisi."
    : isSearchTooShort
      ? "Minimal isi 3 huruf untuk mencari."
      : "";

  const showSearchError = isSearchTouched && isSearchInvalid;

  const iconMap = {
    1: FaLaptop,
    2: FaTshirt,
    3: FaHome,
    4: FaSpa,
    5: FaFutbol,
    6: FaBook,
  };

  React.useEffect(() => {
    const q = searchParams.get("q") || "";
    setTimeout(() => {
      setSearchKeyword(q);
      setIsSearchTouched(false);
    }, );
  }, [searchParams]);

  const [isAccountOpen, setIsAccountOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const firstName = currentUser?.name ? currentUser.name.split(" ")[0] : "";

  const handleSearch = (event) => {
    event.preventDefault();

    setIsSearchTouched(true);

    if (isSearchInvalid) return;

    navigate(`/main/all-products?q=${encodeURIComponent(trimmedSearchKeyword)}`);
  };

  const handleWishlistClick = () => {
    if (!isLoggedIn) {
      navigate("/auth/login");
      return;
    }

    navigate("/profile/wishlists");
  };

  const handleProfileMenuClick = (path) => {
    setIsAccountOpen(false);
    navigate(path);
  };

  const handleLogout = async () => {
    const confirmed = await showConfirm({
      title: "Logout akun?",
      message: "Kamu akan keluar dari akun saat ini. Lanjutkan?",
      confirmText: "Ya, Logout",
      cancelText: "Batal",
    });

    if (!confirmed) return;

    const result = logoutUser();

    await showAlert({
      title: "Berhasil",
      message: result.message || "Logout berhasil.",
    });

    setIsAccountOpen(false);
    navigate("/auth/login");
  };

  return (
    <>
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto max-w-5xl px-4 flex justify-between items-center text-xs">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="w-3.5 h-3.5" />
            <span>
              Kirim ke: <span className="font-semibold">Jakarta Selatan</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-1">
              <FaPhoneAlt className="w-3.5 h-3.5" />
              0800-1234-5678 (Gratis)
            </span>

            <span className="flex items-center gap-1">
              <FaRocket className="w-3.5 h-3.5" />
              Gratis ongkir di atas Rp 100.000
            </span>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-green-50 py-4 relative">
        <div className="container mx-auto max-w-5xl px-4 flex items-center justify-between gap-4">
          <Link
            to="/main"
            className="flex items-center gap-2 no-underline shrink-0"
          >
            <div className="w-10 h-10 bg-green-600 text-white flex justify-center items-center text-xl font-bold rounded-lg">
              E
            </div>

            <div className="text-xl font-semibold text-gray-800 tracking-tight">
              EShop
            </div>
          </Link>

          <div className="flex-1 max-w-2xl mx-4 hidden sm:block">
            <form
              onSubmit={handleSearch}
              className={`flex items-center bg-gray-100 rounded-lg overflow-hidden border transition-all ${
                showSearchError
                  ? "border-red-500 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-500"
                  : "border-gray-200 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500"
              }`}
            >
              <input
                type="text"
                name="keyword"
                value={searchKeyword}
                onChange={(event) => {
                  setSearchKeyword(event.target.value);
                  setIsSearchTouched(true);
                }}
                onBlur={() => setIsSearchTouched(true)}
                className="w-full bg-transparent px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none"
                placeholder="Cari produk, merek, kategori..."
                aria-invalid={showSearchError}
                aria-describedby={showSearchError ? "search-error" : undefined}
              />

              <button
                type="submit"
                disabled={isSearchInvalid}
                className={`w-12 h-10 flex justify-center items-center transition-colors shrink-0 ${
                  isSearchInvalid
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                }`}
                aria-label="Cari produk"
              >
                <FaSearch className="w-4 h-4" />
              </button>
            </form>

            {showSearchError && (
              <p
                id="search-error"
                className="mt-1 text-xs text-red-500 font-medium"
              >
                {searchError}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4 shrink-0 text-gray-600 relative">
            <button
              type="button"
              className="cursor-pointer hover:text-green-600 transition-colors relative"
              aria-label="Notifikasi"
            >
              <FaBell className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setIsAccountOpen((prev) => !prev)}
              className="flex items-center gap-1.5 cursor-pointer hover:text-green-600 transition-colors relative"
              aria-label="Menu akun"
            >
              <FaUserCircle className="w-6 h-6" />

              {isLoggedIn && (
                <span className="hidden md:inline hover:text-green-600 text-sm font-medium text-gray-700">
                  {firstName}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={handleWishlistClick}
              className="cursor-pointer hover:text-green-600 transition-colors"
              aria-label="Wishlist"
            >
              <FaHeart className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => navigate("/main/cart")}
              className="cursor-pointer hover:text-green-600 transition-colors"
              aria-label="Keranjang"
            >
              <FaShoppingCart className="w-5 h-5" />
            </button>

            {isAccountOpen && (
              <div className="absolute right-0 top-10 w-72 bg-green-50 rounded-xl shadow-xl border border-gray-100 p-4 z-50">
                {isLoggedIn ? (
                  <>
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-3">
                      <FaUserCircle className="w-10 h-10 text-gray-400 shrink-0" />

                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm text-gray-800 truncate">
                          {currentUser?.name}
                        </h4>

                        <p className="text-xs text-gray-400 truncate">
                          {currentUser?.email}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleProfileMenuClick("/profile/edit-profile")
                        }
                        className="w-full flex items-center gap-2 bg-gray-50 hover:bg-green-300 text-gray-700 text-xs font-medium py-2.5 px-3 rounded-lg transition-colors cursor-pointer text-left"
                      >
                        <FaUserEdit className="w-3.5 h-3.5" />
                        Lihat / Edit Profil
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleProfileMenuClick("/profile/my-orders")
                        }
                        className="w-full flex items-center gap-2 bg-gray-50 hover:bg-green-300 text-gray-700 text-xs font-medium py-2.5 px-3 rounded-lg transition-colors cursor-pointer text-left"
                      >
                        <FaBoxOpen className="w-3.5 h-3.5" />
                        Pesanan Saya
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleProfileMenuClick("/profile/address")
                        }
                        className="w-full flex items-center gap-2 bg-gray-50 hover:bg-green-300 text-gray-700 text-xs font-medium py-2.5 px-3 rounded-lg transition-colors cursor-pointer text-left"
                      >
                        <FaMapMarkedAlt className="w-3.5 h-3.5" />
                        Alamat Saya
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleProfileMenuClick("/profile/wishlists")
                        }
                        className="w-full flex items-center gap-2 bg-gray-50 hover:bg-green-300 text-gray-700 text-xs font-medium py-2.5 px-3 rounded-lg transition-colors cursor-pointer text-left"
                      >
                        <FaHeart className="w-3.5 h-3.5" />
                        Wishlist
                      </button>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer mt-1"
                      >
                        <FaSignOutAlt className="w-3.5 h-3.5" />
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-3">
                      <FaUserCircle className="w-10 h-10 text-gray-400 shrink-0" />

                      <div>
                        <h4 className="font-semibold text-sm text-gray-800">
                          Belum Login
                        </h4>

                        <p className="text-xs text-gray-400">
                          Masuk untuk melihat akun kamu
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <button
                        type="button"
                        onClick={() => handleProfileMenuClick("/auth/login")}
                        className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
                      >
                        <FaSignInAlt className="w-3.5 h-3.5" />
                        Login
                      </button>

                      <button
                        type="button"
                        onClick={() => handleProfileMenuClick("/auth/register")}
                        className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2.5 rounded-lg transition-colors cursor-pointer"
                      >
                        <FaUserPlus className="w-3.5 h-3.5" />
                        Register
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="bg-green-50 border-b border-gray-100 shadow-sm py-3">
        <div className="mx-auto max-w-5xl px-4">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex lg:hidden items-center gap-1.5 font-semibold text-gray-900 cursor-pointer hover:text-green-600 transition-colors w-full justify-between"
          >
            <div className="flex items-center gap-1.5 text-sm">
              <FaBars className="w-4 h-4" />
              <span>Semua Kategori</span>
            </div>

            <FaChevronDown
              className={`w-3 h-3 opacity-70 transition-transform duration-200 ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row flex-wrap lg:justify-self-center items-start lg:items-center gap-4 lg:gap-6 text-sm text-gray-600 mt-3 lg:mt-0`}
          >
            {kategoriProducts.map((item) => {
              const Icon = iconMap[item.id] || FaLaptop;

              return (
                <Link
                  key={item.id}
                  to={`/main/all-products/${item.title.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="no-underline transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto py-1 lg:py-0 text-gray-600 hover:text-green-600"
                >
                  <Icon className="w-4 h-4" />
                  {item.title}
                </Link>
              );
            })}

            <Link
              to="/main/all-products"
              onClick={() => setIsMenuOpen(false)}
              className="no-underline text-red-500 font-semibold hover:text-red-600 transition-colors cursor-pointer flex items-center gap-1 w-full lg:w-auto py-1 lg:py-0"
            >
              <FaFire />
              Promo
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}