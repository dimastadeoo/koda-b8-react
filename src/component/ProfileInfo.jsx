export default function ProfileInfo() {
    const urlW3 = 'http://www.w3.org/2000/svg'

    return (
        <>
            <div className="grid gap-3 rounded-2xl border border-[#0000001A] bg-white p-5">
                <div className="flex h-16 w-16 place-self-center items-center justify-center rounded-full bg-[#1A73E81A] text-xl font-bold text-[#1A73E8]">
                    B
                </div>

                <div className="grid text-center">
                    <h2 className="place-self-center text-base font-bold text-[#111827]">
                        Budi Santoso
                    </h2>
                    <p className="place-self-center text-xs font-normal text-[#6B7280]">
                        budi@email.com
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4 border-t border-[#0000001A] pt-1">
                    <div className="grid">
                        <h2 className="place-self-center text-base font-semibold text-[#111827]">
                            2
                        </h2>
                        <p className="place-self-center text-xs font-normal text-[#6B7280]">
                            Pesanan
                        </p>
                    </div>

                    <div className="grid">
                        <h2 className="place-self-center text-base font-semibold text-[#111827]">
                            0
                        </h2>
                        <p className="place-self-center text-xs font-normal text-[#6B7280]">
                            Wishlist
                        </p>
                    </div>
                </div>
            </div>

            {/* NAVIGATION */}
            <div className="grid rounded-2xl border border-[#0000001A] bg-white overflow-hidden">
                <div className="flex cursor-pointer items-center gap-3 px-4 py-3.5 text-sm font-medium text-[#6B7280]">
                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 10a4 4 0 0 1-8 0" />
                        <path d="M3.103 6.034h17.794" />
                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                    </svg>
                    Pesanan Saya
                    <svg className="ml-auto" xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </div>

                <div className="flex cursor-pointer items-center gap-3 px-4 py-3.5 text-sm font-medium text-[#6B7280]">
                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                    </svg>
                    Wishlist
                    <svg className="ml-auto" xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </div>

                <div className="flex cursor-pointer items-center gap-3 px-4 py-3.5 text-sm font-medium text-[#6B7280]">
                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    Alamat Saya
                    <svg className="ml-auto" xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </div>

                <div className="flex cursor-pointer items-center gap-3 px-4 py-3.5 text-sm font-medium text-[#6B7280]">
                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                    Metode Pembayaran
                    <svg className="ml-auto" xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </div>

                <div className="flex cursor-pointer items-center gap-3 bg-[#EFF6FF] px-4 py-3.5 text-sm font-medium text-[#1A73E8]">
                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    Pengaturan Profil
                    <svg className="ml-auto" xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </div>

                <div className="flex cursor-pointer items-center gap-3 px-4 py-3.5 text-sm font-medium text-[#DC2626]">
                    <svg xmlns={urlW3} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m16 17 5-5-5-5" />
                        <path d="M21 12H9" />
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    </svg>
                    Keluar
                </div>
            </div>
        </>
    )
}