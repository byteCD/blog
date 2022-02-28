import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import AdminMenu from "./AdminMenu";
import GuestMenu from "./GuestMenu";
import UserMenu from "./UserMenu";
import "./Menu.css";

const Menu = () => {
  const authLoaded = useSelector((state) => state.authReducer.authLoaded);

  return (
    !authLoaded && (
      <Nav>
        <AdminMenu />
        <UserMenu />
        <GuestMenu />
      </Nav>
    )
  );
};

export default Menu;
