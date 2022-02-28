import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../AppRouter/AppRoutes";
import "./Menu.css";

const GuestMenu = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  return (
    !isAuth && (
      <>
        <Nav.Link as="div">
          <Link className="Menu__link" to={routes.signUp}>
            Регистрация
          </Link>
        </Nav.Link>
        <Nav.Link as="div">
          <Link className="Menu__link" to={routes.signIn}>
            Вход
          </Link>
        </Nav.Link>
      </>
    )
  );
};

export default GuestMenu;
