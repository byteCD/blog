import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routes } from "./AppRoutes";

const AppRoute = ({ children, guest, admin, user }) => {
  const { isAuth, isAdmin, authLoaded } = useSelector(
    (state) => state.authReducer
  );

  if (admin && !authLoaded) {
    return isAuth && isAdmin ? (
      children
    ) : (
      <Navigate to={routes.profile} replace />
    );
  }

  if (guest && !authLoaded) {
    return !isAuth ? children : <Navigate to={routes.profile} replace />;
  }

  if (user && !authLoaded) {
    return isAuth ? children : <Navigate to={routes.signIn} replace />;
  }

  return null;
};

export default AppRoute;
