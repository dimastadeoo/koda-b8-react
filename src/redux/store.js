import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // localStorage
import rootReducer from './reducers';

// Konfigurasi persist
const persistConfig = {
  key: 'root',           // key untuk local storage
  storage,               // gunakan local storage
  // whitelist: ['user'], // jika hanya ingin menyimpan reducer 'user' saja (opsional)
  // blacklist: []        // jika ingin mengecualikan reducer tertentu
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Buat store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

// Buat persistor untuk digunakan di komponen utama
export const persistor = persistStore(store);