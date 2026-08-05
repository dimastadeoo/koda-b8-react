import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetch } from '../../api/api.js';

// === Thunks ===

export const fetchWishlist = createAsyncThunk(
  'wishlist/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/wishlist', { method: 'GET' });
      if (!response.ok) throw new Error(data.message || 'Gagal ambil wishlist');
      return data.results; // array produk
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addWishlist = createAsyncThunk(
  'wishlist/add',
  async (productId, { rejectWithValue }) => {
    try {
      const formData = new URLSearchParams();
      formData.append('productId', productId);
      const { response, data } = await apiFetch('/wishlist', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error(data.message || 'Gagal tambah wishlist');
      return data.results; // product added
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeWishlist = createAsyncThunk(
  'wishlist/remove',
  async (productId, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch(`/wishlist/${productId}`, { method: 'DELETE' });
      if (!response.ok) throw new Error(data.message || 'Gagal hapus wishlist');
      return productId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// === Slice ===
const initialState = {
  items: [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    clearWishlist: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id_product !== action.payload);
      });
  }
});

export const { clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;