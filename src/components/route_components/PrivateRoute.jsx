import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const location = useLocation();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  /* =========================
     NOT AUTHENTICATED
  ========================= */
  if (!isAuthenticated || !user) {
    // Admin routes ke liye admin login page
    if (location.pathname.startsWith("/admin")) {
      return <Navigate to="/admin/login" replace />;
    }

    // Normal user login
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
