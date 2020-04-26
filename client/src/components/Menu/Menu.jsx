import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" className="stock-nav">
      <Navbar.Brand href="/">LOGO</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Link</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Menu;
