const urlW3 = 'http://www.w3.org/2000/svg'
export default function NavPage() {
  return (
    <>
      <header className="fixed right-0 top-0 z-99 flex h-16 w-[calc(100%-72px)] items-center gap-3 border-b border-black/10 bg-white px-4 md:w-[calc(100%-240px)] md:px-6">
        <button
          type="button"
          className="flex items-center border-0 bg-transparent cursor-pointer"
          aria-label="Tutup"
        >
          <svg
            xmlns={urlW3}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
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
              <path d="M10.268 21a2 2 0 0 0 3.464 0" />
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
            </svg>
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