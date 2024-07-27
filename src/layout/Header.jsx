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
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#collections">Collections</Nav.Link>
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="#red-wines">Red Wines</NavDropdown.Item>
              <NavDropdown.Item href="#white-wines">
                White Wines
              </NavDropdown.Item>
              <NavDropdown.Item href="#sparkling-wines">
                Sparkling Wines
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <div className="d-flex align-items-end ">
              <Link className="nav-link" to="/login">
                {" "}
                <AiOutlineLogin />
                login
              </Link>
              <Link className="nav-link" to="/logout">
                <RiLogoutCircleLine />
                Logout
              </Link>
              <Link className="nav-link" to="/Register">
                <GiArchiveRegister />
                Register
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
