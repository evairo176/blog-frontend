import React, { Fragment } from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutUserAction } from "../../../redux/slices/users/usersSlices";
import logo from "../../../assets/images/logo.png";
import { ThemeContext } from "../../../utils/ThemeSelector";
import CategoryWithNoError from "../../../utils/CategoryWithNoError";

function Admin({ isLogin }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigation_left = [
    { name: "Home", path: "/", current: true },
    // { name: "Create", path: "/create-post", current: false },
    { name: "Posts", path: "/posts", current: false },
    // { name: "Authors", path: "/users", current: false },
    // { name: "Add Category", path: "/add-category", current: false },
    // { name: "Category List", path: "/category-list", current: false },
  ];
  const navigation_right = [
    { name: "Your Profile", path: "/profile" },
    { name: "Change Your Password", path: "/update-password" },
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
          <div className="profile">
            <NavDropdown
              className="costum-profile-menu"
              title={
                <img
                  src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                  className="rounded-circle"
                  style={{ width: "35px" }}
                  alt=""
                />
              }
              id="collasible-nav-dropdown"
            >
              {navigation_right?.length > 0
                ? navigation_right?.map((row, key) => {
                    return (
                      <Link
                        key={key}
                        className={`dropdown-item`}
                        to={`${row.path}`}
                      >
                        {row.name}
                      </Link>
                    );
                  })
                : ""}
              <div
                style={{ fontSize: "13px" }}
                onClick={() => dispatch(logoutUserAction())}
                className="dropdown-item"
              >
                Logout
              </div>
            </NavDropdown>
          </div>
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
          <div className="d-flex align-items-center">
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
            <NavDropdown
              className="costum-profile-menu hide-mobile"
              title={
                <img
                  src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                  className="rounded-circle"
                  style={{ width: "35px", marginLeft: "10px" }}
                  alt=""
                />
              }
              id="collasible-nav-dropdown"
            >
              {navigation_right?.length > 0
                ? navigation_right?.map((row, key) => {
                    return (
                      <Link
                        key={key}
                        className={`dropdown-item`}
                        to={`${row.path}`}
                      >
                        {row.name}
                      </Link>
                    );
                  })
                : ""}
              <div
                style={{ fontSize: "13px" }}
                onClick={() => dispatch(logoutUserAction())}
                className="dropdown-item"
              >
                Logout
              </div>
            </NavDropdown>
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

export default Admin;
