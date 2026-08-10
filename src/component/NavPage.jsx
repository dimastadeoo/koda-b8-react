import { FaTimes, FaBell } from "react-icons/fa";

export default function NavPage() {
  return (
    <>
      <header className="fixed right-0 top-0 z-99 flex h-16 w-[calc(100%-72px)] items-center gap-3 border-b border-black/10 bg-white px-4 md:w-[calc(100%-240px)] md:px-6">
        <button
          type="button"
          className="flex items-center border-0 bg-transparent cursor-pointer"
          aria-label="Tutup"
        >
          <FaTimes size={18} className="text-black" />
        </button>
        <div className="flex items-center text-sm font-normal text-[#99A1AF]">
          Admin
        </div>
        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            className="relative flex h-8.5 w-8.5 cursor-pointer items-center justify-center border-0 bg-transparent text-[#aab4c5]"
            aria-label="Notifikasi"
          >
            <FaBell size={18} />
            <span className="absolute right-1.25 top-1 h-2 w-2 rounded-full bg-[#ef4444]" />
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border-0 bg-[#e9f2ff] text-sm font-normal text-[#1A73E8]"
              aria-label="akun"
            >
              A
            </button>
            <span className="text-sm font-normal text-[#111827]">Admin</span>
          </div>
        </div>
      </header>
    </>
  );
}