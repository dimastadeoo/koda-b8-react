import AsideContent from "../Aside";
import NavPage from "../NavPage";
import {
  FaMoneyBillWave,
  FaClipboardList,
  FaUsers,
  FaBox,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Pendapatan (Bulan Ini)",
    value: "Rp 125.000.000",
    change: "↗ 18.2% dari bulan lalu",
    changeColor: "text-[#16A34A]",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#1A73E8]",
    icon: <FaMoneyBillWave size={18} />,
  },
  {
    title: "Pesanan Baru",
    value: "890",
    change: "↗ 12.5% dari bulan lalu",
    changeColor: "text-[#16A34A]",
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F97316]",
    icon: <FaClipboardList size={18} />,
  },
  {
    title: "Pelanggan Aktif",
    value: "3.284",
    change: "↗ 8.1% dari bulan lalu",
    changeColor: "text-[#16A34A]",
    iconBg: "bg-[#F0FDF4]",
    iconColor: "text-[#16A34A]",
    icon: <FaUsers size={18} />,
  },
  {
    title: "Produk Aktif",
    value: "247",
    change: "↘ 2.3% dari bulan lalu",
    changeColor: "text-[#DC2626]",
    iconBg: "bg-[#FAF5FF]",
    iconColor: "text-[#8B5CF6]",
    icon: <FaBox size={18} />,
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
      <AsideContent />
      <NavPage />

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