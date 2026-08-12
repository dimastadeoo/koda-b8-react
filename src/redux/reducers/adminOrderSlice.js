import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetch } from '../../api/api';

// === Thunks ===

// Fetch all orders (admin)
export const fetchAdminOrders = createAsyncThunk(
  'adminOrders/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/admin/orders', { method: 'GET' });
      if (!response.ok) throw new Error(data.message || 'Gagal ambil pesanan');
      return data.results || [];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Update order status (admin)
export const updateOrderStatus = createAsyncThunk(
  'adminOrders/updateStatus',
  async ({ orderId, status }, { rejectWithValue }) => {
    try {
      const formData = new URLSearchParams();
      formData.append('status', status);
      const { response, data } = await apiFetch(`/admin/orders/${orderId}/status`, {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) throw new Error(data.message || 'Gagal update status');
      return data.results; // updated order
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// === Slice ===

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const adminOrderSlice = createSlice({
  name: 'adminOrders',
  initialState,
  reducers: {
    clearAdminOrders: (state) => {
      state.orders = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchAdminOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdminOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchAdminOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update status
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const index = state.orders.findIndex(o => o.id === action.payload.id);
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      });
  },
});

export const { clearAdminOrders } = adminOrderSlice.actions;
export default adminOrderSlice.reducer;