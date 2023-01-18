import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const user = useSelector((store) => store?.users);
  const { userAuth } = user;
  if (!userAuth?.isAdmin) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedAdminRoute;
