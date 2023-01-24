import React from "react";
import { Fragment } from "react";
import Navbar from "../cummon/Navbar";

function HomeMenu() {
  return (
    <Fragment>
      <Navbar />
      <div className="text-center mt-2">
        <h1>Web Blog</h1>
      </div>
    </Fragment>
  );
}

export default HomeMenu;
