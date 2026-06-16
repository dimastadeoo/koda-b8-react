import AsideContent from "../Aside"
import NavPage from "../NavPage"
import React from "react";

const urlW3 = "http://www.w3.org/2000/svg";

const statusTabs = [
  "Semua (8)",
  "Pending (1)",
  "Dikemas (1)",
  "Dikirim (2)",
  "Terkirim (3)",
];

const orders = [
  {
    id: 1,
    orderNumber: "#BM98765432",
    customerName: "Dimas Tadeo",
    customerEmail: "dimas@contoh.com",
    date: "28 Mei 2026",
    items: 2,
    total: "Rp. 900.000",
    payment: "Gopay",
    status: "Terkirim",
  },
];

function OrderStatusBadge({ status }) {
  const badgeClass = {
    Terkirim: "bg-[#F0FDF4] text-[#16A34A]",
    Dikirim: "bg-[#FAF5FF] text-[#8B5CF6]",
    Dikemas: "bg-[#EFF6FF] text-[#1A73E8]",
    Pending: "bg-[#FFF7ED] text-[#F97316]",
  };

  return (
    <div
      className={`flex w-fit items-center justify-center rounded-xl px-2 py-0.5 text-xs font-normal ${badgeClass[status] || "bg-[#EFF6FF] text-[#1A73E8]"
        }`}
    >
      {status}
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
        aria-label="Lihat pesanan"
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
        aria-label="Edit pesanan"
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
        aria-label="Hapus pesanan"
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

function OrderRow({ order }) {
  return (
    <tr className="border-b border-black/10 last:border-b-0">
      <td className="px-4 py-3">
        <h3 className="text-sm font-semibold text-[#1A73E8]">
          {order.orderNumber}
        </h3>
      </td>

      <td className="px-4 py-3">
        <div className="grid">
          <h2 className="text-sm font-normal text-[#111827]">
            {order.customerName}
          </h2>
          <p className="text-xs font-normal text-[#99A1AF]">
            {order.customerEmail}
          </p>
        </div>
      </td>

      <td className="px-4 py-3">
        <p className="text-xs font-normal text-[#99A1AF]">
          {order.date}
        </p>
      </td>

      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#111827]">
          {order.items}
        </h3>
      </td>

      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#1A73E8]">
          {order.total}
        </h3>
      </td>

      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#99A1AF]">
          {order.payment}
        </h3>
      </td>

      <td className="px-4 py-3">
        <OrderStatusBadge status={order.status} />
      </td>

      <td className="px-4 py-3">
        <ActionButtons />
      </td>
    </tr>
  );
}

export default function OrderList() {
  const [activeTab, setActiveTab] = React.useState("Semua (8)");

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
            <h1 className="text-2xl font-medium text-[#111827]">
              Manajemen Pesanan
            </h1>

            <button
              type="button"
              className="flex w-fit max-w-40 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 bg-[#1A73E8] px-4 py-2 transition-colors hover:bg-[#0303f3]"
            >
              <svg
                xmlns={urlW3}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3" />
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="m7 10 5 5 5-5" />
              </svg>

              <p className="text-sm font-medium text-white">
                Ekspor
              </p>
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {statusTabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`flex cursor-pointer items-center justify-center rounded-xl border-0 px-4 py-2 text-sm font-normal transition-colors ${isActive
                      ? "bg-[#1A73E8] text-white hover:bg-[#4f4fe8]"
                      : "bg-white text-[#99A1AF] hover:bg-[#eae4e4]"
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <section className="grid items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 md:grid-cols-[minmax(0,1fr)_max-content]">
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
                placeholder="Cari nomor pesanan atau pelanggan..."
              />
            </div>

            <button
              type="button"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#111827] bg-transparent px-4 py-2.5 transition-colors hover:bg-[#f1d9d9]"
            >
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
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
              </svg>

              <p className="text-sm font-medium text-[#99A1AF]">
                Filter
              </p>
            </button>
          </section>

          <section className="grid overflow-hidden rounded-2xl border border-black/10 bg-white">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-245 border-collapse">
                <thead>
                  <tr className="bg-[#ccced2] text-left text-sm font-normal text-[#99A1AF]">
                    <th className="px-4 py-3 font-normal">No. Pesanan</th>
                    <th className="px-4 py-3 font-normal">Pelanggan</th>
                    <th className="px-4 py-3 font-normal">Tanggal</th>
                    <th className="px-4 py-3 font-normal">Item</th>
                    <th className="px-4 py-3 font-normal">Total</th>
                    <th className="px-4 py-3 font-normal">Pembayaran</th>
                    <th className="px-4 py-3 font-normal">Status</th>
                    <th className="px-4 py-3 font-normal">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <OrderRow key={order.id} order={order} />
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