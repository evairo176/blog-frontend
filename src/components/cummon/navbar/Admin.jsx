import React, { Fragment } from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutUserAction } from "../../../redux/slices/users/usersSlices";
import logo from "../../../assets/images/logo.png";

function Admin({ isLogin }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigation_left = [
    { name: "Home", path: "/", current: true },
    { name: "Create", path: "/create-post", current: false },
    { name: "Posts", path: "/posts", current: false },
    { name: "Authors", path: "/users", current: false },
    { name: "Add Category", path: "/add-category", current: false },
    { name: "Category List", path: "/category-list", current: false },
  ];
  const navigation_right = [
    { name: "Your Profile", path: "/profile" },
    { name: "Change Your Password", path: "/update-password" },
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

export default Admin;
