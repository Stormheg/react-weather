import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>WeatherApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar" />
    <Navbar.Collapse id="navbar">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
