import { Link, NavLink } from "react-router-dom";
const urlW3 = 'http://www.w3.org/2000/svg'



const menuBase = "flex h-9 w-full items-center justify-center gap-3 rounded-xl px-0 py-[10px] text-sm font-normal transition-colors md:justify-start md:px-3";

const menuClass = ({ isActive }) =>
    `${menuBase} ${isActive
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
                    <svg
                        xmlns={urlW3}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="7" height="9" x="3" y="3" rx="1" />
                        <rect width="7" height="5" x="14" y="3" rx="1" />
                        <rect width="7" height="9" x="14" y="12" rx="1" />
                        <rect width="7" height="5" x="3" y="16" rx="1" />
                    </svg>
                    <p className="hidden md:block">Dashboard</p>
                </NavLink>

                <NavLink to="/admin/list-products" className={menuClass}>
                    <svg
                        xmlns={urlW3}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 22V12" />
                        <path d="M20.27 18.27 22 20" />
                        <path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" />
                        <path d="M3.29 7 12 12l8.71-5" />
                        <path d="m7.5 4.27 8.997 5.148" />
                        <circle cx="18.5" cy="16.5" r="2.5" />
                    </svg>
                    <p className="hidden md:block">Produk</p>
                </NavLink>

                <NavLink to="/admin/list-orders" className={menuClass}>
                    <svg
                        xmlns={urlW3}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    <p className="hidden md:block">Pesanan</p>
                </NavLink>

                <NavLink to="/admin/list-customers" className={menuClass}>
                    <svg
                        xmlns={urlW3}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <circle cx="9" cy="7" r="4" />
                    </svg>
                    <p className="hidden md:block">Pelanggan</p>
                </NavLink>

                <NavLink to="/admin/settings" className={menuClass}>
                    <svg
                        xmlns={urlW3}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    <p className="hidden md:block">Pengaturan</p>
                </NavLink>
            </nav>

            {/* Bottom */}
            <div className="mt-auto grid h-14.25 place-items-center border-t border-[#364153] p-3">
                <Link
                    to="/"
                    className="flex h-9 w-full items-center justify-center gap-3 rounded-xl px-0 py-2.5 text-sm font-normal text-[#99A1AF] transition-colors hover:bg-white/5 hover:text-white active:bg-[#1A73E8] active:text-white md:justify-start md:px-3"
                >
                    <svg
                        xmlns={urlW3}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="m12 8-4 4 4 4" />
                        <path d="M16 12H8" />
                    </svg>
                    <p className="hidden md:block">Kembali ke Toko</p>
                </Link>
            </div>
        </aside>
    );
}