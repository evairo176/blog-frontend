import React, { Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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

      {/* <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="navbar-custom"
      >
        <Container>
          <Link className="navbar-brand brand-custom" to="/">
            Web Blog b
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {navigation_left?.length > 0
                ? navigation_left?.map((row, key) => {
                    return (
                      <Link
                        key={key}
                        className={`nav-link nav-link-custom `}
                        to={`${row.path}`}
                      >
                        {row.name}
                      </Link>
                    );
                  })
                : ""}
            </Nav>
            <Nav>
              <NavDropdown
                className="costum-profile-menu dropleft"
                title={
                  <img
                    src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
                    className="rounded-circle"
                    style={{ width: "40px" }}
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
                          style={{ fontSize: "13px" }}
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </Fragment>
  );
}

export default Admin;
