import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";

export const TopNav = () => {
  return (
    <Navbar style={{ backgroundColor: "#460303" }} variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          WineCollector
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <FaHome /> Home
            </Link>
            {/* {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <i className="fa-solid fa-house"></i> Dashboard
                </Link>
                <Link onClick={handleOnLogOut} className="nav-link" to="/">
                  <i className="fa-solid fa-house"></i> Logout
                </Link>
              </>
            ) : ( */}
            <>
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
            </>
            {/* )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
