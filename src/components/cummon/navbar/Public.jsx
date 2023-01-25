import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

function Public() {
  const { pathname } = useLocation();
  const navigation_left = [
    { name: "Create", path: "/create-post", current: false },
    { name: "Posts", path: "/posts", current: false },
  ];

  const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Fragment>
      <div className="container-blog">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <input type="checkbox" id="nav_check" hidden />
          <nav>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <ul>
              <li>
                {navigation_left?.length > 0
                  ? navigation_left?.map((row, key) => {
                      return (
                        <Link
                          key={key}
                          className={`nav-link-custom ${
                            pathname === row.path ? "active" : ""
                          }`}
                          to={`${row.path}`}
                        >
                          {row.name}
                        </Link>
                      );
                    })
                  : ""}
              </li>
              <li>
                <Link className="nav-link-custom" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link-custom" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
          <label htmlFor="nav_check" className="hambur">
            <div></div>
            <div></div>
            <div></div>
          </label>
        </header>
      </div>
    </Fragment>
  );
}

export default Public;
