import AsideContent from "../Aside";
import NavPage from "../NavPage"

const urlW3 = "http://www.w3.org/2000/svg";

const customerStats = [
  {
    value: "3.284",
    label: "Total Pelanggan",
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
    value: "89",
    label: "Pelanggan Baru",
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" x2="19" y1="8" y2="14" />
        <line x1="22" x2="16" y1="11" y2="11" />
      </svg>
    ),
  },
  {
    value: "4.7",
    label: "Rata - Rata Pesanan",
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
  {
    value: "4.2 / 5",
    label: "Kepuasan Pelanggan",
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F97316]",
    icon: (
      <svg
        xmlns={urlW3}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
      >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    ),
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
      className={`flex w-fit items-center justify-center rounded-xl px-2 py-0.5 text-xs font-normal ${tierClass[tier] || "bg-[#EFF6FF] text-[#1A73E8]"
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
        <svg
          xmlns={urlW3}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>

      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
        aria-label="Edit pelanggan"
      >
        <svg
          xmlns={urlW3}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
        </svg>
      </button>

      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#DC2626]"
        aria-label="Hapus pelanggan"
      >
        <svg
          xmlns={urlW3}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
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
        <p className="text-xs font-normal text-[#99A1AF]">
          {customer.city}
        </p>
      </td>

      <td className="px-4 py-3">
        <p className="text-xs font-normal text-[#99A1AF]">
          {customer.joined}
        </p>
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
      {/* Content Aside di sebelah kiri */}
      <AsideContent />

      {/* Header */}
      <NavPage />

      {/* Content di sebelah kanan */}
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

            <div className="w-full overflow-hidden">
              
            </div>
          </section>

          <section className="grid items-center gap-3 rounded-2xl border border-black/10 bg-white p-4">
            <div className="flex items-center gap-2 rounded-xl bg-[#ccced2] px-4 py-2.5">
              <svg
                xmlns={urlW3}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m21 21-4.34-4.34" />
                <circle cx="11" cy="11" r="8" />
              </svg>

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
  )
}