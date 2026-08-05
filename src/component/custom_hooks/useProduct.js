import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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

  // Fetch all products on mount (optional: bisa dipanggil manual)
  const loadProducts = (params = {}) => {
    dispatch(fetchProducts(params));
  };

  const loadProductDetail = async(id) => {
    try {
        await dispatch(fetchProductById(id)).unwrap();
    } catch (err) {
        console.error('Error fetching product detail:', err);
    }
  };

  const loadCategories = () => {
    dispatch(fetchCategories());
  };

  const loadMerks = () => {
    dispatch(fetchMerks());
  };

  const loadReviews = (productId, page = 1, limit = 10) => {
    dispatch(fetchProductReviews({ productId, page, limit }));
  };

  const clearProduct = () => {
    dispatch(clearSelectedProduct());
  };

  // Auto fetch on mount (optional)
  useEffect(() => {
    loadProducts();
    loadCategories();
    loadMerks();
  }, []);

  // Helper: get product by id from local state (sync)
  const getProductById = (id) => {
    return products.find((p) => p.id === Number(id));
  };

  // Helper: get products by ids (for recommendations)
  const getProductsByIds = (ids = []) => {
    return products.filter((p) => ids.includes(p.id));
  };

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