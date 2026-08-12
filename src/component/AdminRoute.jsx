import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
  const { isLoggedIn, user, isLoading } = useSelector((state) => state.user);
  const token = localStorage.getItem('token');

  // Jika masih loading, tampilkan loading atau null
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // Jika belum login dan tidak ada token, redirect ke login
  if (!isLoggedIn && !token) {
    return <Navigate to="/auth/login" replace />;
  }

  // Cek role user
  const userRole = user?.role || 'customer';

  // Jika bukan admin, redirect ke halaman utama
  if (userRole !== 'admin') {
    return <Navigate to="/main" replace />;
  }

  // Jika admin, render children
  return children;
};

export default AdminRoute;