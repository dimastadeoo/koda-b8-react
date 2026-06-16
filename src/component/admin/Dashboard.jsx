import AsideContent from "../Aside";
import NavPage from "../NavPage";
const urlW3 = 'http://www.w3.org/2000/svg'

const stats = [
  {
    title: "Total Pendapatan (Bulan Ini)",
    value: "Rp 125.000.000",
    change: "↗ 18.2% dari bulan lalu",
    changeColor: "text-[#16A34A]",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#1A73E8]",
    icon: (
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
        <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
        <path d="M18 12h.01" />
        <path d="M19 22v-6" />
        <path d="m22 19-3-3-3 3" />
        <path d="M6 12h.01" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Pesanan Baru",
    value: "890",
    change: "↗ 12.5% dari bulan lalu",
    changeColor: "text-[#16A34A]",
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F97316]",
    icon: (
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
        <path d="M11 5h10" />
        <path d="M11 12h10" />
        <path d="M11 19h10" />
        <path d="M4 4h1v5" />
        <path d="M4 9h2" />
        <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" />
      </svg>
    ),
  },
  {
    title: "Pelanggan Aktif",
    value: "3.284",
    change: "↗ 8.1% dari bulan lalu",
    changeColor: "text-[#16A34A]",
    iconBg: "bg-[#F0FDF4]",
    iconColor: "text-[#16A34A]",
    icon: (
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
    ),
  },
  {
    title: "Produk Aktif",
    value: "247",
    change: "↘ 2.3% dari bulan lalu",
    changeColor: "text-[#DC2626]",
    iconBg: "bg-[#FAF5FF]",
    iconColor: "text-[#8B5CF6]",
    icon: (
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
    ),
  },
];

const categories = [
  {
    name: "Elektronik",
    percent: "45%",
    dot: "bg-[#1A73E8]",
  },
  {
    name: "Fashion",
    percent: "28%",
    dot: "bg-[#F97316]",
  },
  {
    name: "Rumah & Dapur",
    percent: "15%",
    dot: "bg-[#16A34A]",
  },
  {
    name: "Kecantikan",
    percent: "8%",
    dot: "bg-[#8B5CF6]",
  },
  {
    name: "Lainnya",
    percent: "4%",
    dot: "bg-[#6B7280]",
  },
];

const orders = [
  {
    code: "#BM98765432",
    status: "Terkirim",
    badge: "bg-[#F0FDF4] text-[#16A34A]",
    customer: "Budi Santoso",
    date: "28 Mei 2026",
    price: "Rp 900.000",
    item: "2 item",
  },
  {
    code: "#BM87654321",
    status: "Dikirim",
    badge: "bg-[#FAF5FF] text-[#8B5CF6]",
    customer: "Siti Rahayu",
    date: "28 Mei 2026",
    price: "Rp 450.000",
    item: "1 item",
  },
  {
    code: "#BM76543210",
    status: "Dikemas",
    badge: "bg-[#EFF6FF] text-[#1A73E8]",
    customer: "Ahmad Maulana",
    date: "27 Mei 2026",
    price: "Rp 1.250.000",
    item: "3 item",
  },
  {
    code: "#BM65432109",
    status: "Pending",
    badge: "bg-[#FFF7ED] text-[#F97316]",
    customer: "Rina Kusuma",
    date: "27 Mei 2026",
    price: "Rp 8.500.000",
    item: "1 item",
  },
  {
    code: "#BM54321098",
    status: "Terkirim",
    badge: "bg-[#F0FDF4] text-[#16A34A]",
    customer: "Denny Pratama",
    date: "26 Mei 2026",
    price: "Rp 725.000",
    item: "2 item",
  },
];

const products = [
  {
    name: "Headphone Wireless Premium",
    info: "156 terjual · Stok: 45",
    price: "Rp 70.200.000",
  },
  {
    name: "Laptop Ultrabook Pro 15”",
    info: "87 terjual · Stok: 15",
    price: "Rp 739.500.000",
  },
  {
    name: "Kaos Polos Premium Cotton",
    info: "312 terjual · Stok: 200",
    price: "Rp 39.000.000",
  },
  {
    name: "Sneakers Sport Runfast",
    info: "203 terjual · Stok: 60",
    price: "Rp 111.650.000",
  },
  {
    name: "Smartphone 5G Ultra",
    info: "124 terjual · Stok: 30",
    price: "Rp 520.800.000",
  },
];

export default function Dashboard() {
  return (
    <>
      {/* Content Aside di sebelah kiri */}
      <AsideContent />

    {/* Header */}
      <NavPage />
      
      {/* Content di sebelah kanan */}
      <main className="min-h-screen bg-[#F8F9FA] pl-18 pt-16 md:pl-60">
        <section className="grid gap-6 p-6">
          <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
            <div className="grid gap-1">
              <h1 className="text-2xl font-medium text-[#111827]">
                Dashboard
              </h1>
              <p className="text-sm font-normal text-[#99A1AF]">
                Selamat datang kembali! Ini ringkasan bisnis hari ini.
              </p>
            </div>

            <div className="flex items-center">
              <time
                className="text-sm font-normal text-[#99A1AF]"
                dateTime="2026-05-28"
              >
                28 Mei 2026
              </time>
            </div>
          </div>

          <section
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
            aria-label="Ringkasan statistik"
          >
            {stats.map((stat) => (
              <article
                key={stat.title}
                className="grid gap-3 rounded-2xl border border-black/10 bg-white p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-normal text-[#99A1AF]">
                    {stat.title}
                  </span>

                  <div
                    className={`grid h-9 w-9 place-items-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}
                  >
                    {stat.icon}
                  </div>
                </div>

                <div className="grid gap-1">
                  <h2 className="text-2xl font-bold text-[#111827]">
                    {stat.value}
                  </h2>
                  <p className={`text-xs font-normal ${stat.changeColor}`}>
                    {stat.change}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-[2.15fr_1fr]">
            <article className="grid gap-6 auto-rows-max content-start rounded-2xl border border-black/10 bg-white p-6 pb-20">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium text-[#111827]">
                  Pendapatan &amp; Pesanan (2026)
                </h3>

                <div className="rounded-lg border border-black/10 px-6 py-1 text-xs font-normal text-[#99A1AF]">
                  12 Bulan Terakhir
                </div>
              </div>
            </article>

            <article className="grid gap-2 rounded-2xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-medium text-[#111827]">
                Penjualan per Kategori
              </h3>

              <div className="flex items-center justify-center py-4">
                <div
                  className="h-37.5 w-37.5 rounded-full bg-[conic-gradient(#1A73E8_0_45%,#F97316_45%_73%,#16A34A_73%_88%,#8B5CF6_88%_96%,#6B7280_96%_100%)]"
                  role="img"
                  aria-label="Diagram donat kategori penjualan"
                />
              </div>

              <div className="grid gap-2 text-xs font-normal text-[#99A1AF]">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center gap-1"
                  >
                    <div className={`h-2.5 w-2.5 rounded-full ${category.dot}`} />
                    <span>{category.name}</span>
                    <b className="ml-auto font-bold text-[#111827]">
                      {category.percent}
                    </b>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <article className="grid gap-4 rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium text-[#111827]">
                  Pesanan Terbaru
                </h3>
                <a
                  className="text-xs font-normal text-[#1A73E8] hover:underline"
                  href="#"
                >
                  Lihat Semua ↗
                </a>
              </div>

              <div className="grid gap-3">
                {orders.map((order) => (
                  <div
                    key={order.code}
                    className="flex items-center justify-between gap-3 border-b border-black/10 py-2 last:border-b-0"
                  >
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-xs font-semibold text-[#111827]">
                          {order.code}
                        </strong>
                        <div
                          className={`flex items-center justify-center rounded-xl px-2 py-0.5 text-xs font-normal ${order.badge}`}
                        >
                          {order.status}
                        </div>
                      </div>

                      <p className="text-xs font-normal text-[#99A1AF]">
                        {order.customer} · {order.date}
                      </p>
                    </div>

                    <div className="grid text-right">
                      <p className="text-xs font-normal text-[#1A73E8]">
                        {order.price}
                      </p>
                      <p className="text-xs font-normal text-[#99A1AF]">
                        {order.item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="grid gap-4 rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium text-[#111827]">
                  Produk Terlaris
                </h3>
                <a
                  className="text-xs font-normal text-[#1A73E8] hover:underline"
                  href="#"
                >
                  Kelola ↗
                </a>
              </div>

              <div className="grid gap-3">
                {products.map((product, index) => (
                  <div
                    key={product.name}
                    className="flex items-center justify-between gap-3 border-b border-black/10 py-2 last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-normal text-[#99A1AF]">
                        {index + 1}
                      </span>

                      <div className="grid gap-1">
                        <strong className="text-xs font-semibold text-[#111827]">
                          {product.name}
                        </strong>
                        <p className="text-xs font-normal text-[#99A1AF]">
                          {product.info}
                        </p>
                      </div>
                    </div>

                    <div className="grid text-right">
                      <p className="text-xs font-normal text-[#1A73E8]">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}