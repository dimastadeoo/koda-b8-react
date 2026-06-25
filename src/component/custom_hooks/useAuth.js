import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../redux/store.js';
import {
  registerUser as registerAction,
  loginUser as loginAction,
  logoutUser as logoutAction,
} from '../../redux/reducers/userSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const currentUser = useSelector((state) => state.user.currentUser);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const registerUser = ({ name, email, password }) => {
    try {
      dispatch(registerAction({ name, email, password }));
      return { success: true, message: 'Registrasi berhasil. Silakan login.' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const loginUser = ({ email, password }) => {
    try {
      dispatch(loginAction({ email, password }));
      // Ambil user terbaru dari store
      const state = store.getState();
      const user = state.user.currentUser;
      return { success: true, message: 'Login berhasil.', user };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  const logoutUser = () => {
    try {
      dispatch(logoutAction());
      return { success: true, message: 'Logout berhasil.' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  return {
    users,
    currentUser,
    isLoggedIn,
    registerUser,
    loginUser,
    logoutUser,
  };
}