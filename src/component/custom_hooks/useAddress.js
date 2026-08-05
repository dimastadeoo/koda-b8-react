// src/custom_hooks/useAddress.js
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import {
  fetchAddresses,
  createAddress,
  updateAddress,
  deleteAddress,
  setPrimaryAddress,
  clearAddresses,
} from '../../redux/reducers/addressSlice';
import { useAuth } from './useAuth';

export function useAddress() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const { addresses, loading, error } = useSelector((state) => state.address);

  const loadAddresses = useCallback(() => {
    return dispatch(fetchAddresses());
  }, [dispatch]);

  const addAddress = (data) => dispatch(createAddress(data));
  const updateAddressData = (id, data) => dispatch(updateAddress({ id, ...data }));
  const removeAddress = (id) => dispatch(deleteAddress(id));
  const setPrimary = (id) => dispatch(setPrimaryAddress(id));
  const clear = () => dispatch(clearAddresses());

  useEffect(() => {
    if (isLoggedIn) {
      loadAddresses();
    }
  }, [isLoggedIn, loadAddresses]);

  return {
    addresses,
    loading,
    error,
    loadAddresses,
    addAddress,
    updateAddress: updateAddressData,
    removeAddress,
    setPrimary,
    clear,
  };
}