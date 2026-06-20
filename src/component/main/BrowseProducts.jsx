import React from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { FaChevronRight, FaStar } from "react-icons/fa";

import Header from "../Header";
import Footer from "../Footer";
import { CartItem, formatRupiah } from "../CartItem";
import { makeProducts } from "../ProdutsContext";
import ErrorPage from "../ErorPage";

export default function BrowseProducts() {

  const { category } = useParams();
  const { products, loading, error, kategoriProducts } = makeProducts();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q")?.trim().toLowerCase() || "";

  const [maxPrice, setMaxPrice] = React.useState(20000000);
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [minimumRating, setMinimumRating] = React.useState("");
  const [sortBy, setSortBy] = React.useState("popular");
  const isValidSearchQuery = (value) => {
    if (!value) return true;

    const searchRegex = /^[\p{L}\p{N}\s._-]+$/u;

    return searchRegex.test(value);
  };

  const kategoriSelected = category
    ? kategoriProducts.find((item) => item.title.toLowerCase() === category)
    : null
  const currentCategoryTitle = kategoriSelected?.title || "Semua Produk";

  const brands = [...new Set(products.map((item) => item.cartJenisContent))];

  let filteredProducts = [...products];

  const isInvalidCategory = category && !kategoriSelected;

  const isInvalidSearchQuery = q.trim() && !isValidSearchQuery(q.trim());

  if (isInvalidSearchQuery) {
    return <ErrorPage />;
  }

  if (isInvalidCategory) {
    return <ErrorPage />;
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (item) => item.kategori === kategoriSelected.id
    );
  }

  if (q) {
    filteredProducts = filteredProducts.filter((item) => {
      const productName = item.cartNameContent?.toLowerCase() || "";
      const brand = item.cartJenisContent?.toLowerCase() || "";
      const productCategory = item.category?.toLowerCase() || "";

      return (
        productName.includes(q) ||
        brand.includes(q) ||
        productCategory.includes(q)
      );
    });
  }

  filteredProducts = filteredProducts.filter(
    (item) => item.price <= maxPrice
  );

  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter((item) =>
      selectedBrands.includes(item.cartJenisContent)
    );
  }

  if (minimumRating) {
    filteredProducts = filteredProducts.filter(
      (item) => item.rateContent >= Number(minimumRating)
    );
  }

  if (sortBy === "lowest") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "highest") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "popular") {
    filteredProducts.sort((a, b) => b.reviewContent - a.reviewContent);
  }

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };



  if (loading) {
    return <p className="text-center py-10">Loading produk...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  return (
    <>
      <header className="sticky top-0 z-50" id="header">
        <Header />
      </header>

      <main className="bg-gray-50 min-h-screen text-gray-800 font-sans antialiased">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <ul className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
            <li>
              <Link
                to="/main"
                className="hover:text-blue-600 transition-colors"
              >
                Beranda
              </Link>
            </li>

            <li className="text-gray-400">
              <FaChevronRight className="w-3.5 h-3.5" />
            </li>

            <li>
              <Link
                to="/main/all-products"
                className="hover:text-blue-600 transition-colors"
              >
                Toko
              </Link>
            </li>

            {category && (

              <>

                <li className="text-gray-400">
                  <FaChevronRight className="w-3.5 h-3.5" />
                </li>

                <li className="text-gray-800 font-semibold">
                  {currentCategoryTitle}
                </li>
              </>
            )}
          </ul>

          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-4 mb-2">
            {currentCategoryTitle}
          </h1>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm sticky top-6 space-y-6">
              <div className="space-y-3">
                <div className="text-sm font-bold text-gray-900 tracking-wide uppercase">
                  Harga
                </div>

                <div className="w-full pt-2">
                  <input
                    type="range"
                    min="0"
                    max="20000000"
                    value={maxPrice}
                    onChange={(event) =>
                      setMaxPrice(Number(event.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-gray-600">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg px-2 py-1">
                    {formatRupiah(maxPrice)}
                  </div>

                  <div className="text-gray-400">Rp 20.000.000</div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div className="space-y-3">
                <div className="text-sm font-bold text-gray-900 tracking-wide uppercase">
                  Merek
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {brands.map((brand) => (
                    <div
                      key={brand}
                      className="flex items-center gap-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <input
                        type="checkbox"
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                      />

                      <label
                        htmlFor={`brand-${brand}`}
                        className="cursor-pointer select-none"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              <div className="space-y-3">
                <div className="text-sm font-bold text-gray-900 tracking-wide uppercase">
                  Rating Minimum
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
                    <input
                      type="radio"
                      name="rating"
                      id="rating4"
                      checked={minimumRating === "4"}
                      onChange={() => setMinimumRating("4")}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                    />

                    <span className="flex text-amber-400">
                      {[...Array(4)].map((_, index) => (
                        <FaStar key={index} className="w-3.5 h-3.5" />
                      ))}
                      <FaStar className="w-3.5 h-3.5 text-gray-300" />
                    </span>

                    <label
                      htmlFor="rating4"
                      className="text-xs text-gray-400 cursor-pointer select-none"
                    >
                      ke atas
                    </label>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm font-medium text-gray-600">
                    <input
                      type="radio"
                      name="rating"
                      id="rating3"
                      checked={minimumRating === "3"}
                      onChange={() => setMinimumRating("3")}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                    />

                    <span className="flex text-amber-400">
                      {[...Array(3)].map((_, index) => (
                        <FaStar key={index} className="w-3.5 h-3.5" />
                      ))}
                      {[...Array(2)].map((_, index) => (
                        <FaStar
                          key={index}
                          className="w-3.5 h-3.5 text-gray-300"
                        />
                      ))}
                    </span>

                    <label
                      htmlFor="rating3"
                      className="text-xs text-gray-400 cursor-pointer select-none"
                    >
                      ke atas
                    </label>
                  </div>

                  {minimumRating && (
                    <button
                      type="button"
                      onClick={() => setMinimumRating("")}
                      className="text-xs text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Reset rating
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white border border-gray-200/80 rounded-2xl px-5 py-3.5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-sm font-semibold text-gray-500">
                {filteredProducts.length} produk ditemukan
              </span>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <label htmlFor="sort-select" className="shrink-0">
                  Urutkan:
                </label>

                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 text-gray-800 font-semibold focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer transition-all"
                >
                  <option value="popular">Paling Populer</option>
                  <option value="lowest">Harga Terendah</option>
                  <option value="highest">Harga Tertinggi</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                id="all-sale-item"
              >
                {filteredProducts.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                  Produk tidak ditemukan
                </h2>

                <p className="text-sm text-gray-500">
                  Coba ubah filter atau pilih kategori lainnya.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}