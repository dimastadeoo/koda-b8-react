import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetch } from '../../api/api.js';

// === Thunks ===

// Ambil semua alamat user
export const fetchAddresses = createAsyncThunk(
  'address/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/addresses', { method: 'GET' });
      if (!response.ok) throw new Error(data.message || 'Gagal mengambil alamat');
      return data.results; // array of addresses
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Tambah alamat baru
export const createAddress = createAsyncThunk(
  'address/create',
  async (addressData, { rejectWithValue }) => {
    try {
      const formData = new URLSearchParams();
      Object.keys(addressData).forEach(key => formData.append(key, addressData[key]));
      const { response, data } = await apiFetch('/addresses', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error(data.message || 'Gagal tambah alamat');
      return data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Update alamat
export const updateAddress = createAsyncThunk(
  'address/update',
  async ({ id, ...data }, { rejectWithValue }) => {
    try {
      const formData = new URLSearchParams();
      Object.keys(data).forEach(key => formData.append(key, data[key]));
      const { response, data: resData } = await apiFetch(`/addresses/${id}`, {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) throw new Error(resData.message || 'Gagal update alamat');
      return resData.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Hapus alamat
export const deleteAddress = createAsyncThunk(
  'address/delete',
  async (id, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch(`/addresses/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error(data.message || 'Gagal hapus alamat');
      return id; // return deleted id
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Set alamat sebagai primary
export const setPrimaryAddress = createAsyncThunk(
  'address/setPrimary',
  async (id, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch(`/addresses/${id}/primary`, { method: 'PATCH' });
      if (!response.ok) throw new Error(data.message || 'Gagal set primary');
      return data.results; // updated address
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// === Slice ===
const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    clearAddresses: (state) => {
      state.addresses = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // create
      .addCase(createAddress.fulfilled, (state, action) => {
        state.addresses.push(action.payload);
      })
      // update
      .addCase(updateAddress.fulfilled, (state, action) => {
        const index = state.addresses.findIndex(a => a.id === action.payload.id);
        if (index !== -1) state.addresses[index] = action.payload;
      })
      // delete
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.addresses = state.addresses.filter(a => a.id !== action.payload);
      })
      // set primary
      .addCase(setPrimaryAddress.fulfilled, (state, action) => {
        const updated = action.payload;
        state.addresses = state.addresses.map(a =>
          a.id === updated.id ? updated : { ...a, is_primary: false }
        );
      });
  }
});

export const { clearAddresses } = addressSlice.actions;
export default addressSlice.reducer;