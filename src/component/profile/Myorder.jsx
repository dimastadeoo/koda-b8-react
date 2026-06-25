import {
  FaBoxOpen,
  FaCheckCircle,
  FaShippingFast,
  FaStar,
  FaTruck,
} from "react-icons/fa";

import { makeProfile } from "../ProfileContext";
import { useNavigate } from "react-router";
import { formatRupiah } from "../CartItem";

export default function Myorder() {
  const { orders } = makeProfile();
  const navigate = useNavigate();

  const handleContinueCheckout = (order) => {
    const step = order.checkoutStep || "shipping";

    navigate(`/checkout/${order.id}/${step}`, {
      state: {
        checkout: order,
      },
    });
  };

  const getItemPrice = (item) => {
    const isDiscount = typeof item.badgeContent === "number";

    if (!isDiscount) {
      return item.price || 0;
    }

    return item.price - (item.price * item.badgeContent) / 100;
  };

  const getStatusIcon = (status) => {
    if (status === "Terkirim") return <FaCheckCircle className="h-3.5 w-3.5" />;
    if (status === "Dikirim") return <FaTruck className="h-3.5 w-3.5" />;
    return <FaShippingFast className="h-3.5 w-3.5" />;
  };

  const getStatusClass = (status) => {
    if (status === "Terkirim") {
      return "bg-emerald-50 text-emerald-600";
    }

    if (status === "Dikirim") {
      return "bg-blue-50 text-[#1A73E8]";
    }

    if (status === "Belum Selesai") {
      return "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20";
    }

    return "bg-gray-100 text-[#6B7280]";
  };

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <h1 className="text-xl font-medium text-[#111827]">Pesanan Saya</h1>

      {orders.length === 0 ? (
        <div className="w-full rounded-2xl border border-[#0000001A] bg-white p-8 text-center">
          <FaBoxOpen className="mx-auto mb-3 h-10 w-10 text-[#6B7280]" />

          <h2 className="text-base font-semibold text-[#111827]">
            Belum ada pesanan
          </h2>

          <p className="mt-2 text-sm text-[#6B7280]">
            Histori pesanan akan muncul setelah kamu checkout.
          </p>
        </div>
      ) : (
        orders.map((order) => (
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
                  {order.createdAtText}
                </p>
              </div>

              <div
                className={`flex h-6 items-center justify-center gap-1.5 rounded-full px-3 py-1 text-xs font-normal ${getStatusClass(
                  order.status
                )}`}
              >
                {getStatusIcon(order.status)}
                {order.status}
              </div>
            </div>

            <div className="grid gap-3">
              {order.items.map((item) => {
                const itemPrice = getItemPrice(item);

                return (
                  <div key={item.productId} className="flex gap-3">
                    <img
                      src={item.image?.[0]}
                      alt={item.cartNameContent}
                      className="h-12 w-12 rounded-lg object-cover"
                    />

                    <div className="grid">
                      <h2 className="text-sm font-normal text-[#111827]">
                        {item.cartNameContent}
                      </h2>

                      <p className="text-xs font-normal text-[#6B7280]">
                        ×{item.quantity} · {formatRupiah(itemPrice)}
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
                  {formatRupiah(order.total)}
                </span>
              </p>

              <div className="flex flex-wrap gap-2">
                {order.status === "Belum Selesai" ? (
                  <button
                    type="button"
                    onClick={() => handleContinueCheckout(order)}
                    className="cursor-pointer flex items-center justify-center rounded-lg border border-green-400 px-3 py-1.5 text-xs font-medium text-green-600"
                  >
                    Lanjutkan Checkout
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      className="cursor-pointer flex items-center justify-center rounded-lg border border-green-400 px-3 py-1.5 text-xs font-normal text-green-600"
                    >
                      Lacak
                    </button>

                    <button
                      type="button"
                      className="cursor-pointer flex items-center justify-center gap-1 rounded-lg border-none bg-[#F97316] px-3 py-1.5 text-xs font-medium text-white"
                    >
                      <FaStar className="h-3.5 w-3.5" />
                      Beri Ulasan
                    </button>

                    <button
                      type="button"
                      className="cursor-pointer flex items-center justify-center rounded-lg border border-[#0000001A] px-3 py-1.5 text-xs font-medium text-[#6B7280]"
                    >
                      Beli Lagi
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}