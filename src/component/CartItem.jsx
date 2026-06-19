import { useState } from "react";
import { useNavigate } from "react-router";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const formatRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

function CartItem({ item }) {
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!item) return null;

  const {
    id,
    badgeContent,
    cartJenisContent,
    cartNameContent,
    rateContent,
    reviewContent,
    price,
    image,
  } = item;


  const isDiscount = typeof badgeContent === "number";

  const finalPrice = isDiscount
    ? price - (price * badgeContent) / 100
    : price;

  const handleCardClick = () => {
    navigate(`/main/product/${id}`);
  };

  const handleWishlistClick = (event) => {
    event.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      navigate(`/main/product/${id}`);
    }
  };

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className="bg-white border border-gray-100 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all group cursor-pointer outline-none focus:ring-2 focus:ring-blue-500"
    >
      <div className="block">
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="relative w-full aspect-square bg-cover bg-center bg-no-repeat transition-transform group-hover:scale-[1.02] duration-300"
            style={{
              backgroundImage: `url(${image?.[0]})`,
            }}
          >
            {badgeContent !== "" &&
              badgeContent !== null &&
              badgeContent !== undefined && (
                <span
                  className={`absolute top-2 left-2 ${
                    isDiscount ? "bg-red-500" : "bg-blue-600"
                  } text-white text-xs font-bold px-2 py-1 rounded-full`}
                >
                  {isDiscount ? `-${badgeContent}%` : badgeContent}
                </span>
              )}
          </div>

          <button
            type="button"
            onClick={handleWishlistClick}
            aria-label="Wishlist"
            className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm flex items-center justify-center shadow-sm cursor-pointer z-10 transition-all duration-300"
          >
            {isWishlisted ? (
              <FaHeart className="text-red-500 text-lg transition-colors duration-300" />
            ) : (
              <FaRegHeart className="text-red-800 text-lg transition-colors duration-300 hover:text-red-500" />
            )}
          </button>
        </div>

        <div className="p-3 space-y-1">
          <div className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            {cartJenisContent}
          </div>

          <div className="text-sm font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {cartNameContent}
          </div>

          <div className="flex items-center gap-1 text-xs py-0.5">
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="w-3.5 h-3.5 text-amber-400"
                />
              ))}
            </span>

            <span className="font-bold text-gray-800 ml-1">
              {rateContent}
            </span>

            <span className="text-gray-400">
              ({reviewContent})
            </span>
          </div>

          <div className="pt-1 flex items-baseline justify-between">
            <span className="text-sm font-bold text-blue-600">
              {formatRupiah(finalPrice)}
            </span>

            {isDiscount && (
              <span className="text-xs text-gray-400 line-through">
                {formatRupiah(price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export {CartItem, formatRupiah}