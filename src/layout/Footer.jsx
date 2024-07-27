import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer text-light">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title">WineCollector</h5>
            <p>1234 Address St., City, Country</p>
            <p>Email: emailforkabi@gmail.com</p>
            <p>Phone: 9999 9999 9999 9999</p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title">Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#services" className="text-light">
                Products
              </Nav.Link>
              <Nav.Link href="#about" className="text-light">
                About Us
              </Nav.Link>
              <Nav.Link href="#contact" className="text-light">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-2"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-2"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <small>
              &copy; {new Date().getFullYear()} Made With Fun By Kabi. All
              rights reserved.
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
