import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import {
  fetchWishlist,
  addWishlist,
  removeWishlist,
  clearWishlist,
} from '../../redux/reducers/wishlistSlice';
import { useAuth } from './useAuth';

export function useWishlist() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const { items, loading, error } = useSelector((state) => state.wishlist);

  const loadWishlist = useCallback(() => {
    if (isLoggedIn) {
      dispatch(fetchWishlist());
    }
  }, [dispatch, isLoggedIn]);

  const addToWishlist = useCallback(
    (productId) => dispatch(addWishlist(productId)),
    [dispatch]
  );

  const removeFromWishlist = useCallback(
    (productId) => dispatch(removeWishlist(productId)),
    [dispatch]
  );

  const clear = useCallback(() => dispatch(clearWishlist()), [dispatch]);

  // Cek apakah produk ada di wishlist (berdasarkan productId)
  const isWishlisted = useCallback(
    (productId) => {
      return items.some((item) => Number(item.id_product) === Number(productId));
    },
    [items]
  );

  // Toggle wishlist: tambah jika belum ada, hapus jika sudah ada
  const toggleWishlist = useCallback(
    (product) => {
      const productId = product.id || product.productId;
      if (!productId) return;
      if (isWishlisted(productId)) {
        removeFromWishlist(productId);
      } else {
        addToWishlist(productId);
      }
    },
    [isWishlisted, addToWishlist, removeFromWishlist]
  );

  // Auto fetch saat login
  useEffect(() => {
    if (isLoggedIn) {
      loadWishlist();
    }
  }, [isLoggedIn, loadWishlist]);

  return {
    wishlist: items,
    loading,
    error,
    loadWishlist,
    addToWishlist,
    removeFromWishlist,
    isWishlisted,
    toggleWishlist,
    clear,
  };
}