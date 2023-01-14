import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Public() {
  const navigation_left = [
    { name: "Create", path: "/create-post", current: false },
    { name: "Posts", path: "/posts", current: false },
  ];

  const className = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

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
                      <Link
                        key={key}
                        className={`nav-link ${className(
                          row.current ? "text-danger" : ""
                        )}`}
                        to={`${row.path}`}
                      >
                        {row.name}
                      </Link>
                    );
                  })
                : ""}
            </Nav>
            <Nav>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Public;
