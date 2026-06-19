import { Link, Outlet, useLocation } from "react-router";
import {
  FaCheckCircle,
  FaLock,
  FaShieldAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function AuthLayout() {
  const location = useLocation();

  const authContent = {
    "/auth/login": {
      image: "/src/img/bg-auth.jpg",
      title: "Belanja lebih mudah, hidup lebih praktis",
      description:
        "Ribuan produk pilihan dengan harga terbaik, pengiriman cepat, dan pembayaran yang aman.",
      type: "login",
    },
    "/auth/register": {
      image: "/src/img/bg-auth-regis.jpg",
      title: "Bergabung dengan 500.000+ pelanggan puas",
      description:
        "Buat akun gratis dan nikmati pengalaman belanja yang lebih cepat, aman, dan praktis.",
      type: "register",
    },
    "/auth/forgot-password": {
      image: "/src/img/bg-auth-forgorpass.jpg",
      title: "Akun kamu aman bersama kami",
      description:
        "Kami menggunakan keamanan berlapis untuk menjaga data akun dan transaksi kamu tetap aman.",
      type: "forgot",
    },
  };

  const currentAuth = authContent[location.pathname] || authContent["/auth/login"];

  return (
    <main className="bg-[#f8f9fa] font-sans min-h-screen w-full flex items-center justify-center p-3 md:p-4">
      <div className="w-full max-w-5xl h-[calc(100vh-1.5rem)] md:h-[calc(100vh-2rem)] md:max-h-190 bg-white md:rounded-2xl md:shadow-lg overflow-hidden flex flex-col md:flex-row">

        <section className="relative flex-1 bg-linear-to-br from-[#1447E6] to-[#312C85] p-6 lg:p-8 text-white hidden md:flex flex-col justify-between overflow-hidden">

          <img
            src={currentAuth.image}
            alt="Background auth"
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-10"
          />

          <div className="z-20 flex flex-col h-full justify-between min-h-130">
            <Link to="/main" className="no-underline inline-block self-start">
              <div className="font-semibold text-base flex items-center gap-2 text-white">
                <span className="bg-white/15 backdrop-blur-md px-3 py-1.5 flex justify-center items-center font-normal rounded-xl text-base">
                  B
                </span>
                <span>BeliMudah</span>
              </div>
            </Link>

            <div className="my-auto flex flex-col gap-5 max-w-100">
              <div className="grid gap-3">
                {currentAuth.type === "forgot" && (
                  <div className="w-10 h-10 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center text-xl">
                    <FaLock />
                  </div>
                )}

                <h1 className="font-bold text-2xl lg:text-3xl leading-tight">
                  {currentAuth.title}
                </h1>

                <p className="text-sm text-white/70 font-normal leading-relaxed">
                  {currentAuth.description}
                </p>
              </div>

              {currentAuth.type === "login" && (
                <div className="flex gap-6 border-t border-white/10 pt-4">
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold">10rb+</h3>
                    <p className="text-xs text-white/60">Produk</p>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold">500rb+</h3>
                    <p className="text-xs text-white/60">Pelanggan</p>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold">4.8 ★</h3>
                    <p className="text-xs text-white/60">Rating</p>
                  </div>
                </div>
              )}

              {currentAuth.type === "register" && (
                <ul className="list-none grid gap-3 border-t border-white/10 pt-4">
                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-white shrink-0" />
                    <span className="text-sm text-white/80 font-normal">
                      Akses ribuan produk dengan harga terbaik
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-white shrink-0" />
                    <span className="text-sm text-white/80 font-normal">
                      Lacak pesanan secara real-time
                    </span>
                  </li>

                  <li className="flex items-center gap-3">
                    <FaCheckCircle className="text-white shrink-0" />
                    <span className="text-sm text-white/80 font-normal">
                      Simpan wishlist & alamat favorit
                    </span>
                  </li>
                </ul>
              )}

              {currentAuth.type === "forgot" && (
                <div className="flex flex-col gap-2.5 border-t border-white/10 pt-4">
                  <span className="text-xs text-white/80 font-normal flex items-center gap-2">
                    <FaLock /> Enkripsi SSL 256-bit
                  </span>

                  <span className="text-xs text-white/80 font-normal flex items-center gap-2">
                    <FaShieldAlt /> Perlindungan data pribadi
                  </span>

                  <span className="text-xs text-white/80 font-normal flex items-center gap-2">
                    <FaEnvelope /> Verifikasi dua langkah
                  </span>
                </div>
              )}
            </div>

            <p className="font-normal text-xs text-white/40">
              © 2026 BeliMudah. Seluruh hak cipta dilindungi.
            </p>
          </div>
        </section>

        <section className="flex-1 bg-[#FAFAFA] p-4 lg:p-5 flex flex-col justify-center h-full overflow-hidden">
          <div className="w-full max-w-95 mx-auto grid gap-3 lg:gap-3.5">
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
}