import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from './useAuth';
import {
  toggleWishlist,
  addAddress,
  removeAddress,
  setPrimaryAddress,
  createOrder,
  updateOrder,
  completeOrder,
  clearProfileData,
} from '../../redux/reducers/profileDataSlice';

export function useProfileData() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const userEmail = user?.email?.trim().toLowerCase() || null;

  const allAddresses = useSelector((state) => state.profileData.addresses);
  const allWishlist = useSelector((state) => state.profileData.wishlist);
  const allOrders = useSelector((state) => state.profileData.orders);

  // Filter data berdasarkan userEmail
  const addresses = allAddresses.filter((item) => item.userEmail === userEmail);
  const wishlistItems = allWishlist.filter((item) => item.userEmail === userEmail);
  const orders = allOrders.filter((item) => item.userEmail === userEmail);

  const isWishlisted = (productId) => {
    return wishlistItems.some((item) => item.productId === Number(productId));
  };

  const toggleWishlistHandler = (product) => {
    if (!userEmail) {
      return { success: false, requireLogin: true, message: 'Silakan login terlebih dahulu.' };
    }
    dispatch(toggleWishlist({ userEmail, product }));
    return { success: true, message: 'Wishlist diperbarui.' };
  };

  const addAddressHandler = (address) => {
    if (!userEmail) return;
    dispatch(addAddress({ userEmail, address }));
  };

  const removeAddressHandler = (addressId) => {
    if (!userEmail) return;
    dispatch(removeAddress({ userEmail, addressId }));
  };

  const setPrimaryAddressHandler = (addressId) => {
    if (!userEmail) return;
    dispatch(setPrimaryAddress({ userEmail, addressId }));
  };

  const createOrderHandler = ({ source, items, total }) => {
    if (!userEmail) {
      return { success: false, requireLogin: true, message: 'Silakan login terlebih dahulu.' };
    }
    dispatch(createOrder({ userEmail, source, items, total }));
    return { success: true, message: 'Checkout berhasil dibuat.' };
  };

  const updateOrderHandler = (orderId, updatedData) => {
    if (!userEmail) return null;
    dispatch(updateOrder({ userEmail, orderId, updatedData }));
  };

  const completeOrderHandler = (orderId) => {
    if (!userEmail) return;
    dispatch(completeOrder({ userEmail, orderId }));
  };

  const clearAllData = () => {
    dispatch(clearProfileData());
  };

  return {
    addresses,
    wishlistItems,
    orders,
    isWishlisted,
    toggleWishlist: toggleWishlistHandler,
    addAddress: addAddressHandler,
    removeAddress: removeAddressHandler,
    setPrimaryAddress: setPrimaryAddressHandler,
    createOrder: createOrderHandler,
    updateOrder: updateOrderHandler,
    completeOrder: completeOrderHandler,
    clearAllData,
  };
}