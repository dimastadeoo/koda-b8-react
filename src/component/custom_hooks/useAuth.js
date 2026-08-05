// src/custom_hooks/useAuth.js
import { useDispatch, useSelector } from 'react-redux';
import {
  registerUser as registerAction,
  loginUser as loginAction,
  logoutUser as logoutAction,
  clearMessages,
} from '../../redux/reducers/userSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);
  const registerMessage = useSelector((state) => state.user.registerMessage);
  const loginMessage = useSelector((state) => state.user.loginMessage);

  const registerUser = async ({ name, email, password }) => {
    try {
      const result = await dispatch(registerAction({ name, email, password })).unwrap();
      // result = { success: true, message: "...", results: { name, email } }
      // Ambil message dari result
      return {
        success: true,
        message: result.message || 'Registrasi berhasil. Silakan login.',
      };
    } catch (err) {
      return {
        success: false,
        message: err || 'Registrasi gagal',
      };
    }
  };

  const loginUser = async ({ email, password }) => {
    try {
      const result = await dispatch(loginAction({ email, password })).unwrap();
      // result = { token, user, message }
      return {
        success: true,
        message: result.message,
      };
    } catch (err) {
      return {
        success: false,
        message: err,
      };
    }
  };

  const logoutUser = () => {
    dispatch(logoutAction());
    return { success: true, message: 'Logout berhasil.' };
  };

  const clearAuthMessages = () => {
    dispatch(clearMessages());
  };

  return {
    user,
    token,
    isLoggedIn,
    isLoading,
    error,
    registerMessage,
    loginMessage,
    registerUser,
    loginUser,
    logoutUser,
    clearAuthMessages,
  };
}