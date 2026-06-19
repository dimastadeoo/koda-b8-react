import React from "react";

const ProductContext = React.createContext();
export function ProductProvider({ children }) {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/src/data/products.json");

        if (!response.ok) {
          throw new Error("Gagal mengambil data produk");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const getProductsByIds = (ids = []) => {
    return products.filter((product) => ids.includes(product.id));
  };

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        getProductsByIds,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function makeProducts() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return React.useContext(ProductContext);
}