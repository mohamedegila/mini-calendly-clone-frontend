
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { Home } from "../pages/home/home";



export const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>
  );
};
