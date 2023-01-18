import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/cummon/Navbar";
import ProtectedAdminRoute from "../components/navigation/ProtectedAdminRoute";
import ProtectedRoute from "../components/navigation/ProtectedRoute";
import AddNewCategoryPages from "../pages/dashboard/AddNewCategoryPage";
import CategoryListPage from "../pages/dashboard/CategoryListPage";
import ProfilePage from "../pages/dashboard/ProfilePage";
import UpdateCategoryPage from "../pages/dashboard/UpdateCategoryPage";
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

          {/* protected route admin  */}
          <Route
            path="/add-category"
            element={
              <ProtectedAdminRoute>
                <AddNewCategoryPages />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/update-category/:id"
            element={
              <ProtectedAdminRoute>
                <UpdateCategoryPage />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/category-list"
            element={
              <ProtectedAdminRoute>
                <CategoryListPage />
              </ProtectedAdminRoute>
            }
          />
          {/* protected route admin  */}

          {/* protected login  */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          {/* protected login  */}
        </>
      </Routes>
    </Fragment>
  );
}

export default AppRoutes;
