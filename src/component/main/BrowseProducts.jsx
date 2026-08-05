import React from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { FaChevronRight, FaStar } from "react-icons/fa";

import Header from "../Header";
import Footer from "../Footer";
import { CartItem, formatRupiah } from "../CartItem";
import { useProducts } from "../custom_hooks/useProduct.js";
import { transformProduct } from "../utils/productTransformer.js";
import ErrorPage from "../ErorPage";

export default function BrowseProducts() {
  const { category } = useParams();
  const { products, loading, error, categories } = useProducts();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q")?.trim().toLowerCase() || "";

  // Filter & Sort state
  const [maxPrice, setMaxPrice] = React.useState(20000000);
  const [selectedBrands, setSelectedBrands] = React.useState([]);
  const [minimumRating, setMinimumRating] = React.useState("");
  const [sortBy, setSortBy] = React.useState("popular");

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 12; // 12 produk per halaman

  // Reset page when filter changes
  React.useEffect(() => {
    async function setPageChanges() {
      setCurrentPage(1);
    }
    setPageChanges()
  }, [category, q, maxPrice, selectedBrands, minimumRating, sortBy]);

  const isValidSearchQuery = (value) => {
    if (!value) return true;
    const searchRegex = /^[\p{L}\p{N}\s._-]+$/u;
    return searchRegex.test(value);
  };

  // --- Mapping kategori dari backend ---
  const kategoriProducts = React.useMemo(() => {
    if (!categories || categories.length === 0) return [];
    return categories.map((cat) => ({
      id: cat.id,
      title: cat.name,
      image: cat.url_img || "/img/placeholder.png",
      qty: products.filter((p) =>
        p.categories?.some((c) => c.id === cat.id)
      ).length,
    }));
  }, [categories, products]);

  const kategoriSelected = category
    ? kategoriProducts.find((item) => item.title.toLowerCase() === category)
    : null;
  const currentCategoryTitle = kategoriSelected?.title || "Semua Produk";

  // --- Brand list ---
  const brands = React.useMemo(() => {
    return [...new Set(products.map((item) => item.merk_name || "Umum"))];
  }, [products]);

  // --- Filtering & Sorting ---
  let filteredProducts = [...products];

  const isInvalidCategory = category && !kategoriSelected;
  const isInvalidSearchQuery = q.trim() && !isValidSearchQuery(q.trim());

  if (isInvalidSearchQuery || isInvalidCategory) {
    return <ErrorPage />;
  }

  // Filter by category
  if (category && kategoriSelected) {
    filteredProducts = filteredProducts.filter((item) =>
      item.categories?.some((cat) => cat.id === kategoriSelected.id)
    );
  }

  // Search
  if (q) {
    filteredProducts = filteredProducts.filter((item) => {
      const productName = item.name?.toLowerCase() || "";
      const brand = item.merk_name?.toLowerCase() || "";
      const productCategory = item.categories?.[0]?.name?.toLowerCase() || "";
      return (
        productName.includes(q) ||
        brand.includes(q) ||
        productCategory.includes(q)
      );
    });
  }

  // Price
  filteredProducts = filteredProducts.filter((item) => item.price <= maxPrice);

  // Brand
  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter((item) =>
      selectedBrands.includes(item.merk_name)
    );
  }

  // Rating
  if (minimumRating) {
    filteredProducts = filteredProducts.filter(
      (item) => (item.average_rating || 0) >= Number(minimumRating)
    );
  }

  // Sort
  if (sortBy === "lowest") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "highest") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "popular") {
    filteredProducts.sort((a, b) => (b.total_reviews || 0) - (a.total_reviews || 0));
  }

  // --- Pagination ---
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll ke atas
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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

      <main className="bg-green-50 min-h-screen pb-10 text-gray-800 font-sans antialiased">
        {/* Breadcrumb & Title */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <ul className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
            <li>
              <Link to="/main" className="hover:text-green-600 transition-colors">
                Beranda
              </Link>
            </li>
            <li className="text-gray-400">
              <FaChevronRight className="w-3.5 h-3.5" />
            </li>
            <li>
              <Link
                to="/main/all-products"
                className="hover:text-green-600 transition-colors"
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

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm sticky top-6 space-y-6">
              {/* Harga */}
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
                    onChange={(event) => setMaxPrice(Number(event.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
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

              {/* Brand */}
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
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
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

              {/* Rating */}
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
                      className="w-4 h-4 text-green-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="flex text-amber-400">
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} className="w-3.5 h-3.5" />
                      ))}
                      <FaStar className="w-3.5 h-3.5 text-gray-300" />
                    </span>
                    <label htmlFor="rating4" className="text-xs text-gray-400 cursor-pointer select-none">
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
                      className="w-4 h-4 text-green-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="flex text-amber-400">
                      {[...Array(3)].map((_, i) => (
                        <FaStar key={i} className="w-3.5 h-3.5" />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <FaStar key={i} className="w-3.5 h-3.5 text-gray-300" />
                      ))}
                    </span>
                    <label htmlFor="rating3" className="text-xs text-gray-400 cursor-pointer select-none">
                      ke atas
                    </label>
                  </div>
                  {minimumRating && (
                    <button
                      type="button"
                      onClick={() => setMinimumRating("")}
                      className="text-xs text-green-600 hover:text-green-700 font-semibold"
                    >
                      Reset rating
                    </button>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid & Pagination */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Sort & Info */}
            <div className="bg-white border border-gray-200/80 rounded-2xl px-5 py-3.5 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span className="text-sm font-semibold text-gray-500">
                {totalItems} produk ditemukan
                {totalPages > 1 && ` (Halaman ${currentPage} dari ${totalPages})`}
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

            {/* Products */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="all-sale-item">
                {currentProducts.map((item) => (
                  <CartItem key={item.id} item={transformProduct(item)} />
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-xl border text-sm font-medium transition-colors ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                      : "bg-white text-gray-700 hover:bg-green-50 hover:border-green-300 border-gray-300"
                  }`}
                >
                  Sebelumnya
                </button>

                <div className="flex gap-1">
                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    // Tampilkan max 5 halaman di sekitar current page
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors ${
                            page === currentPage
                              ? "bg-green-600 text-white"
                              : "bg-white text-gray-700 hover:bg-green-50 border border-gray-200"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    }
                    // Tampilkan "..." jika ada gap
                    if (page === currentPage - 2 || page === currentPage + 2) {
                      return (
                        <span key={page} className="w-10 h-10 flex items-center justify-center text-gray-400">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-xl border text-sm font-medium transition-colors ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                      : "bg-white text-gray-700 hover:bg-green-50 hover:border-green-300 border-gray-300"
                  }`}
                >
                  Selanjutnya
                </button>
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