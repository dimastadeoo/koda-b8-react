import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useRef } from 'react';
import {
  fetchProducts,
  fetchProductById,
  fetchCategories,
  fetchMerks,
  fetchProductReviews,
  clearSelectedProduct,
} from '../../redux/reducers/productSlice';

export function useProducts() {
  const dispatch = useDispatch();
  const {
    products,
    categories,
    merks,
    selectedProduct,
    selectedProductReviews,
    loading,
    error,
  } = useSelector((state) => state.products);

  const fetchedRef = useRef(false); // flag untuk mencegah fetch ganda

  const loadProducts = useCallback(
    (params = {}) => {
      dispatch(fetchProducts(params));
    },
    [dispatch]
  );

  const loadProductDetail = useCallback(
    (id) => {
      dispatch(fetchProductById(id));
    },
    [dispatch]
  );

  const loadCategories = useCallback(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const loadMerks = useCallback(() => {
    dispatch(fetchMerks());
  }, [dispatch]);

  const loadReviews = useCallback(
    (productId, page = 1, limit = 10) => {
      dispatch(fetchProductReviews({ productId, page, limit }));
    },
    [dispatch]
  );

  const clearProduct = useCallback(() => {
    dispatch(clearSelectedProduct());
  }, [dispatch]);

  // 🔥 Hanya fetch sekali saat mount
  useEffect(() => {
    if (!fetchedRef.current) {
      fetchedRef.current = true;
      loadProducts();
      loadCategories();
      loadMerks();
    }
  }, [loadProducts, loadCategories, loadMerks]);

  const getProductById = useCallback(
    (id) => {
      return products.find((p) => p.id === Number(id));
    },
    [products]
  );

  const getProductsByIds = useCallback(
    (ids = []) => {
      return products.filter((p) => ids.includes(p.id));
    },
    [products]
  );

  return {
    products,
    categories,
    merks,
    selectedProduct,
    selectedProductReviews,
    loading,
    error,
    loadProducts,
    loadProductDetail,
    loadCategories,
    loadMerks,
    loadReviews,
    clearProduct,
    getProductById,
    getProductsByIds,
  };
}