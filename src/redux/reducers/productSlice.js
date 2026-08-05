import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetch } from '../../api/api.js';

// === Thunks ===

// Get all products with pagination & filters (ambil semua data dengan limit besar)
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (params = {}) => {
    const { page = 1, limit = 100 } = params; // ambil banyak
    const query = new URLSearchParams({ page, limit }).toString();
    const { response, data } = await apiFetch(`/products?${query}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch products');
    }
    return data.results; // { data: [...], pagination: {...} }
  }
);

// Get product by ID (dengan images, reviews, rating)
export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (id) => {
    const { response, data } = await apiFetch(`/products/${id}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(data.message || 'Product not found');
    }
    return data.results; // product detail
  }
);

// Get categories
export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const { response, data } = await apiFetch('/products/categories', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch categories');
    }
    return data.results; // array categories
  }
);

// Get merks
export const fetchMerks = createAsyncThunk(
  'products/fetchMerks',
  async () => {
    const { response, data } = await apiFetch('/products/merks', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch merks');
    }
    return data.results; // array merks
  }
);

// Get product reviews (for detail page)
export const fetchProductReviews = createAsyncThunk(
  'products/fetchReviews',
  async ({ productId, page = 1, limit = 10 }) => {
    const query = new URLSearchParams({ page, limit }).toString();
    const { response, data } = await apiFetch(`/products/${productId}/reviews?${query}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch reviews');
    }
    return data.results; // { reviews, stats, pagination }
  }
);

// === Slice ===

const initialState = {
  products: [],
  categories: [],
  merks: [],
  selectedProduct: null,
  selectedProductReviews: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
      state.selectedProductReviews = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
        // Jika ingin simpan pagination juga, bisa tambahkan state tambahan
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Fetch product by id
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.selectedProduct = null;
      })
      // Fetch categories
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      // Fetch merks
      .addCase(fetchMerks.fulfilled, (state, action) => {
        state.merks = action.payload;
      })
      // Fetch reviews
      .addCase(fetchProductReviews.fulfilled, (state, action) => {
        state.selectedProductReviews = action.payload;
      });
  },
});

export const { clearSelectedProduct } = productSlice.actions;
export default productSlice.reducer;