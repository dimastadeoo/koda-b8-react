// src/custom_hooks/useCheckout.js
import { useState, useCallback, useEffect } from 'react';
import { useAuth } from './useAuth';
import { apiFetch } from '../../api/api';

export function useCheckout() {
  const { isLoggedIn } = useAuth();
  const [order, setOrder] = useState(null);
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shippingMethods, setShippingMethods] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
   
  //fetch all orders  
  const fetchOrders = useCallback(async () => {
    if (!isLoggedIn) return;
    setLoading(true);
    setError(null);
    try {
      const { response, data } = await apiFetch('/orders', { method: 'GET' });
      if (!response.ok) throw new Error(data.message || 'Failed to fetch orders');
      setOrders(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Fetch shipping methods
  const fetchShippingMethods = useCallback(async () => {
    if (!isLoggedIn) throw new Error('You must be logged in');
    setLoading(true);
    try {
      const { response, data } = await apiFetch('/checkout/shipping-methods', { method: 'GET' });
      if (!response.ok) throw new Error(data.message || 'Failed to fetch shipping methods');
      setShippingMethods(data.results || []);
      return data.results;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Fetch payment methods
  const fetchPaymentMethods = useCallback(async () => {
    if (!isLoggedIn) throw new Error('You must be logged in');
    setLoading(true);
    try {
      const { response, data } = await apiFetch('/checkout/payment-methods', { method: 'GET' });
      if (!response.ok) throw new Error(data.message || 'Failed to fetch payment methods');
      setPaymentMethods(data.results || []);
      return data.results;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Create order from cart
  const createOrder = useCallback(async () => {
    if (!isLoggedIn) throw new Error('You must be logged in');
    setLoading(true);
    setError(null);
    try {
      const { response, data } = await apiFetch('/orders', { method: 'POST' });
      if (!response.ok) throw new Error(data.message || 'Failed to create order');
      const newOrder = data.results;
      setOrder(newOrder);
      return newOrder;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Fetch order by ID
  const fetchOrder = useCallback(async (orderId) => {
    if (!isLoggedIn) throw new Error('You must be logged in');
    setLoading(true);
    setError(null);
    try {
      const { response, data } = await apiFetch(`/orders/${orderId}`, { method: 'GET' });
      if (!response.ok) throw new Error(data.message || 'Failed to fetch order');
      const orderData = data.results;
      setOrder(orderData);
      return orderData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Update address
  const updateAddress = useCallback(async (orderId, address) => {
    if (!isLoggedIn) throw new Error('You must be logged in');
    setLoading(true);
    setError(null);
    try {
      const formData = new URLSearchParams();
      formData.append('address', address);
      const { response, data } = await apiFetch(`/orders/${orderId}/address`, {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) throw new Error(data.message || 'Failed to update address');
      const updatedOrder = data.results;
      setOrder(updatedOrder);
      return updatedOrder;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Update shipping
  const updateShipping = useCallback(async (orderId, shippingId) => {
    if (!isLoggedIn) throw new Error('You must be logged in');
    setLoading(true);
    setError(null);
    try {
      const formData = new URLSearchParams();
      formData.append('shippingId', shippingId);
      const { response, data } = await apiFetch(`/orders/${orderId}/shipping`, {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) throw new Error(data.message || 'Failed to update shipping');
      const updatedOrder = data.results;
      setOrder(updatedOrder);
      return updatedOrder;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Update payment
  const updatePayment = useCallback(async (orderId, paymentId) => {
    if (!isLoggedIn) throw new Error('You must be logged in');
    setLoading(true);
    setError(null);
    try {
      const formData = new URLSearchParams();
      formData.append('paymentId', paymentId);
      const { response, data } = await apiFetch(`/orders/${orderId}/payment`, {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) throw new Error(data.message || 'Failed to update payment');
      const updatedOrder = data.results;
      setOrder(updatedOrder);
      return updatedOrder;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Apply voucher
  const applyVoucher = useCallback(async (orderId, voucherCode) => {
    if (!isLoggedIn) throw new Error('You must be logged in');
    setLoading(true);
    setError(null);
    try {
      const formData = new URLSearchParams();
      formData.append('voucherCode', voucherCode);
      const { response, data } = await apiFetch(`/orders/${orderId}/voucher`, {
        method: 'PATCH',
        body: formData,
      });
      if (!response.ok) throw new Error(data.message || 'Failed to apply voucher');
      const updatedOrder = data.results;
      setOrder(updatedOrder);
      return updatedOrder;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Complete order
  const completeOrder = useCallback(async (orderId) => {
    if (!isLoggedIn) throw new Error('You must be logged in');
    setLoading(true);
    setError(null);
    try {
      const { response, data } = await apiFetch(`/orders/${orderId}/complete`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error(data.message || 'Failed to complete order');
      const completedOrder = data.results;
      setOrder(completedOrder);
      return completedOrder;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn]);

  // Cancel order
  const cancelOrder = useCallback(async (orderId) => {
    if (!isLoggedIn) throw new Error('Not logged in');
    setLoading(true);
    setError(null);
    try {
      const { response, data } = await apiFetch(`/orders/${orderId}/cancel`, {
        method: 'PATCH',
      });
      if (!response.ok) throw new Error(data.message || 'Failed to cancel order');
      // Refresh orders after cancel
      await fetchOrders();
      return data.results;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isLoggedIn, fetchOrders]);

    // Auto fetch when logged in
  useEffect(() => {
    setTimeout(()=>{
        if (isLoggedIn) {
          fetchOrders();
        }
    })
  }, [isLoggedIn, fetchOrders]);

  // Clear order
  const clearOrder = useCallback(() => {
    setOrder(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    order,
    orders: orders || [],
    loading,
    error,
    shippingMethods,
    paymentMethods,
    fetchOrders,
    fetchShippingMethods,
    fetchPaymentMethods,
    createOrder,
    fetchOrder,
    updateAddress,
    updateShipping,
    updatePayment,
    applyVoucher,
    completeOrder,
    cancelOrder,
    clearOrder,
  };
}