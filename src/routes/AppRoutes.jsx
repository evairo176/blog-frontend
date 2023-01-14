import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/cummon/Navbar";
import ProfilePage from "../pages/dashboard/ProfilePage";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/user/auth/LoginPage";
import RegisterPage from "../pages/user/auth/RegisterPage";

function AppRoutes() {
  // const navigate = useNavigate();
  // const storeData = useSelector((store) => store.users);
  // const { userAuth } = storeData;
  // const auth = userAuth ? userAuth : null;

  return (
    <Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
}

export default AppRoutes;
