import {
  FaBoxOpen,
  FaCheckCircle,
  FaShippingFast,
  FaStar,
  FaTruck,
  FaTimesCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import { formatRupiah } from "../CartItem";
import { useCheckout } from "../custom_hooks/useCheckout";
import { makeModal } from "../ModalContext";


export default function Myorder() {
  const navigate = useNavigate();
  const { orders, loading, fetchOrders, cancelOrder } = useCheckout();
  const { showConfirm, showAlert } = makeModal();


  // Lanjutkan checkout untuk order yang masih in_progress
  const handleContinueCheckout = (order) => {
    // Cek status dan step
    if (order.status === "in_progress") {
      // Tentukan step berdasarkan checkout_step
      const step = order.checkout_step || "shipping";

      const url_step = {
        init: "shipping",
        address_set: "payment",
        payment_set: "confirm",
      }
      navigate(`/checkout/${order.id}/${url_step[step]}`, {
        state: { order },
      });
    } else {
      showAlert({
        title: "Tidak dapat dilanjutkan",
        message: "Pesanan ini sudah tidak dalam proses checkout.",
      });
    }
  };

  // Cancel order
  const handleCancelOrder = async (orderId) => {
    const confirmed = await showConfirm({
      title: "Batalkan pesanan?",
      message: "Apakah kamu yakin ingin membatalkan pesanan ini?",
      confirmText: "Ya, Batalkan",
      cancelText: "Batal",
    });
    if (!confirmed) return;

    try {
      await cancelOrder(orderId);
      await fetchOrders(); // refresh list
      showAlert({
        title: "Berhasil",
        message: "Pesanan berhasil dibatalkan.",
      });
    } catch (err) {
      showAlert({
        title: "Gagal",
        message: err.message || "Gagal membatalkan pesanan.",
      });
    }
  };

  // Format status ke tampilan yang lebih user-friendly
  const getStatusDisplay = (status) => {
    const map = {
      in_progress: { label: "Dalam Proses", icon: FaShippingFast, class: "bg-blue-50 text-blue-600" },
      pending: { label: "Menunggu Pembayaran", icon: FaShippingFast, class: "bg-amber-50 text-amber-700" },
      paid: { label: "Dibayar", icon: FaCheckCircle, class: "bg-emerald-50 text-emerald-600" },
      shipping: { label: "Dikirim", icon: FaTruck, class: "bg-blue-50 text-[#1A73E8]" },
      delivered: { label: "Terkirim", icon: FaCheckCircle, class: "bg-emerald-50 text-emerald-600" },
      canceled: { label: "Dibatalkan", icon: FaTimesCircle, class: "bg-red-50 text-red-600" },
      refunded: { label: "Dikembalikan", icon: FaTimesCircle, class: "bg-gray-50 text-gray-600" },
    };
    return map[status] || { label: status, icon: FaShippingFast, class: "bg-gray-100 text-gray-600" };
  };
  

  if (loading && orders.length === 0) {
    return <div className="flex w-full flex-col items-start gap-4 p-6">Memuat pesanan...</div>;
  }

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <h1 className="text-xl font-medium text-[#111827]">Pesanan Saya</h1>

      {orders.length === 0 ? (
        <div className="w-full rounded-2xl border border-[#0000001A] bg-white p-8 text-center">
          <FaBoxOpen className="mx-auto mb-3 h-10 w-10 text-[#6B7280]" />
          <h2 className="text-base font-semibold text-[#111827]">Belum ada pesanan</h2>
          <p className="mt-2 text-sm text-[#6B7280]">Histori pesanan akan muncul setelah kamu checkout.</p>
        </div>
      ) : (
        orders.map((order) => {
          const statusInfo = getStatusDisplay(order.status);
          const StatusIcon = statusInfo.icon;

          return (
            <div
              key={order.id}
              className="grid w-full gap-4 rounded-2xl border border-[#0000001A] bg-white p-5"
            >
              <div className="flex w-full justify-between gap-4">
                <div className="grid">
                  <h2 className="text-base font-semibold text-blue-600">
                    #{order.id}
                  </h2>
                  <p className="text-xs font-normal text-[#6B7280]">
                    {order.created_at}
                  </p>
                </div>

                <div
                  className={`flex h-6 items-center justify-center gap-1.5 rounded-full px-3 py-1 text-xs font-normal ${statusInfo.class}`}
                >
                  <StatusIcon className="h-3.5 w-3.5" />
                  {statusInfo.label}
                </div>
              </div>

              <div className="grid gap-3">
                {order.items?.map((item) => {
                  const itemPrice = item.price_snapshot || item.price || 0;
                  return (
                    <div key={item.id_product} className="flex gap-3">
                      <img
                        src={item.image?.[0] || "/img/placeholder.png"}
                        alt={item.product_name_snapshot || item.cartNameContent || "Produk"}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <div className="grid">
                        <h2 className="text-sm font-normal text-[#111827]">
                          {item.product_name_snapshot || item.cartNameContent || "Produk"}
                        </h2>
                        <p className="text-xs font-normal text-[#6B7280]">
                          ×{item.qty || item.quantity} · {formatRupiah(itemPrice)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex w-full flex-col gap-3 border-t border-[#0000001A] pt-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-medium text-[#6B7280]">
                  Total:{" "}
                  <span className="text-[#1A73E8]">
                    {formatRupiah(order.total_payment || order.total || 0)}
                  </span>
                </p>

                <div className="flex flex-wrap gap-2">
                  {/* Tombol Lanjutkan Checkout hanya untuk in_progress */}
                  {order.status === "in_progress" && (
                    <button
                      type="button"
                      onClick={() => handleContinueCheckout(order)}
                      className="cursor-pointer flex items-center justify-center rounded-lg border border-green-400 px-3 py-1.5 text-xs font-medium text-green-600 hover:bg-green-50"
                    >
                      Lanjutkan Checkout
                    </button>
                  )}

                  {/* Tombol Cancel untuk in_progress dan pending */}
                  {(order.status === "in_progress" || order.status === "pending") && (
                    <button
                      type="button"
                      onClick={() => handleCancelOrder(order.id)}
                      className="cursor-pointer flex items-center justify-center rounded-lg border border-red-400 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                      Batalkan
                    </button>
                  )}

                  {/* Tombol Lacak untuk shipping/delivered */}
                  {(order.status === "shipping" || order.status === "delivered") && (
                    <button
                      type="button"
                      className="cursor-pointer flex items-center justify-center rounded-lg border border-green-400 px-3 py-1.5 text-xs font-normal text-green-600 hover:bg-green-50"
                    >
                      Lacak
                    </button>
                  )}

                  {/* Tombol Ulasan untuk delivered */}
                  {order.status === "delivered" && (
                    <button
                      type="button"
                      className="cursor-pointer flex items-center justify-center gap-1 rounded-lg border-none bg-[#F97316] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#EA580C]"
                    >
                      <FaStar className="h-3.5 w-3.5" />
                      Beri Ulasan
                    </button>
                  )}

                  {/* Tombol Beli Lagi untuk delivered/canceled/refunded */}
                  {(order.status === "delivered" || order.status === "canceled" || order.status === "refunded") && (
                    <button
                      type="button"
                      className="cursor-pointer flex items-center justify-center rounded-lg border border-[#0000001A] px-3 py-1.5 text-xs font-medium text-[#6B7280] hover:bg-gray-50"
                    >
                      Beli Lagi
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}