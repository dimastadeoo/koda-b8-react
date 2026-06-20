import { formatRupiah } from "../CartItem";

export default function CheckoutSummary({ checkout }) {

  return (
    <div className="grid gap-4 p-5 bg-white border border-black/10 rounded-xl">
      <h3 className="font-medium text-lg text-[#111827]">
        Ringkasan Pesanan
      </h3>

      <div className="grid gap-3">
        {checkout.items.map((item) => (
          <div key={item.productId} className="flex items-center gap-2">
            <img
              src={item.image?.[0]}
              alt={item.cartNameContent}
              className="w-10 h-10 object-cover rounded-lg"
            />

            <div>
              <h4 className="font-normal text-xs text-[#6B7280] line-clamp-1">
                {item.cartNameContent}
              </h4>
            </div>

            <span className="ml-auto text-xs font-normal text-[#111827]">
              ×{item.quantity}
            </span>
          </div>
        ))}
      </div>

      <div className="grid pt-3 gap-2 border-t border-black/10">
        <div className="flex justify-between text-sm font-normal text-[#6B7280]">
          <span>Subtotal</span>
          <span>{formatRupiah(checkout.subtotal || checkout.total)}</span>
        </div>

        <div className="flex justify-between text-sm font-normal text-[#6B7280]">
          <span>Ongkir</span>
          <span className="text-[#00A63E]">Gratis</span>
        </div>

        <div className="flex justify-between border-t border-black/10 pt-2 text-sm font-semibold text-[#1a202c]">
          <span>Total</span>
          <span className="text-[#1A73E8]">
            {formatRupiah(checkout.total)}
          </span>
        </div>
      </div>

      <p className="text-center text-xs font-normal text-[#6B7280]">
        🛡️ Pembayaran aman dan terenkripsi
      </p>
    </div>
  );
}