import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Admin from "./navbar/Admin";
import Private from "./navbar/Private";
import Public from "./navbar/Public";

function Navbar() {
  const storeData = useSelector((store) => store.users);
  console.log(storeData);

  return (
    <Fragment>
      {/* <Public /> */}
      {/* <Private /> */}
      <Admin />
    </Fragment>
  );
}

export default Navbar;
