import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//check if user is login

function ProtectedRoute({ children }) {
  const user = useSelector((store) => store?.users);
  const { userAuth } = user;
  if (!userAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
