import React from "react";
import { Link } from "react-router-dom";

function HomeMenu() {
  return (
    <div className="text-center mt-2">
      <h1>HomeMenu</h1>
      <br />
      <Link to="/Login" className="btn btn-warning">
        Login
      </Link>
      <br />
      <br />
      <Link to="/register" className="btn btn-warning">
        Register
      </Link>
    </div>
  );
}

export default HomeMenu;
