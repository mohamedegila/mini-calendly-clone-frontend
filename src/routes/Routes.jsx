
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/login";
import { Login as AuthLogin } from "../pages/auth/user/login/login";
import { Signup } from "../pages/auth/user/signup/signup";

import { Home } from "../pages/home/home";



export const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/signup" element={<Signup />}  />
        <Route path="/login" element={<Login />} />

      </Routes>
  );
};
