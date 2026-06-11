import { createBrowserRouter, RouterProvider } from 'react-router';

// Import halaman dari folder components
import Wishlist from './component/profile/Wishlist';
import Myorder from './component/profile/Myorder';
import EditProfile from './component/profile/EditProfile';
import AlamatSaya from './component/profile/AlamatSaya';

import HomePage from './component/main/HomePage';
import DetailPage from './component/main/DetailPage';
import Cart from './component/main/cart';
import BrowseProducts from './component/main/BrowseProducts';

import Register from './component/auth/register';
import Login from './component/auth/login';
import ForgotPassword from './component/auth/ForgotPassword';

import ProductsList from './component/admin/ProductsList';
import OrderList from './component/admin/OrderList';
import Dashboard from './component/admin/Dashboard';
import CustomerList from './component/admin/CustomerList';

// Konfigurasi Peta Rute URL halaman
const router = createBrowserRouter([

  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/main",
    element: <HomePage />,
  },
  {
    path: "/main/detail-product", 
    element: <DetailPage />,
  },
  {
    path: "/main/cart",
    element: <Cart />,
  },
  {
    path: "/main/all-products",
    element: <BrowseProducts />,
  },
  {
    path: "/profile/address",
    element: <AlamatSaya />,
  },
  {
    path: "/profile/edit-profile", 
    element: <EditProfile />,
  },
  {
    path: "/profile/my-orders",
    element: <Myorder />,
  },
  {
    path: "/profile/wishlists",
    element: <Wishlist />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register", 
    element: <Register />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/admin/list-products",
    element: <ProductsList />,
  },
  {
    path: "/admin/list-orders",
    element: <OrderList />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin/list-customers",
    element: <CustomerList />,
  },

]);

function App() {
  // Jalankan konfigurasi router ke dalam aplikasi React
  return <RouterProvider router={router} />;
}

export default App;