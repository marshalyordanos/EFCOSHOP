import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="text-white text-decoration-none " to={"/"}>
              EFCOShop
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <NavLink
                  to={"/cart"}
                  className="text-white text-decoration-none "
                >
                  <i className="fas fa-shopping-cart"></i>Cart
                </NavLink>
              </Nav.Link>

              <Link className="text-white text-decoration-none " to={"/"}>
                <Nav.Link href="#link">
                  <i className="fas fa-user"></i>Sign in
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </div>
  );
};

export default Header;
