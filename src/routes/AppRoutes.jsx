import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/cummon/Navbar";
import AddNewCategoryPages from "../pages/dashboard/AddNewCategoryPage";
import CategoryListPage from "../pages/dashboard/CategoryListPage";
import ProfilePage from "../pages/dashboard/ProfilePage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/user/auth/LoginPage";
import RegisterPage from "../pages/user/auth/RegisterPage";

function AppRoutes() {
  return (
    <Fragment>
      <Navbar />
      <ToastContainer />
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* page after login  */}
          <Route path="/add-category" element={<AddNewCategoryPages />} />
          <Route path="/category-list" element={<CategoryListPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </>
      </Routes>
    </Fragment>
  );
}

export default AppRoutes;
