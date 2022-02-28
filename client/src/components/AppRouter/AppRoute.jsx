import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routes } from "./AppRoutes";

const AppRoute = ({ children, guest, admin, user }) => {
  const { isAuth, isAdmin, isLoaded } = useSelector(
    (state) => state.authReducer
  );

  if (admin && !isLoaded) {
    return isAuth && isAdmin ? (
      children
    ) : (
      <Navigate to={routes.profile} replace />
    );
  }

  if (guest && !isLoaded) {
    return !isAuth ? children : <Navigate to={routes.profile} replace />;
  }

  if (user && !isLoaded) {
    return isAuth ? children : <Navigate to={routes.signIn} replace />;
  }

  return null;
};

export default AppRoute;
