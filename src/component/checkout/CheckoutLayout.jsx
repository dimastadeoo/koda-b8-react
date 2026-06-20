import { Navigate, Outlet, useLocation, useParams } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import { makeAuth } from "../AuthContext";
import { makeProfile } from "../ProfileContext";

export default function CheckoutLayout() {
  const { isLoggedIn } = makeAuth();
  const { getOrderById } = makeProfile();

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

      <main className="min-h-screen bg-slate-50">
        <Outlet context={{ checkout, checkoutId }} />
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}