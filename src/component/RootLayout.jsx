import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

const pageTitles = [
  {
    path: "/",
    title: "BeliMudah - Belanja Online Mudah dan Aman",
  },
  {
    path: "/main",
    title: "BeliMudah - Home",
  },
  {
    path: "/main/all-products",
    title: "Semua Produk - BeliMudah",
  },
  {
    path: "/main/cart",
    title: "Keranjang Belanja - BeliMudah",
  },
  {
    path: "/auth/login",
    title: "Login - BeliMudah",
  },
  {
    path: "/auth/register",
    title: "Daftar Akun - BeliMudah",
  },
  {
    path: "/auth/forgot-password",
    title: "Lupa Password - BeliMudah",
  },
  {
    path: "/profile/edit-profile",
    title: "Pengaturan Profil - BeliMudah",
  },
  {
    path: "/profile/wishlists",
    title: "Wishlist - BeliMudah",
  },
  {
    path: "/profile/address",
    title: "Alamat Saya - BeliMudah",
  },
  {
    path: "/profile/my-orders",
    title: "Pesanan Saya - BeliMudah",
  },
];

export default function RootLayout() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, search]);

  useEffect(() => {
    const matchedPage = pageTitles.find((page) => page.path === pathname);

    if (matchedPage) {
      document.title = matchedPage.title;
      return;
    }

    if (pathname.startsWith("/main/product/")) {
      document.title = "Detail Produk - BeliMudah";
      return;
    }

    if (pathname.startsWith("/main/all-products/")) {
      document.title = "Kategori Produk - BeliMudah";
      return;
    }

    if (pathname.startsWith("/checkout/")) {
      document.title = "Checkout - BeliMudah";
      return;
    }

    document.title = "Halaman Tidak Ditemukan - BeliMudah";
  }, [pathname]);

  return <Outlet />;
}