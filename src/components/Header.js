import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>WeatherApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar" />
    <Navbar.Collapse id="navbar">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        {/* <Nav.Link href="/#/forecast/Zwolle?country=nl">Zwolle</Nav.Link>
        <Nav.Link href="/#/forecast/London?country=uk">London</Nav.Link>
        <Nav.Link href="/#/forecast/New%20York?country=us">New York</Nav.Link>
        <Nav.Link href="/#/forecast/Tokyo?country=jp">Tokyo</Nav.Link>
        <Nav.Link href="/#/forecast/Hong%20Kong?country=cn">Hong Kong</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
