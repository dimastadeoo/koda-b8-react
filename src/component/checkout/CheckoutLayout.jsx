import { Navigate, Outlet, useParams } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import { useAuth } from "../custom_hooks/useAuth.js";
import { useCheckout } from "../custom_hooks/useCheckout";
import { useEffect } from "react";

export default function CheckoutLayout() {
  const { isLoggedIn } = useAuth();
  const { checkoutId } = useParams();
  const { order, fetchOrder, loading } = useCheckout();

  useEffect(() => {
    if (checkoutId && !order) {
      fetchOrder(checkoutId);
    }
  }, [checkoutId, order, fetchOrder]);

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  if (loading || !order) {
    return <div className="min-h-screen bg-green-50 py-10 px-4">Memuat pesanan...</div>;
  }

  if (String(order.id) !== checkoutId) {
    return <Navigate to="/main/cart" replace />;
  }

  return (
    <>
      <header className="sticky top-0 z-50" id="header">
        <Header />
      </header>
      <main className="min-h-screen bg-green-50 pb-10">
        <Outlet context={{ order }} />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}