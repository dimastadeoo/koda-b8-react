import { createSlice } from '@reduxjs/toolkit';

// Helper format tanggal
const formatDateTime = () => {
  return new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date());
};

const initialState = {
  addresses: [],
  wishlist: [],
  orders: [],
};

const profileDataSlice = createSlice({
  name: 'profileData',
  initialState,
  reducers: {
    // --- Wishlist ---
    toggleWishlist: (state, action) => {
      const { userEmail, product } = action.payload;
      const exists = state.wishlist.some(
        (item) => item.userEmail === userEmail && item.productId === product.id
      );

      if (exists) {
        state.wishlist = state.wishlist.filter(
          (item) => !(item.userEmail === userEmail && item.productId === product.id)
        );
      } else {
        state.wishlist.push({
          id: crypto.randomUUID(),
          userEmail,
          productId: product.id,
          cartNameContent: product.cartNameContent,
          cartJenisContent: product.cartJenisContent,
          rateContent: product.rateContent,
          reviewContent: product.reviewContent,
          price: product.price,
          badgeContent: product.badgeContent,
          image: product.image,
          addedAt: new Date().toISOString(),
          addedAtText: formatDateTime(),
        });
      }
    },

    // --- Address ---
    addAddress: (state, action) => {
      const { userEmail, address } = action.payload;
      const isFirstAddress = state.addresses.filter(a => a.userEmail === userEmail).length === 0;
      state.addresses.push({
        id: crypto.randomUUID(),
        userEmail,
        label: address.label?.trim() || 'Rumah',
        receiverName: address.receiverName?.trim() || '',
        phone: address.phone?.trim() || '',
        detail: address.detail?.trim() || '',
        city: address.city?.trim() || '',
        postalCode: address.postalCode?.trim() || '',
        isPrimary: isFirstAddress,
        createdAt: new Date().toISOString(),
      });
    },

    removeAddress: (state, action) => {
      const { userEmail, addressId } = action.payload;
      state.addresses = state.addresses.filter(
        (item) => !(item.userEmail === userEmail && item.id === addressId)
      );
    },

    setPrimaryAddress: (state, action) => {
      const { userEmail, addressId } = action.payload;
      state.addresses = state.addresses.map((item) =>
        item.userEmail === userEmail
          ? { ...item, isPrimary: item.id === addressId }
          : item
      );
    },

    // --- Orders ---
    createOrder: (state, action) => {
      const { userEmail, source, items, total } = action.payload;
      const now = new Date();
      state.orders.push({
        id: `BM${Date.now()}`,
        userEmail,
        source,
        items,
        total,
        subtotal: total,
        shippingCost: 0,
        shipping: null,
        payment: null,
        status: 'Belum Selesai',
        checkoutStep: 'shipping',
        paymentStatus: 'unpaid',
        createdAt: now.toISOString(),
        createdAtText: formatDateTime(),
      });
    },

    updateOrder: (state, action) => {
      const { userEmail, orderId, updatedData } = action.payload;
      const index = state.orders.findIndex(
        (item) => item.userEmail === userEmail && item.id === orderId
      );
      if (index !== -1) {
        state.orders[index] = {
          ...state.orders[index],
          ...updatedData,
          updatedAt: new Date().toISOString(),
        };
      }
    },

    completeOrder: (state, action) => {
      const { userEmail, orderId } = action.payload;
      const index = state.orders.findIndex(
        (item) => item.userEmail === userEmail && item.id === orderId
      );
      if (index !== -1) {
        const now = new Date();
        state.orders[index] = {
          ...state.orders[index],
          status: 'Diproses',
          checkoutStep: 'success',
          paymentStatus: 'paid',
          paidAt: now.toISOString(),
          paidAtText: formatDateTime(),
        };
      }
    },

    // Reset semua data (misal logout)
    clearProfileData: (state) => {
      state.addresses = [];
      state.wishlist = [];
      state.orders = [];
    },
  },
});

export const {
  toggleWishlist,
  addAddress,
  removeAddress,
  setPrimaryAddress,
  createOrder,
  updateOrder,
  completeOrder,
  clearProfileData,
} = profileDataSlice.actions;

export default profileDataSlice.reducer;