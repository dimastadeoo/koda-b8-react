import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetch } from '../../api/api';

// ======================================================
// THUNKS - USERS
// ======================================================

// Fetch all users
export const fetchUsers = createAsyncThunk(
  'admin/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/admin/users', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch users');
      }

      return data.results || [];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Fetch roles
export const fetchRoles = createAsyncThunk(
  'admin/fetchRoles',
  async (_, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/admin/roles', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch roles');
      }

      return data.results || [];
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Create user
export const createUser = createAsyncThunk(
  'admin/createUser',
  async (userData, { rejectWithValue }) => {
    try {
      const formData = new URLSearchParams();

      Object.keys(userData).forEach((key) => {
        if (userData[key] !== undefined && userData[key] !== null) {
          formData.append(key, userData[key]);
        }
      });

      const { response, data } = await apiFetch('/admin/users', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create user');
      }

      return data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Update user
export const updateUser = createAsyncThunk(
  'admin/updateUser',
  async ({ userId, userData }, { rejectWithValue }) => {
    try {
      const formData = new URLSearchParams();

      Object.keys(userData).forEach((key) => {
        if (userData[key] !== undefined && userData[key] !== null) {
          formData.append(key, userData[key]);
        }
      });

      const { response, data } = await apiFetch(
        `/admin/users/${userId}`,
        {
          method: 'PATCH',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update user');
      }

      return data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Delete user
export const deleteUser = createAsyncThunk(
  'admin/deleteUser',
  async (userId, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch(
        `/admin/users/${userId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete user');
      }

      return userId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ======================================================
// THUNKS - PRODUCTS
// ======================================================

// Create product with images
export const createProduct = createAsyncThunk(
  'admin/createProduct',
  async (formData, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch('/admin/products', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(data.message || 'Gagal tambah produk');
      }

      return data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Update product
export const updateProduct = createAsyncThunk(
  'admin/updateProduct',
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const formData = new URLSearchParams();

      Object.keys(productData).forEach((key) => {
        if (
          productData[key] !== undefined &&
          productData[key] !== null
        ) {
          formData.append(key, productData[key]);
        }
      });

      const { response, data } = await apiFetch(
        `/admin/products/${id}`,
        {
          method: 'PATCH',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(data.message || 'Gagal update produk');
      }

      return data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Delete product
export const deleteProduct = createAsyncThunk(
  'admin/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch(
        `/admin/products/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error(data.message || 'Gagal hapus produk');
      }

      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Add images to product
export const addProductImages = createAsyncThunk(
  'admin/addImages',
  async ({ productId, formData }, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch(
        `/admin/products/${productId}/images`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(data.message || 'Gagal tambah gambar');
      }

      return data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Delete product image
export const deleteProductImage = createAsyncThunk(
  'admin/deleteImageProduct',
  async (imageId, { rejectWithValue }) => {
    try {
      const { response, data } = await apiFetch(
        `/admin/products/images/${imageId}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error(data.message || 'Gagal hapus gambar');
      }

      return imageId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ======================================================
// INITIAL STATE
// ======================================================

const initialState = {
  users: [],
  roles: [],
  products: [],

  usersLoading: false,
  productsLoading: false,

  error: null,
};

// ======================================================
// SLICE
// ======================================================

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    clearAdminError: (state) => {
      state.error = null;
    },
    resetAdminState: (state) => {
      state.users = [];
      state.roles = [];
      state.products = [];

      state.usersLoading = false;
      state.productsLoading = false;
      state.error = null;
    },
    clearAdminProducts: (state) => {
      state.products = [];
      state.productsLoading = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // ==================================================
      // USERS
      // ==================================================
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.usersLoading = true;
        state.error = null;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersLoading = false;
        state.users = action.payload;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.usersLoading = false;
        state.error = action.payload;
      })

      // Fetch roles
      .addCase(fetchRoles.pending, (state) => {
        state.usersLoading = true;
        state.error = null;
      })

      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.usersLoading = false;
        state.roles = action.payload;
      })

      .addCase(fetchRoles.rejected, (state, action) => {
        state.usersLoading = false;
        state.error = action.payload;
      })

      // Create user
      .addCase(createUser.pending, (state) => {
        state.usersLoading = true;
        state.error = null;
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.usersLoading = false;
        state.users.unshift(action.payload);
      })

      .addCase(createUser.rejected, (state, action) => {
        state.usersLoading = false;
        state.error = action.payload;
      })

      // Update user
      .addCase(updateUser.pending, (state) => {
        state.usersLoading = true;
        state.error = null;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.usersLoading = false;

        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );

        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.usersLoading = false;
        state.error = action.payload;
      })

      // Delete user
      .addCase(deleteUser.pending, (state) => {
        state.usersLoading = true;
        state.error = null;
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.usersLoading = false;

        state.users = state.users.filter(
          (user) => user.id !== action.payload
        );
      })

      .addCase(deleteUser.rejected, (state, action) => {
        state.usersLoading = false;
        state.error = action.payload;
      })

      // ==================================================
      // PRODUCTS
      // ==================================================
      // Create product
      .addCase(createProduct.pending, (state) => {
        state.productsLoading = true;
        state.error = null;
      })

      .addCase(createProduct.fulfilled, (state, action) => {
        state.productsLoading = false;

        state.products.unshift(action.payload);
      })

      .addCase(createProduct.rejected, (state, action) => {
        state.productsLoading = false;
        state.error = action.payload;
      })

      // Update product
      .addCase(updateProduct.pending, (state) => {
        state.productsLoading = true;
        state.error = null;
      })

      .addCase(updateProduct.fulfilled, (state, action) => {
        state.productsLoading = false;

        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );

        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })

      .addCase(updateProduct.rejected, (state, action) => {
        state.productsLoading = false;
        state.error = action.payload;
      })

      // Delete product
      .addCase(deleteProduct.pending, (state) => {
        state.productsLoading = true;
        state.error = null;
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.productsLoading = false;

        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })

      .addCase(deleteProduct.rejected, (state, action) => {
        state.productsLoading = false;
        state.error = action.payload;
      })

      // ==================================================
      // PRODUCT IMAGES
      // ==================================================

      // Add product images
      .addCase(addProductImages.pending, (state) => {
        state.productsLoading = true;
        state.error = null;
      })

      .addCase(addProductImages.fulfilled, (state, action) => {
        state.productsLoading = false;

        const updatedProduct = action.payload;

        const index = state.products.findIndex(
          (product) => product.id === updatedProduct.id
        );

        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })

      .addCase(addProductImages.rejected, (state, action) => {
        state.productsLoading = false;
        state.error = action.payload;
      })

      // Delete product image
      .addCase(deleteProductImage.pending, (state) => {
        state.productsLoading = true;
        state.error = null;
      })

      .addCase(deleteProductImage.fulfilled, (state, action) => {
        state.productsLoading = false;

        const imageId = action.payload;

        state.products.forEach((product) => {
          if (product.images) {
            product.images = product.images.filter(
              (image) => image.id !== imageId
            );
          }
        });
      })

      .addCase(deleteProductImage.rejected, (state, action) => {
        state.productsLoading = false;
        state.error = action.payload;
      });
  },
});

// ======================================================
// EXPORT
// ======================================================

export const {
  clearAdminError,
  resetAdminState,
  clearAdminProducts,
} = adminSlice.actions;

export default adminSlice.reducer;