import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>WeatherApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar" />
    <Navbar.Collapse id="navbar">
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
