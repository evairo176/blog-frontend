import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreateCategoryMenu from "../components/category/CreateCategoryMenu";
import CategoryListMenu from "../components/category/CategoryListMenu";
import UpdateCategoryMenu from "../components/category/UpdateCategoryMenu";
import HomeMenu from "../components/home/HomeMenu";
import ProtectedAdminRoute from "../components/navigation/ProtectedAdminRoute";
import ProtectedRoute from "../components/navigation/ProtectedRoute";
import CreatePostMenu from "../components/posts/CreatePostMenu";
import LoginMenu from "../components/user/LoginMenu";
import ProfileMenu from "../components/user/ProfileMenu";
import RegisterMenu from "../components/user/RegisterMenu";

function AppRoutes() {
  return (
    <Fragment>
      <ToastContainer />
      <Routes>
        <>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/register" element={<RegisterMenu />} />
          <Route path="/login" element={<LoginMenu />} />

          {/* page after login  */}

          {/* protected route admin  */}
          <Route
            path="/add-category"
            element={
              <ProtectedAdminRoute>
                <CreateCategoryMenu />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/create-post"
            element={
              <ProtectedAdminRoute>
                <CreatePostMenu />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/update-category/:id"
            element={
              <ProtectedAdminRoute>
                <UpdateCategoryMenu />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/category-list"
            element={
              <ProtectedAdminRoute>
                <CategoryListMenu />
              </ProtectedAdminRoute>
            }
          />
          {/* protected route admin  */}

          {/* protected login  */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileMenu />
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
