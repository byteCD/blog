import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "../AppRouter/AppRoutes";
import "./Menu.css";

const AdminMenu = () => {
  const { isAdmin, isAuth } = useSelector((state) => state.authReducer);

  return (
    isAuth &&
    isAdmin && (
      <Nav.Link as="div">
        <Link className="Menu__link" to={routes.addPost}>
          Добавить пост
        </Link>
      </Nav.Link>
    )
  );
};

export default AdminMenu;
