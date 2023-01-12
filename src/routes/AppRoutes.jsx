import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/user/auth/RegisterPage";

function AppRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Fragment>
  );
}

export default AppRoutes;
