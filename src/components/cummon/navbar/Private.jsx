import React, { Fragment } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUserAction } from "../../../redux/slices/users/usersSlices";

function Private({ isLogin }) {
  const dispatch = useDispatch();
  const navigation_left = [
    { name: "Home", path: "/", current: true },
    { name: "Create", path: "/create-post", current: false },
    { name: "Posts", path: "/posts", current: false },
    { name: "Authors", href: "/users", current: false },
  ];
  const navigation_right = [
    { name: "Your Profile", path: "/profile" },
    { name: "Change Your Password", path: "/update-password" },
  ];
  // komen 
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Web Blog
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {navigation_left?.length > 0
                ? navigation_left?.map((row, key) => {
                    return (
                      <Link key={key} className={`nav-link`} to={`${row.path}`}>
                        {row.name}
                      </Link>
                    );
                  })
                : ""}
            </Nav>
            <Nav className="nav-content">
              <NavDropdown
                className="costum-profile-menu"
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
      </Navbar>
    </Fragment>
  );
}

export default Private;
