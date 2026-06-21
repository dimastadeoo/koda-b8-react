import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';

// Import halaman dari folder components
import Wishlist from './component/profile/Wishlist';
import Myorder from './component/profile/Myorder';
import EditProfile from './component/profile/EditProfile';
import AlamatSaya from './component/profile/AlamatSaya';

import HomePage from './component/main/HomePage';
import DetailPage from './component/main/DetailPage';
import Cart from './component/main/Cart';
import BrowseProducts from './component/main/BrowseProducts';

import Register from './component/auth/Register';
import Login from './component/auth/Login';
import ForgotPassword from './component/auth/ForgotPassword';

import ProductsList from './component/admin/ProductsList';
import OrderList from './component/admin/OrderList';
import Dashboard from './component/admin/Dashboard';
import CustomerList from './component/admin/CustomerList';
import { ProductProvider } from './component/ProdutsContext';
import { ModalProvider } from './component/ModalContext';
import AuthLayout from './component/auth/AuthLayout';
import { AuthProvider } from './component/AuthContext';
import { CartProvider } from './component/CartContext';
import { ProfileProvider } from './component/ProfileContext';
import ProfileLayout from './component/profile/ProfileLayout';
import CheckoutLayout from './component/checkout/CheckoutLayout';
import StepShipping from './component/checkout/StepShipping';
import StepPayment from './component/checkout/StepPayment';
import StepConfirm from './component/checkout/StepConfirm';
import StepSuccess from './component/checkout/StepSuccess';
import ErrorPage from './component/ErorPage';
import RootLayout from './component/RootLayout';



// Konfigurasi Peta Rute URL halaman
const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    children: [
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
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="edit-profile" replace />,
          },
          {
            path: "edit-profile",
            element: <EditProfile />,
          },
          {
            path: "wishlists",
            element: <Wishlist />,
          },
          {
            path: "address",
            element: <AlamatSaya />,
          },
          {
            path: "my-orders",
            element: <Myorder />,
          },
        ],
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
        path: "/checkout/:checkoutId",
        element: <CheckoutLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="shipping" replace />,
          },
          {
            path: "shipping",
            element: <StepShipping />,
          },
          {
            path: "payment",
            element: <StepPayment />,
          },
          {
            path: "confirm",
            element: <StepConfirm />,
          },
          {
            path: "success",
            element: <StepSuccess />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },

    ],
  },
]);

function App() {
  // Jalankan konfigurasi router ke dalam aplikasi React
  return (
    <ModalProvider>
      <AuthProvider>
        <ProductProvider>
          <ProfileProvider>
            <CartProvider>
              <RouterProvider router={router} />
            </CartProvider>
          </ProfileProvider>
        </ProductProvider>
      </AuthProvider>
    </ModalProvider>
  )
}

export default App;