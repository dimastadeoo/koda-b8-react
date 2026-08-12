import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

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

  const {
    items = [],
    loading,
    error,
  } = useSelector((state) => state.wishlist);

  const loadWishlist = useCallback(() => {
    if (!isLoggedIn) return;

    dispatch(fetchWishlist());
  }, [dispatch, isLoggedIn]);

  const addToWishlist = useCallback(
    (productId) => {
      if (!isLoggedIn || !productId) return;

      return dispatch(addWishlist(productId));
    },
    [dispatch, isLoggedIn]
  );

  const removeFromWishlist = useCallback(
    (productId) => {
      if (!isLoggedIn || !productId) return;

      return dispatch(removeWishlist(productId));
    },
    [dispatch, isLoggedIn]
  );

  const isWishlisted = useCallback(
    (productId) => {
      return items.some(
        (item) =>
          Number(item.id_product) === Number(productId)
      );
    },
    [items]
  );

  const toggleWishlist = useCallback(
    (product) => {
      const productId =
        product?.id_product ??
        product?.id ??
        product?.productId;

      if (!productId) return;

      if (isWishlisted(productId)) {
        return removeFromWishlist(productId);
      }

      return addToWishlist(productId);
    },
    [
      isWishlisted,
      removeFromWishlist,
      addToWishlist,
    ]
  );

  const clear = useCallback(() => {
    dispatch(clearWishlist());
  }, [dispatch]);

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