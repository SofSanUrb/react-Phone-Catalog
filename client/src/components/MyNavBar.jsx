import React from "react";
import {Navbar, Nav} from 'react-bootstrap'

export default function MyNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Phone Catalog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">See all phones</Nav.Link>
          <Nav.Link href="/addPhone">Add Phone</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
