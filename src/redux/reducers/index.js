// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userSlice.js';
import profileReducer from './profileSlice.js';
import profileDataReducer from './profileDataSlice.js'
import productReducer from './productSlice.js'
import addressReduceer from './addressSlice.js'
import wishlistReducer from './wishlistSlice.js'
import aadminReducer from './adminSlice.js'

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  profileData: profileDataReducer,
  products: productReducer,
  address: addressReduceer,
  wishlist: wishlistReducer,
  admin: aadminReducer,
  // tambahkan reducer lain di sini jika nanti ada
});

export default rootReducer;