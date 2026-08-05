// src/custom_hooks/useProfile.js
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchProfile,
  updateProfile,
  uploadProfilePicture,
  updateEmail,
  updatePassword,
  clearProfile,
} from '../../redux/reducers/profileSlice';

export function useProfile() {
  const dispatch = useDispatch();
  const { profile, isLoading, error } = useSelector((state) => state.profile);
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (isLoggedIn && !profile) {
      dispatch(fetchProfile());
    }
  }, [isLoggedIn, profile, dispatch]);

  const update = async (data) => {
    try {
      const result = await dispatch(updateProfile(data)).unwrap();
      return { success: true, message: 'Profile updated', data: result };
    } catch (err) {
      return { success: false, message: err };
    }
  };

  const uploadPicture = async (file) => {
    try {
      const result = await dispatch(uploadProfilePicture(file)).unwrap();
      return { success: true, message: 'Foto berhasil diupload', data: result };
    } catch (err) {
      return { success: false, message: err };
    }
  };

  const changeEmail = async (email) => {
    try {
      const result = await dispatch(updateEmail(email)).unwrap();
      return { success: true, message: 'Email updated', data: result };
    } catch (err) {
      return { success: false, message: err };
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      const result = await dispatch(updatePassword({ currentPassword, newPassword })).unwrap();
      return { success: true, message: result };
    } catch (err) {
      return { success: false, message: err };
    }
  };

  const clear = () => {
    dispatch(clearProfile());
  };

  return {
    profile,
    isLoading,
    error,
    update,
    uploadPicture,
    changeEmail,
    changePassword,
    clear,
  };
}