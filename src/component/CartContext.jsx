import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useAuth } from "./custom_hooks/useAuth.js";
import { apiFetch } from "../api/api.js";

const CartContext = createContext(null);
const CART_KEY = "belimudah_cart";

function getLocalStorageData(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function CartProvider({ children }) {
  const { isLoggedIn } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch cart dari backend
  const fetchCart = useCallback(async () => {
    if (!isLoggedIn) return;
    setLoading(true);
    try {
      const { response, data } = await apiFetch('/cart', { method: 'GET' });
      if (!response.ok) throw new Error(data.message || 'Gagal ambil cart');
      const items = data?.results || [];
      setCartItems(items);
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (err) {
      setError(err.message);
      const localData = getLocalStorageData(CART_KEY, []);
      setCartItems(localData);
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Auto fetch saat login (hanya sekali)
  useEffect(() => {
    setTimeout(()=>{
      if (isLoggedIn) {
        fetchCart();
      } else {
        setCartItems([]);
        localStorage.removeItem(CART_KEY);
      }
    })
  }, [isLoggedIn, fetchCart]);

  // Tambah ke cart
  const addToCart = useCallback(async (product, quantity = 1) => {
    if (!isLoggedIn) {
      return {
        success: false,
        requireLogin: true,
        message: "Silakan login terlebih dahulu.",
      };
    }
    try {
      const formData = new URLSearchParams();
      formData.append('productId', product.id);
      formData.append('qty', quantity);
      const { response, data } = await apiFetch('/cart', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error(data.message || 'Gagal tambah ke cart');
      await fetchCart();
      return {
        success: true,
        message: "Produk berhasil ditambahkan ke keranjang.",
      };
    } catch (err) {
      setError(err.message);
      return {
        success: false,
        message: err.message,
      };
    }
  }, [isLoggedIn, fetchCart]);

  // Update quantity
  const updateQuantity = useCallback(async (productId, qty) => {
    if (!isLoggedIn) return;
    try {
      const formData = new URLSearchParams();
      formData.append('qty', qty);
      const { response, data } = await apiFetch(`/cart/${productId}`, {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) throw new Error(data.message || 'Gagal update quantity');
      await fetchCart();
    } catch (err) {
      setError(err.message);
      fetchCart(); // refresh jika gagal
    }
  }, [isLoggedIn, fetchCart]);

  // Hapus item
  const removeFromCart = useCallback(async (productId) => {
    if (!isLoggedIn) return;
    try {
      const { response, data } = await apiFetch(`/cart/${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error(data.message || 'Gagal hapus item');
      await fetchCart();
    } catch (err) {
      setError(err.message);
      fetchCart();
    }
  }, [isLoggedIn, fetchCart]);

  // Increase quantity (optimis)
  const increaseQuantity = useCallback(async (productId) => {
    const item = cartItems.find(i => Number(i.id_product) === Number(productId));
    if (item) {
      await updateQuantity(productId, item.qty + 1);
    }
  }, [cartItems, updateQuantity]);

  // Decrease quantity
  const decreaseQuantity = useCallback(async (productId) => {
    const item = cartItems.find(i => Number(i.id_product) === Number(productId));
    if (item && item.qty > 1) {
      await updateQuantity(productId, item.qty - 1);
    }
  }, [cartItems, updateQuantity]);

  // Setelah checkout sukses, refresh cart
  const removeCheckedOutCartItems = useCallback(async () => {
    await fetchCart();
  }, [fetchCart]);

  const clearCart = useCallback(() => {
    setCartItems([]);
    localStorage.removeItem(CART_KEY);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        error,
        fetchCart,
        addToCart,
        updateQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        removeCheckedOutCartItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function makeCart() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('makeCart must be used within a CartProvider');
  }
  return context;
}