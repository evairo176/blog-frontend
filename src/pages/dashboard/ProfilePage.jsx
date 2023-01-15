import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ProfileMenu from "../../components/dashboard/ProfileMenu";

function ProfilePage() {
  const storeData = useSelector((store) => store.users);
  const { userAuth } = storeData;
  const auth = userAuth ? userAuth : "";

  // handle redirect
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <ProfileMenu />
    </>
  );
}

export default ProfilePage;
