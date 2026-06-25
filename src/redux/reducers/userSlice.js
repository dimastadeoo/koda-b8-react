// src/redux/reducers/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Helper encode/decode (sama dengan yang di AuthContext)
const encodeBase64 = (value) => btoa(unescape(encodeURIComponent(value)));
// const decodeBase64 = (value) => decodeURIComponent(escape(atob(value)));

// Helper waktu
const getNowDateTime = () => {
  const date = new Date();
  return {
    iso: date.toISOString(),
    local: new Intl.DateTimeFormat('id-ID', {
      dateStyle: 'full',
      timeStyle: 'medium',
    }).format(date),
  };
};

// State awal
const initialState = {
  users: [],
  isLoggedIn: false,
  currentUser: null, // objek user yang sedang login (tanpa password)
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // ---------- REGISTER ----------
    registerUser: (state, action) => {
      const { name, email, password } = action.payload;
      const cleanName = name.trim();
      const cleanEmail = email.trim().toLowerCase();

      // Cek duplikat email
      const existing = state.users.find((u) => u.email === cleanEmail);
      if (existing) {
        throw new Error('Email sudah terdaftar. Silakan gunakan email lain.');
      }

      const now = getNowDateTime();
      const newUser = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).substring(2),
        name: cleanName,
        email: cleanEmail,
        password: encodeBase64(password),
        role: 'user',
        status: 'active',
        registeredAt: now.iso,
        registeredAtText: now.local,
        lastLoginAt: null,
        lastLoginAtText: null,
      };

      state.users.push(newUser);
      // Registrasi tidak otomatis login
    },

    // ---------- LOGIN ----------
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const cleanEmail = email.trim().toLowerCase();
      const encodedPassword = encodeBase64(password);

      const user = state.users.find(
        (u) => u.email === cleanEmail && u.password === encodedPassword
      );

      if (!user) {
        throw new Error('Email atau kata sandi salah.');
      }

      // Update lastLogin
      const now = getNowDateTime();
      user.lastLoginAt = now.iso;
      user.lastLoginAtText = now.local;

      // Set currentUser (tanpa password)
      const { password: _, ...userWithoutPassword } = user;
      state.currentUser = userWithoutPassword;
      state.isLoggedIn = true;
    },

    // ---------- LOGOUT ----------
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.currentUser = null;
    },

    // ---------- CRUD tambahan (opsional) ----------
    updateUser: (state, action) => {
      const { id, name, email, password } = action.payload;
      const user = state.users.find((u) => u.id === id);
      if (user) {
        if (name) user.name = name.trim();
        if (email) user.email = email.trim().toLowerCase();
        if (password) user.password = encodeBase64(password);
      }
    },

    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter((u) => u.id !== userId);
      if (state.currentUser?.id === userId) {
        state.isLoggedIn = false;
        state.currentUser = null;
      }
    },

    setUsers: (state, action) => {
      state.users = action.payload;
      state.isLoggedIn = false;
      state.currentUser = null;
    },

    clearUsers: (state) => {
      state.users = [];
      state.isLoggedIn = false;
      state.currentUser = null;
    },
  },
});

// Export actions
export const {
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
  setUsers,
  clearUsers,
} = userSlice.actions;

// Export reducer
export default userSlice.reducer;