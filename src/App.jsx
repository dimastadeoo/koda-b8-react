import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

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
import Step1 from './component/checkout/Step1';
import Step2 from './component/checkout/Step2';
import Step3 from './component/checkout/Step3';
import Success from './component/checkout/StepSuccess';
import { ProductProvider } from './component/ProdutsContext';
import { ModalProvider } from './component/ModalContext';
import AuthLayout from './component/auth/AuthLayout';
import { AuthProvider } from './component/AuthContext';



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
    path: "/main/product/:id",
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
    path: "/main/all-products/:category",
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
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
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
  {
    path: "/checkout/step-1",
    element: <Step1 />,
  },
  {
    path: "/checkout/step-2",
    element: <Step2 />,
  },
  {
    path: "/checkout/step-3",
    element: <Step3 />,
  },
  {
    path: "/checkout/order-success",
    element: <Success />,
  },

]);

function App() {
  // Jalankan konfigurasi router ke dalam aplikasi React
  return (
    <ModalProvider>
      <AuthProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </AuthProvider>
    </ModalProvider>
  )
}

export default App;