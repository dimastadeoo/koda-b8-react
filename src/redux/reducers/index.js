// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userSlice.js';
import profileReducer from './profileSlice.js';
import profileDataReducer from './profileDataSlice.js'

const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  profileData: profileDataReducer,
  // tambahkan reducer lain di sini jika nanti ada
});

export default rootReducer;