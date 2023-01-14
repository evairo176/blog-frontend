import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Admin from "./navbar/Admin";
import Private from "./navbar/Private";
import Public from "./navbar/Public";

function Navbar() {
  const storeData = useSelector((store) => store.users);
  const { userAuth } = storeData;
  const isAdmin = userAuth?.isAdmin ? userAuth?.isAdmin : null;

  return (
    <Fragment>
      {!userAuth ? <Public /> : userAuth ? <Private /> : isAdmin && <Admin />}
    </Fragment>
  );
}

export default Navbar;
