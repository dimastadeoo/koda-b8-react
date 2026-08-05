import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const {isLoggedIn, isLoading} = useSelector((state) => state.user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    // Redirect ke halaman login, dan simpan halaman yang diminta agar bisa redirect kembali setelah login (opsional)
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;