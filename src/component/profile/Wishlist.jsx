import { CartItem } from "../CartItem";
import { useWishlist } from "../custom_hooks/useWhislist";
import { transformProduct } from "../utils/productTransformer";

export default function Wishlist() {
  const { wishlist, loading } = useWishlist(false);

  if (loading) return <div className="p-6">Memuat wishlist...</div>;

  // Transformasi data produk dari wishlist ke format CartItem
  const transformedItems = wishlist.map((item) => {
    // Pastikan data memiliki field yang dibutuhkan CartItem
    return transformProduct({
      id: item.id_product,
      name: item.name,
      price: item.price,
      merk_name: item.merk_name,
      primary_image: item.primary_image,
      images: item.images || [{ url_img: item.primary_image }],
      average_rating: item.average_rating || 0,
      total_reviews: item.total_reviews || 0,
    });
  });

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-xl font-medium text-[#111827]">
        Wishlist ({wishlist.length})
      </h1>

      {wishlist.length === 0 ? (
        <div className="w-full rounded-2xl border border-[#0000001A] bg-white p-8 text-center">
          <h2 className="text-base font-semibold text-[#111827]">Wishlist masih kosong</h2>
          <p className="mt-2 text-sm text-[#6B7280]">Klik icon love pada produk untuk menambahkannya ke wishlist.</p>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transformedItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}