import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./custom_hooks/useAuth.js";

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
  const {isLoggedIn, currentUser} = useAuth()

  const [allCartItems, setAllCartItems] = useState(() =>
    getLocalStorageData(CART_KEY, [])
  );

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(allCartItems));
  }, [allCartItems]);

  const userEmail = currentUser?.email || null;

  const cartItems = allCartItems.filter(
    (item) => item.userEmail === userEmail
  );

  const addToCart = (product, quantity = 1) => {
    if (!isLoggedIn || !currentUser) {
      return {
        success: false,
        requireLogin: true,
        message: "Silakan login terlebih dahulu untuk menambahkan produk ke keranjang.",
      };
    }

    const cleanEmail = currentUser.email.trim().toLowerCase();

    setAllCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.userEmail === cleanEmail &&
          item.productId === product.id
      );

      if (existingItem) {
        return prev.map((item) =>
          item.userEmail === cleanEmail && item.productId === product.id
            ? {
              ...item,
              quantity: item.quantity + quantity,
            }
            : item
        );
      }

      const newCartItem = {
        productId: product.id,
        userEmail: cleanEmail,
        quantity,
        cartNameContent: product.cartNameContent,
        cartJenisContent: product.cartJenisContent,
        price: product.price,
        badgeContent: product.badgeContent,
        image: product.image,
        addedAt: new Date().toISOString(),
      };

      return [...prev, newCartItem];
    });

    return {
      success: true,
      requireLogin: false,
      message: "Produk berhasil ditambahkan ke keranjang.",
    };
  };

  const increaseQuantity = (productId) => {
    setAllCartItems((prev) =>
      prev.map((item) =>
        item.userEmail === userEmail && item.productId === productId
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setAllCartItems((prev) =>
      prev.map((item) =>
        item.userEmail === userEmail && item.productId === productId
          ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setAllCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.userEmail === userEmail && item.productId === productId)
      )
    );
  };

  const removeCheckedOutCartItems = (checkoutItems = []) => {
    const checkoutProductIds = checkoutItems.map((item) =>
      Number(item.productId)
    );

    setAllCartItems((prev) =>
      prev.filter((cartItem) => {
        const sameUser = cartItem.userEmail === userEmail;
        const isCheckedOutItem = checkoutProductIds.includes(
          Number(cartItem.productId)
        );

        return !(sameUser && isCheckedOutItem);
      })
    );
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        removeCheckedOutCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function makeCart() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useContext(CartContext);
}