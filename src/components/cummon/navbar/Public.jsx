import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { ThemeContext, themes } from "../../../utils/ThemeSelector";

function Public() {
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(true);
  const navigation_left = [
    { name: "Create", path: "/create-post", current: false },
    { name: "Posts", path: "/posts", current: false },
  ];

  return (
    <Fragment>
      <div className="container-blog">
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <input type="checkbox" id="nav_check" hidden />
          <nav className="nav-content">
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
          <div className="themes-option">
            <ThemeContext.Consumer>
              {({ changeTheme, theme }) => (
                <select
                  className="filter-input-dawd"
                  name=""
                  id=""
                  onChange={(e) => {
                    changeTheme(e.target.value);
                  }}
                  value={theme}
                >
                  <option value="light-theme">LIGHT</option>
                  <option value="dark-theme">DARK</option>
                </select>
              )}
            </ThemeContext.Consumer>
          </div>
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
