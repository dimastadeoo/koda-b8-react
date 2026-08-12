import { useDispatch, useSelector } from 'react-redux';
import {useCallback} from 'react'
import {
  fetchAdminOrders,
  updateOrderStatus,
  clearAdminOrders,
} from '../../redux/reducers/adminOrderSlice';

export function useAdminOrders() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.adminOrders);

  const loadOrders = useCallback(
    (params = {}) => {
      dispatch(fetchAdminOrders(params));
    },
    [dispatch]
  );
  const updateStatus = (orderId, status) => dispatch(updateOrderStatus({ orderId, status }));
  const clear = () => dispatch(clearAdminOrders());

  return {
    orders,
    loading,
    error,
    loadOrders,
    updateStatus,
    clear,
  };
}