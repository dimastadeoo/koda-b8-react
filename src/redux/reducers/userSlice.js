import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetch } from '../../api/api.js';

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        return rejectWithValue(data.message || 'Registrasi gagal');
      }
      return data; // { success, message, results: { name, email } }
    } catch (error) {
      return rejectWithValue(error.message || 'Terjadi kesalahan jaringan');
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        return rejectWithValue(data.message || 'Login gagal');
      }
      const { token, user } = data.results || {};
      if (!token || !user) {
        return rejectWithValue('Respons login tidak lengkap');
      }
      localStorage.setItem('token', token);
      return { token, user, message: data.message || 'Login berhasil' };
    } catch (error) {
      return rejectWithValue(error.message || 'Terjadi kesalahan jaringan');
    }
  }
);

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  registerMessage: null,
  loginMessage: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
      state.registerMessage = null;
      state.loginMessage = null;
      
    },
    clearMessages: (state) => {
      state.registerMessage = null;
      state.loginMessage = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.registerMessage = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registerMessage = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.loginMessage = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.loginMessage = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutUser, clearMessages } = userSlice.actions;
export default userSlice.reducer;