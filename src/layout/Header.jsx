import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { AiOutlineLogin } from "react-icons/ai";
import { GiArchiveRegister } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const WineNavbar = () => {
  return (
    <Navbar className="NavBarHeader" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Wine Collector</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto custom-navlink d-flex align-items-center gap-2 justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <Link to={"#about"} className="custom-navlink">
                About Us
              </Link>
              <Nav.Link href="#collections" className="custom-navlink">
                Collections
              </Nav.Link>
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <NavDropdown.Item href="#red-wines">Red Wines</NavDropdown.Item>
                <NavDropdown.Item
                  href="#white-wines"
                  className="custom-navlink"
                >
                  White Wines
                </NavDropdown.Item>
                <NavDropdown.Item href="#sparkling-wines">
                  Sparkling Wines
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </div>
            <div className="mx-auto d-flex align-items-end gap-4">
              <div className="d-flex align-items-end ">
                <Link className="nav-link" to="/login">
                  {" "}
                  <AiOutlineLogin />
                  login
                </Link>
              </div>
              <div className="d-flex align-tems-end">
                <Link className="nav-link" to="/logout">
                  <RiLogoutCircleLine />
                  Logout
                </Link>
              </div>
              <div className="d-flex align-tems-end">
                <Link className="nav-link" to="/Register">
                  <GiArchiveRegister />
                  Register
                </Link>
              </div>
            </div>
            {/* <Link className="nav-link" to="/Register">
                <GiArchiveRegister />
              </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
