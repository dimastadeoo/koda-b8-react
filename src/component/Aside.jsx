import { Link, NavLink } from "react-router-dom";
import { FaTh, FaBox, FaShoppingCart, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";

const menuBase =
  "flex h-9 w-full items-center justify-center gap-3 rounded-xl px-0 py-[10px] text-sm font-normal transition-colors md:justify-start md:px-3";

const menuClass = ({ isActive }) =>
  `${menuBase} ${
    isActive
      ? "bg-[#1A73E8] text-white"
      : "text-[#99A1AF] hover:bg-white/5 hover:text-white"
  }`;

export default function AsideContent() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex min-h-screen w-18 flex-col bg-[#111827] px-2 md:w-60 md:px-0">
      {/* Brand */}
      <div className="flex h-16 items-center border-b border-[#364153] px-0 md:px-4">
        <Link
          to="/"
          className="flex w-full items-center justify-center gap-3 text-base font-normal text-white md:justify-start"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1A73E8] text-sm">
            B
          </span>
          <p className="hidden md:block">BeIiMudah Admin</p>
        </Link>
      </div>

      {/* Menu */}
      <nav className="grid gap-1 px-0 py-4 md:px-2" aria-label="Menu utama">
        <NavLink to="/admin/dashboard" end className={menuClass}>
          <FaTh size={18} />
          <p className="hidden md:block">Dashboard</p>
        </NavLink>

        <NavLink to="/admin/list-products" className={menuClass}>
          <FaBox size={18} />
          <p className="hidden md:block">Produk</p>
        </NavLink>

        <NavLink to="/admin/list-orders" className={menuClass}>
          <FaShoppingCart size={18} />
          <p className="hidden md:block">Pesanan</p>
        </NavLink>

        <NavLink to="/admin/list-customers" className={menuClass}>
          <FaUsers size={18} />
          <p className="hidden md:block">Pelanggan</p>
        </NavLink>

        <NavLink to="/admin/settings" className={menuClass}>
          <FaCog size={18} />
          <p className="hidden md:block">Pengaturan</p>
        </NavLink>
      </nav>

      {/* Bottom */}
      <div className="mt-auto grid h-14.25 place-items-center border-t border-[#364153] p-3">
        <Link
          to="/"
          className="flex h-9 w-full items-center justify-center gap-3 rounded-xl px-0 py-2.5 text-sm font-normal text-[#99A1AF] transition-colors hover:bg-white/5 hover:text-white active:bg-[#1A73E8] active:text-white md:justify-start md:px-3"
        >
          <FaSignOutAlt size={18} />
          <p className="hidden md:block">Kembali ke Toko</p>
        </Link>
      </div>
    </aside>
  );
}