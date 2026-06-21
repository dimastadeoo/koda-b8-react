import React from "react";

const ProductContext = React.createContext();
export function ProductProvider({ children }) {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const kategoriProducts = [
    {
      id: 1,
      image: "/img/katPro-1.png",
      title: "Elektronik",
      qty: 7,
      url: "#"
    },
    {
      id: 2,
      image: "/img/katPro-2.png",
      title: "Fashion",
      qty: 5,
      url: "#"
    },
    {
      id: 3,
      image: "/img/katPro-3.png",
      title: "Rumah & Produk",
      qty: 3,
      url: "#"
    },
    {
      id: 4,
      image: "/img/katPro-4.png",
      title: "Kecantikan",
      qty: 2,
      url: "#"
    },
    {
      id: 5,
      image: "/img/katPro-5.png",
      title: "Olahraga",
      qty: 3,
      url: "#"
    },
    {
      id: 6,
      image: "/img/katPro-6.png",
      title: "Buku & Alat Tulis",
      qty: 2,
      url: "#"
    }
  ]

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/data/products.json");

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
        kategoriProducts,
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