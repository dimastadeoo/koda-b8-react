import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import {
  fetchUsers,
  fetchRoles,
  createUser,
  updateUser,
  deleteUser,
  clearAdminError,
  resetAdminState,
} from '../../redux/reducers/adminSlice';
import { useAuth } from './useAuth';

export function useAdmin() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const { users, roles, usersLoading, error } = useSelector((state) => state.admin);

  const loadUsers = () => dispatch(fetchUsers());
  const loadRoles = () => dispatch(fetchRoles());
  const addUser = (data) => dispatch(createUser(data));
  const editUser = (userId, data) => dispatch(updateUser({ userId, data }));
  const removeUser = (userId) => dispatch(deleteUser(userId));
  const clearError = () => dispatch(clearAdminError());
  const reset = () => dispatch(resetAdminState());

const fetchedRef = useRef(false);

useEffect(() => {
  if (isLoggedIn && !fetchedRef.current) {
    fetchedRef.current = true;
    dispatch(fetchUsers());
    dispatch(fetchRoles());
  }
}, [isLoggedIn, dispatch]);

  return {
    users,
    roles,
    usersLoading,
    error,
    loadUsers,
    loadRoles,
    addUser,
    editUser,
    removeUser,
    clearError,
    reset,
  };
}