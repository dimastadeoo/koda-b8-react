import AsideContent from "../Aside";
import NavPage from "../NavPage";
import React from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaDownload,
  FaSearch,
  FaFilter,
} from "react-icons/fa";

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
      className={`flex w-fit items-center justify-center rounded-xl px-2 py-0.5 text-xs font-normal ${
        badgeClass[status] || "bg-[#EFF6FF] text-[#1A73E8]"
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
        <FaEye size={16} />
      </button>

      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
        aria-label="Edit pesanan"
      >
        <FaEdit size={16} />
      </button>

      <button
        type="button"
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#DC2626]"
        aria-label="Hapus pesanan"
      >
        <FaTrash size={16} />
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
        <p className="text-xs font-normal text-[#99A1AF]">{order.date}</p>
      </td>

      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#111827]">{order.items}</h3>
      </td>

      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#1A73E8]">{order.total}</h3>
      </td>

      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#99A1AF]">{order.payment}</h3>
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
      <AsideContent />
      <NavPage />

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
              <FaDownload size={16} className="text-white" />
              <p className="text-sm font-medium text-white">Ekspor</p>
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
                  className={`flex cursor-pointer items-center justify-center rounded-xl border-0 px-4 py-2 text-sm font-normal transition-colors ${
                    isActive
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
              <FaSearch size={16} className="text-[#6B7280]" />
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
              <FaFilter size={16} className="text-[#6B7280]" />
              <p className="text-sm font-medium text-[#99A1AF]">Filter</p>
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
  );
}