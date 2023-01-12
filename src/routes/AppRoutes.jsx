import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

function AppRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Fragment>
  );
}

export default AppRoutes;
