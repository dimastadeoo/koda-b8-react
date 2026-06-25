import { Navigate, Outlet, useLocation, useParams } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import { useAuth } from "../custom_hooks/useAuth.js";
import { makeProfile } from "../ProfileContext";

export default function CheckoutLayout() {
  const { getOrderById } = makeProfile();
  const {isLoggedIn} = useAuth()

  const { checkoutId } = useParams();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  const checkoutFromState = location.state?.checkout;
  const checkout =
    checkoutFromState?.id === checkoutId
      ? checkoutFromState
      : getOrderById(checkoutId);

  if (!checkout) {
    return <Navigate to="/main/cart" replace />;
  }

  return (
    <>
      <header className="sticky top-0 z-50" id="header">
        <Header />
      </header>

      <main className="min-h-screen bg-green-50 pb-10">
        <Outlet context={{ checkout, checkoutId }} />
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}