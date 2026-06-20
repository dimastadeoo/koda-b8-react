import {CartItem} from "../CartItem";
import { makeProfile } from "../ProfileContext";

export default function Wishlist() {
  const { wishlistItems } = makeProfile();

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-xl font-medium text-[#111827]">
        Wishlist ({wishlistItems.length})
      </h1>

      {wishlistItems.length === 0 ? (
        <div className="w-full rounded-2xl border border-[#0000001A] bg-white p-8 text-center">
          <h2 className="text-base font-semibold text-[#111827]">
            Wishlist masih kosong
          </h2>

          <p className="mt-2 text-sm text-[#6B7280]">
            Klik icon love pada produk untuk menambahkannya ke wishlist.
          </p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wishlistItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                ...item,
                id: item.productId,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}