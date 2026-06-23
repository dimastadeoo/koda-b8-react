import { Navigate, NavLink, Outlet, useNavigate } from "react-router";
import {
  FaBoxOpen,
  FaHeart,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";

import Header from "../Header";
import Footer from "../Footer";
import { makeAuth } from "../AuthContext"
import { makeProfile } from "../ProfileContext";
import { makeModal } from "../ModalContext";

export default function ProfileLayout() {
  const navigate = useNavigate();

  const { isLoggedIn, currentUser, logoutUser } = makeAuth();
  const { profile, orders = [], wishlistItems = [] } = makeProfile();
  const { showConfirm, showAlert } = makeModal();

  const profileMenus = [
    {
      label: "Pesanan Saya",
      to: "/profile/my-orders",
      icon: FaBoxOpen,
    },
    {
      label: "Wishlist",
      to: "/profile/wishlists",
      icon: FaHeart,
    },
    {
      label: "Alamat Saya",
      to: "/profile/address",
      icon: FaMapMarkerAlt,
    },
    {
      label: "Metode Pembayaran",
      to: "/profile/payment-methods",
      icon: FaCreditCard,
    },
    {
      label: "Pengaturan Profil",
      to: "/profile/edit-profile",
      icon: FaCog,
    },
  ];

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  const userName = profile?.name || currentUser?.name || "Pengguna";
  const userEmail = profile?.email || currentUser?.email || "user@email.com";
  const initialName = userName.charAt(0).toUpperCase();

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3.5 text-sm font-medium transition-colors ${isActive
      ? "bg-[#EFF6FF] text-[#1A73E8]"
      : "text-[#6B7280] hover:bg-gray-50 hover:text-[#1A73E8]"
    }`;

  const handleLogout = async () => {
    const confirmed = await showConfirm({
      title: "Keluar akun?",
      message: "Kamu akan keluar dari akun saat ini. Lanjutkan?",
      confirmText: "Ya, Keluar",
      cancelText: "Batal",
    });

    if (!confirmed) return;

    const result = logoutUser();

    await showAlert({
      title: "Berhasil",
      message: result.message || "Logout berhasil.",
    });

    navigate("/auth/login");
  };

  return (
    <>
      <header className="sticky top-0 z-50" id="header">
        <Header />
      </header>

      <main className="mx-auto mb-16 w-full max-w-5xl px-4">
        <section className="flex w-full flex-col gap-6 py-6 md:flex-row md:gap-8 md:py-8">
          <aside className="w-full md:w-64 md:shrink-0">
            <div className="grid gap-3 rounded-2xl border border-[#0000001A] bg-white p-5">
              <div className="flex h-16 w-16 place-self-center items-center justify-center rounded-full bg-[#1A73E81A] text-xl font-bold text-[#1A73E8]">
                {initialName}
              </div>

              <div className="grid text-center">
                <h2 className="place-self-center text-base font-bold text-[#111827]">
                  {userName}
                </h2>
                <p className="place-self-center text-xs font-normal text-[#6B7280]">
                  {userEmail}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 border-t border-[#0000001A] pt-1">
                <div className="grid">
                  <h2 className="place-self-center text-base font-semibold text-[#111827]">
                    {orders.length}
                  </h2>
                  <p className="place-self-center text-xs font-normal text-[#6B7280]">
                    Pesanan
                  </p>
                </div>
                <div className="grid">
                  <h2 className="place-self-center text-base font-semibold text-[#111827]">
                    {wishlistItems.length}
                  </h2>
                  <p className="place-self-center text-xs font-normal text-[#6B7280]">
                    Wishlist
                  </p>
                </div>
              </div>
            </div>

            {/* Menu list - di mobile akan full width, tetap di dalam sidebar */}
            <div className="mt-4 grid overflow-hidden rounded-2xl border border-[#0000001A] bg-white">
              {profileMenus.map((menu) => {
                const Icon = menu.icon;
                return (
                  <NavLink key={menu.to} to={menu.to} className={menuClass}>
                    <Icon className="h-4 w-4" />
                    {menu.label}
                    <FaChevronRight className="ml-auto h-4 w-4" />
                  </NavLink>
                );
              })}

              <button
                type="button"
                onClick={handleLogout}
                className="flex cursor-pointer items-center gap-3 px-4 py-3.5 text-left text-sm font-medium text-[#DC2626] transition-colors hover:bg-red-50"
              >
                <FaSignOutAlt className="h-4 w-4" />
                Keluar
              </button>
            </div>
          </aside>

          <section className="flex-1">
            <Outlet />
          </section>
        </section>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}