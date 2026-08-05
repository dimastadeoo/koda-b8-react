import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetch } from '../../api/api.js';

// === Thunks ===

// Ambil profile
export const fetchProfile = createAsyncThunk(
  'profile/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/profile/', { method: 'GET' });
      if (!response.ok) {
        return rejectWithValue(data.message || 'Gagal mengambil profile');
      }
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Update profile (name, gender, place_birth, date_birth, no_hp)
export const updateProfile = createAsyncThunk(
  'profile/update',
  async (profileData, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/profile/', {
        method: 'PATCH',
        body: JSON.stringify(profileData),
      });
      if (!response.ok) {
        return rejectWithValue(data.message || 'Gagal update profile');
      }
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Upload foto profile
export const uploadProfilePicture = createAsyncThunk(
  'profile/uploadPicture',
  async (file, { rejectWithValue }) => {
      try {
          const formData = new FormData();
          formData.append('picture', file); // name harus 'picture' sesuai backend

          const { response, data } = await apiFetch('/profile/picture', {
              method: 'PATCH',
              body: formData,
              // TIDAK PERLU set headers lagi karena apiFetch sudah handle
          });

          if (!response.ok) {
              return rejectWithValue(data.message || 'Gagal upload foto');
          }
          return data.results; // { picture: 'url' }
      } catch (error) {
          return rejectWithValue(error.message);
      }
  }
);

// Update email
export const updateEmail = createAsyncThunk(
  'profile/updateEmail',
  async (email, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/profile/email', {
        method: 'PATCH',
        body: JSON.stringify({ email }),
      });
      if (!response.ok) {
        return rejectWithValue(data.message || 'Gagal update email');
      }
      return data.results; // { id, email }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Update password
export const updatePassword = createAsyncThunk(
  'profile/updatePassword',
  async ({ currentPassword, newPassword }, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/profile/password', {
        method: 'PATCH',
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      if (!response.ok) {
        return rejectWithValue(data.message || 'Gagal update password');
      }
      return data.message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// === Slice ===
const initialState = {
  profile: null,
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.profile = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // update
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // upload picture
      .addCase(uploadProfilePicture.fulfilled, (state, action) => {
        if (state.profile) {
          state.profile.picture = action.payload.picture;
        }
      })
      // update email
      .addCase(updateEmail.fulfilled, (state, action) => {
        if (state.profile) {
          state.profile.email = action.payload.email;
        }
      });
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;