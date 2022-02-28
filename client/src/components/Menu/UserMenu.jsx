import React from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../redux/actions/authActions";
import { routes } from "../AppRouter/AppRoutes";
import "./Menu.css";

const UserMenu = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());

  return (
    isAuth && (
      <>
        <Nav.Link as="div">
          <Link className="Menu__link" to={routes.profile}>
            Профиль
          </Link>
        </Nav.Link>
        <Nav.Link as="div">
          <Link className="Menu__link" to={routes.home} onClick={handleSignOut}>
            Выход
          </Link>
        </Nav.Link>
      </>
    )
  );
};

export default UserMenu;
