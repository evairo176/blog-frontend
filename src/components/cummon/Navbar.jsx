import React, { Fragment } from "react";
import Admin from "./navbar/Admin";
import Private from "./navbar/Private";
import Public from "./navbar/Public";

function Navbar() {
  return (
    <Fragment>
      {/* <Public /> */}
      {/* <Private /> */}
      <Admin />
    </Fragment>
  );
}

export default Navbar;
