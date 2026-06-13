// import {Link} from "react-router"

export default function CartItem() {
    const urlW3 = 'http://www.w3.org/2000/svg'
    return (
        <>
            <article
                className="bg-white border border-gray-100 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all group">
                <div type="button" className="block cursor-pointer">
                    <div className="relative w-full aspect-square rounded-xl bg-cover bg-center bg-no-repeat transition-transform group-hover:scale-[1.02] duration-300 bg-[url('/item-1.png')]">
                        <span
                            className="absolute top-2 left-2 bg-[#db2777] text-white text-xs font-bold px-2 py-1 rounded-full">-31%</span>
                        <button type="button"
                            className="btn-whislist-item absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm flex items-center justify-center shadow-sm cursor-pointer z-10 transition-all duration-300">
                            <svg xmlns={urlW3} viewBox="0 0 24 24" width="18" height="18"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                className="text-red-800 transition-colors duration-300 group-[.active]:fill-red-500">
                                <path
                                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-3 space-y-1">
                        <div className="text-xs text-gray-400 font-medium tracking-wide uppercase">SoundWave</div>
                        <div
                            className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                            Headphone Wireless Premium</div>
                        <div className="flex items-center gap-1 text-xs py-0.5">
                            <span className="flex items-center gap-0.5">
                                <svg xmlns={urlW3} viewBox="0 0 24 24" fill="currentColor"
                                    className="w-3.5 h-3.5 text-amber-400">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                <svg xmlns={urlW3} viewBox="0 0 24 24" fill="currentColor"
                                    className="w-3.5 h-3.5 text-amber-400">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                <svg xmlns={urlW3} viewBox="0 0 24 24" fill="currentColor"
                                    className="w-3.5 h-3.5 text-amber-400">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                <svg xmlns={urlW3} viewBox="0 0 24 24" fill="currentColor"
                                    className="w-3.5 h-3.5 text-amber-400">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                                <svg xmlns={urlW3} viewBox="0 0 24 24" fill="currentColor"
                                    className="w-3.5 h-3.5 text-amber-400">
                                    <path
                                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            </span>
                            <span className="font-bold text-gray-800 ml-1">4.8</span>
                            <span className="text-gray-400">(512)</span>
                        </div>
                        <div className="pt-1 flex items-baseline justify-between">
                            <span className="text-sm font-bold text-blue-600">Rp 450.000</span>
                            <span className="text-xs text-gray-400 line-through">Rp 650.000</span>
                        </div>
                    </div>
                </div>
            </article>
            
        </>
    )
}

