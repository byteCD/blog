import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import AdminMenu from "./AdminMenu";
import GuestMenu from "./GuestMenu";
import UserMenu from "./UserMenu";
import "./Menu.css";

const Menu = () => {
  const isLoaded = useSelector((state) => state.authReducer.isLoaded);

  return (
    !isLoaded && (
      <Nav>
        <AdminMenu />
        <UserMenu />
        <GuestMenu />
      </Nav>
    )
  );
};

export default Menu;
