// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // tambahkan reducer lain di sini jika nanti ada
});

export default rootReducer;