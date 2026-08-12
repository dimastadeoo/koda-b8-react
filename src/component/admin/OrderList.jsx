import { useState, useEffect } from "react";
import AsideContent from "../Aside";
import NavPage from "../NavPage";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaDownload,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import { useAdminOrders } from "../custom_hooks/useAdminOrders";
import { makeModal } from "../ModalContext";
import { formatRupiah } from "../CartItem";

// Status mapping
const STATUS_MAP = {
  in_progress: 'Dalam Proses',
  pending: 'Pending',
  paid: 'Dibayar',
  shipping: 'Dikirim',
  delivered: 'Terkirim',
  canceled: 'Dibatalkan',
  refunded: 'Dikembalikan',
};

const STATUS_CLASS = {
  delivered: "bg-[#F0FDF4] text-[#16A34A]",
  shipping: "bg-[#FAF5FF] text-[#8B5CF6]",
  paid: "bg-[#EFF6FF] text-[#1A73E8]",
  pending: "bg-[#FFF7ED] text-[#F97316]",
  in_progress: "bg-[#FFF7ED] text-[#F97316]",
  canceled: "bg-[#FEF2F2] text-[#DC2626]",
  refunded: "bg-[#FEF2F2] text-[#DC2626]",
};

// Status options for dropdown
const STATUS_OPTIONS = [
  { value: 'in_progress', label: 'Dalam Proses' },
  { value: 'pending', label: 'Pending' },
  { value: 'paid', label: 'Dibayar' },
  { value: 'shipping', label: 'Dikirim' },
  { value: 'delivered', label: 'Terkirim' },
  { value: 'canceled', label: 'Dibatalkan' },
  { value: 'refunded', label: 'Dikembalikan' },
];

function OrderStatusBadge({ status }) {
  const displayStatus = STATUS_MAP[status] || status;
  const className = STATUS_CLASS[status] || "bg-[#EFF6FF] text-[#1A73E8]";
  return (
    <div className={`flex w-fit items-center justify-center rounded-xl px-2 py-0.5 text-xs font-normal ${className}`}>
      {displayStatus}
    </div>
  );
}

function StatusDropdown({ orderId, currentStatus, onUpdate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (status) => {
    setIsOpen(false);
    onUpdate(orderId, status);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 cursor-pointer text-xs text-[#1A73E8] hover:underline"
      >
        <FaEdit size={12} />
        Ubah Status
      </button>
      {isOpen && (
        <div className="absolute top-6 left-0 z-10 bg-white border border-[#e2e8f0] rounded-xl shadow-lg py-1 min-w-36">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              className={`w-full text-left px-4 py-1.5 text-xs hover:bg-gray-100 transition-colors ${currentStatus === opt.value ? 'bg-green-50 text-green-600' : 'text-[#111827]'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ActionButtons({ order, onView, onDelete, onUpdateStatus }) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => onView(order.id)}
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#1A73E8]"
        aria-label="Lihat pesanan"
      >
        <FaEye size={16} />
      </button>
      <StatusDropdown
        orderId={order.id}
        currentStatus={order.status}
        onUpdate={onUpdateStatus}
      />
      <button
        type="button"
        onClick={() => onDelete(order.id)}
        className="flex cursor-pointer items-center justify-center border-0 bg-transparent p-1 text-[#6B7280] hover:text-[#DC2626]"
        aria-label="Hapus pesanan"
      >
        <FaTrash size={16} />
      </button>
    </div>
  );
}

function OrderRow({ order, onView, onDelete, onUpdateStatus }) {
  console.log(order)
  const totalItems = order.items?.length || 0;
  const totalPrice = order.total_payment || order.total || 0;

  return (
    <tr className="border-b border-black/10 last:border-b-0 hover:bg-gray-50">
      <td className="px-4 py-3">
        <h3 className="text-sm font-semibold text-[#1A73E8]">#{order.id}</h3>
      </td>
      <td className="px-4 py-3">
        <div className="grid">
          <h2 className="text-sm font-normal text-[#111827]">{order.name|| 'Customer'}</h2>
          <p className="text-xs font-normal text-[#99A1AF]">{order.user_email}</p>
        </div>
      </td>
      <td className="px-4 py-3">
        <p className="text-xs font-normal text-[#99A1AF]">
          {order.created_at ? new Date(order.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'}
        </p>
      </td>
      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#111827]">{totalItems}</h3>
      </td>
      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#1A73E8]">{formatRupiah(totalPrice)}</h3>
      </td>
      <td className="px-4 py-3">
        <h3 className="text-sm font-normal text-[#99A1AF]">{order.payment_name || 'N/A'}</h3>
      </td>
      <td className="px-4 py-3">
        <OrderStatusBadge status={order.status} />
      </td>
      <td className="px-4 py-3">
        <ActionButtons
          order={order}
          onView={onView}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
        />
      </td>
    </tr>
  );
}

export default function OrderList() {
  const { orders, loading, loadOrders, updateStatus } = useAdminOrders();

  const { showConfirm, showAlert } = makeModal();

  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

  // Count per status
  const statusCounts = orders.reduce((acc, order) => {
    const status = order.status || 'unknown';
    acc[status] = (acc[status] || 0) + 1;
    acc['all'] = (acc['all'] || 0) + 1;
    return acc;
  }, {});

  const statusTabs = [
    { label: `Semua (${statusCounts['all'] || 0})`, value: 'all' },
    { label: `Dalam Proses (${statusCounts['in_progress'] || 0})`, value: 'in_progress' },
    { label: `Pending (${statusCounts['pending'] || 0})`, value: 'pending' },
    { label: `Dibayar (${statusCounts['paid'] || 0})`, value: 'paid' },
    { label: `Dikirim (${statusCounts['shipping'] || 0})`, value: 'shipping' },
    { label: `Terkirim (${statusCounts['delivered'] || 0})`, value: 'delivered' },
    { label: `Dibatalkan (${statusCounts['canceled'] || 0})`, value: 'canceled' },
  ];

  // Filter orders
  const filteredOrders = orders.filter(order => {
    const matchStatus = activeTab === 'all' || order.status === activeTab;
    const search = searchTerm.toLowerCase();
    const matchSearch = 
      String(order.id).includes(search) ||
      (order.name?.toLowerCase() || '').includes(search) ||
      (order.email?.toLowerCase() || '').includes(search);
    return matchStatus && matchSearch;
  });

  const handleUpdateStatus = async (orderId, status) => {
    const confirmed = await showConfirm({
      title: "Ubah status pesanan?",
      message: `Akan mengubah status pesanan #${orderId} menjadi "${STATUS_MAP[status]}"`,
      confirmText: "Ya, Ubah",
      cancelText: "Batal",
    });
    if (!confirmed) return;

    try {
      await updateStatus(orderId, status);
      await showAlert({
        title: "Berhasil",
        message: "Status pesanan berhasil diperbarui",
      });
      loadOrders(); // refresh
    } catch (err) {
      await showAlert({
        title: "Gagal",
        message: err.message || "Gagal update status",
      });
    }
  };

  const handleViewOrder = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (order) {
      showAlert({
        title: `Detail Pesanan #${orderId}`,
        message: `Pelanggan: ${order.name}\nEmail: ${order.email}\nTotal: ${formatRupiah(order.total_payment)}\nStatus: ${STATUS_MAP[order.status]}`,
      });
    }
  };

  const handleDeleteOrder = async (orderId) => {
    const confirmed = await showConfirm({
      title: "Hapus pesanan?",
      message: `Pesanan #${orderId} akan dihapus permanen.`,
      confirmText: "Ya, Hapus",
      cancelText: "Batal",
    });
    if (!confirmed) return;
    // Note: implementasi delete di admin belum disediakan, tinggal tambahkan nanti
    await showAlert({
      title: "Info",
      message: "Fitur hapus pesanan belum tersedia",
    });
  };

  if (loading && orders.length === 0) {
    return (
      <>
        <AsideContent />
        <NavPage />
        <main className="min-h-screen bg-[#F8F9FA] pt-16 pl-18 md:pl-60">
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Memuat pesanan...</p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <AsideContent />
      <NavPage />

      <main className="min-h-screen bg-[#F8F9FA] pt-16 pl-18 md:pl-60">
        <section className="grid gap-6 p-6">
          <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
            <h1 className="text-2xl font-medium text-[#111827]">Manajemen Pesanan</h1>
            <button
              type="button"
              className="flex w-fit max-w-40 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 bg-[#1A73E8] px-4 py-2 transition-colors hover:bg-[#1557b0]"
            >
              <FaDownload size={16} className="text-white" />
              <p className="text-sm font-medium text-white">Ekspor</p>
            </button>
          </div>

          {/* Status Tabs */}
          <div className="flex flex-wrap gap-2">
            {statusTabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                  className={`flex cursor-pointer items-center justify-center rounded-xl border-0 px-4 py-2 text-sm font-normal transition-colors ${
                    isActive
                      ? "bg-[#1A73E8] text-white hover:bg-[#1557b0]"
                      : "bg-white text-[#99A1AF] hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search & Filter */}
          <section className="grid items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 md:grid-cols-[minmax(0,1fr)_max-content]">
            <div className="flex items-center gap-2 rounded-xl bg-[#F3F4F6] px-4 py-2.5">
              <FaSearch size={16} className="text-[#6B7280]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border-0 bg-transparent text-sm text-[#111827] outline-none placeholder:text-[#6B7280]"
                placeholder="Cari nomor pesanan atau pelanggan..."
              />
            </div>
            <button
              type="button"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#111827] bg-transparent px-4 py-2.5 transition-colors hover:bg-gray-100"
            >
              <FaFilter size={16} className="text-[#6B7280]" />
              <p className="text-sm font-medium text-[#99A1AF]">Filter</p>
            </button>
          </section>

          {/* Table */}
          <section className="grid overflow-hidden rounded-2xl border border-black/10 bg-white">
            <div className="flex items-center px-4 py-3 text-sm font-normal text-[#99A1AF]">
              {filteredOrders.length} Pesanan
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-245 border-collapse">
                <thead>
                  <tr className="bg-[#F1F2F4] text-left text-sm font-normal text-[#6B7280]">
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
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center py-8 text-[#6B7280]">
                        {searchTerm ? "Tidak ada pesanan yang sesuai" : "Belum ada pesanan"}
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order) => (
                      <OrderRow
                        key={order.id}
                        order={order}
                        onView={handleViewOrder}
                        onDelete={handleDeleteOrder}
                        onUpdateStatus={handleUpdateStatus}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}