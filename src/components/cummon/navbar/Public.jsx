import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import CategoryWithNoError from "../../../utils/CategoryWithNoError";
import { ThemeContext } from "../../../utils/ThemeSelector";

function Public() {
  const { pathname } = useLocation();
  const navigation_left = [
    { name: "Home", path: "/", current: false },
    { name: "Posts", path: "/posts", current: false },
  ];

  const dataThemes = [
    {
      id: "dark-theme",
      title: "Dark",
    },
    {
      id: "light-theme",
      title: "Light",
    },
    {
      id: "hallowen-theme",
      title: "Hallowen",
    },
    {
      id: "night-theme",
      title: "Night",
    },
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
              <li>
                <hr />
                <div className="themes-option hide-laptop">
                  <ThemeContext.Consumer>
                    {({ changeTheme, theme }) => (
                      <CategoryWithNoError
                        onChange={(e) => changeTheme(e)}
                        value={theme}
                        id="themes"
                        data={dataThemes}
                        placeholder="Themes"
                      />
                    )}
                  </ThemeContext.Consumer>
                </div>
              </li>
            </ul>
          </nav>
          <div className="themes-option hide-mobile">
            <ThemeContext.Consumer>
              {({ changeTheme, theme }) => (
                <CategoryWithNoError
                  onChange={(e) => changeTheme(e)}
                  value={theme}
                  id="themes"
                  data={dataThemes}
                  placeholder="Themes"
                />
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
