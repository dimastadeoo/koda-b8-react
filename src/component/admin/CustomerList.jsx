import AsideContent from "../Aside";
import NavPage from "../NavPage";
import {
  FaUsers,
  FaUserPlus,
  FaBox,
  FaStar,
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

const customerStats = [
  {
    value: "3.284",
    label: "Total Pelanggan",
    iconBg: "bg-[#F0FDF4]",
    iconColor: "text-[#16A34A]",
    icon: <FaUsers size={18} />,
  },
  {
    value: "89",
    label: "Pelanggan Baru",
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#1A73E8]",
    icon: <FaUserPlus size={18} />,
  },
  {
    value: "4.7",
    label: "Rata - Rata Pesanan",
    iconBg: "bg-[#FAF5FF]",
    iconColor: "text-[#8B5CF6]",
    icon: <FaBox size={18} />,
  },
  {
    value: "4.2 / 5",
    label: "Kepuasan Pelanggan",
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F97316]",
    icon: <FaStar size={18} />,
  },
];

const customers = [
  {
    id: 1,
    initials: "DT",
    name: "Dimas Tadeo",
    email: "dimas@contoh.com",
    city: "Klaten",
    joined: "Mei 2026",
    totalOrders: 12,
    totalSpent: "Rp. 900.000",
    tier: "Gold",
  },
];

function TierBadge({ tier }) {
  const tierClass = {
    Gold: "bg-[#FFF7ED] text-[#F97316]",
    Silver: "bg-[#EFF6FF] text-[#1A73E8]",
    Bronze: "bg-[#F0FDF4] text-[#16A34A]",
  };

  return (
    <div
      className={`flex w-fit items-center justify-center rounded-xl px-2 py-0.5 text-xs font-normal ${
        tierClass[tier] || "bg-[#EFF6FF] text-[#1A73E8]"
      }`}
    >
      {tier}
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
        aria-label="Lihat pelanggan"
      >
        <FaEye size={16} />
      </button>

      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
        aria-label="Edit pelanggan"
      >
        <FaEdit size={16} />
      </button>

      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#DC2626]"
        aria-label="Hapus pelanggan"
      >
        <FaTrash size={16} />
      </button>
    </div>
  );
}

function CustomerRow({ customer }) {
  return (
    <tr className="border-b border-black/10 last:border-b-0">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border-0 bg-[#e9f2ff] text-sm font-normal text-[#1A73E8]"
            aria-label={`Avatar ${customer.name}`}
          >
            {customer.initials}
          </button>

          <div className="grid">
            <h2 className="text-sm font-normal text-[#111827]">
              {customer.name}
            </h2>
            <p className="text-xs font-normal text-[#99A1AF]">
              {customer.email}
            </p>
          </div>
        </div>
      </td>

      <td className="px-4 py-3">
        <p className="text-xs font-normal text-[#99A1AF]">{customer.city}</p>
      </td>

      <td className="px-4 py-3">
        <p className="text-xs font-normal text-[#99A1AF]">{customer.joined}</p>
      </td>

      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#111827]">
          {customer.totalOrders}
        </h3>
      </td>

      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#1A73E8]">
          {customer.totalSpent}
        </h3>
      </td>

      <td className="px-4 py-3">
        <TierBadge tier={customer.tier} />
      </td>

      <td className="px-4 py-3">
        <ActionButtons />
      </td>
    </tr>
  );
}

export default function CustomerList() {
  return (
    <>
      <AsideContent />
      <NavPage />

      <main className="min-h-screen bg-[#F8F9FA] pt-16 pl-18 md:pl-60">
        <section className="grid gap-6 p-6">
          <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
            <div className="grid">
              <h1 className="text-2xl font-medium text-[#111827]">
                Manajemen Pelanggan
              </h1>
            </div>
          </div>

          <section
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
            aria-label="Ringkasan statistik"
          >
            {customerStats.map((stat) => (
              <article
                key={stat.label}
                className="grid gap-3 rounded-2xl border border-black/10 bg-white p-5"
              >
                <div
                  className={`grid h-9 w-9 place-items-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}
                >
                  {stat.icon}
                </div>

                <div className="grid gap-1">
                  <h2 className="text-2xl font-bold text-[#111827]">
                    {stat.value}
                  </h2>
                  <p className="text-xs font-normal text-[#99A1AF]">
                    {stat.label}
                  </p>
                </div>
              </article>
            ))}
          </section>

          <section
            className="grid gap-4 rounded-2xl border border-black/10 bg-white p-6"
            aria-label="Grafik Pertumbuhan Pelanggan"
          >
            <div className="flex items-center">
              <h1 className="text-lg font-medium text-[#111827]">
                Pertumbuhan Pelanggan Baru (2026)
              </h1>
            </div>
            <div className="w-full overflow-hidden">{/* Grafik di sini */}</div>
          </section>

          <section className="grid items-center gap-3 rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 rounded-xl bg-[#ccced2] px-4 py-2.5">
              <FaSearch size={16} className="text-[#6B7280]" />
              <input
                type="text"
                name="search"
                className="flex-1 border-0 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#6B7280]"
                placeholder="Cari nama pelanggan atau email..."
              />
            </div>
          </section>

          <section className="grid overflow-hidden rounded-2xl border border-black/10 bg-white">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-245 border-collapse">
                <thead>
                  <tr className="bg-[#ccced2] text-left text-sm font-normal text-[#99A1AF]">
                    <th className="px-4 py-3 font-normal">Pelanggan</th>
                    <th className="px-4 py-3 font-normal">Kota</th>
                    <th className="px-4 py-3 font-normal">Bergabung</th>
                    <th className="px-4 py-3 font-normal">Total Pesanan</th>
                    <th className="px-4 py-3 font-normal">Total Belanja</th>
                    <th className="px-4 py-3 font-normal">Tier</th>
                    <th className="px-4 py-3 font-normal">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <CustomerRow key={customer.id} customer={customer} />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}