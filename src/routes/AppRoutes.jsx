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
import Post from "../components/posts/Post";
import PostDetail from "../components/posts/PostDetail";
import SpeedDialComponent from "../.././src/utils/SpeedDialComponent";
import { useSelector } from "react-redux";
import UpdatePost from "../components/posts/UpdatePost";

function AppRoutes() {
  const storeData = useSelector((store) => store?.users);
  const { userAuth } = storeData;
  return (
    <Fragment>
      <ToastContainer />
      <SpeedDialComponent userAuth={userAuth} />
      <Routes>
        <>
          <Route path="/" element={<HomeMenu />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/register" element={<RegisterMenu />} />
          <Route path="/login" element={<LoginMenu />} />
          <Route path="/posts/:id" element={<PostDetail />} />

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
            path="/update-post/:id"
            element={
              <ProtectedAdminRoute>
                <UpdatePost />
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
