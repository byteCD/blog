import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  adminRoutes,
  guestRoutes,
  publicRoutes,
  userRoutes,
} from "./AppRoutes";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {userRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {guestRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {adminRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
