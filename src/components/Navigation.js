import React, { Component } from "react";
import { Navbar, Nav} from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <div className="Nav">
       <Navbar variant="dark">
  <Navbar.Brand href="#home">Simple Online Bookstore</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   
  </Navbar.Collapse>
  <Nav className="mr-auto">
      <Nav.Link href="#home">Login</Nav.Link>
      <Nav.Link href="#link">Register</Nav.Link>
   
    </Nav>
</Navbar>
      </div>
    );
  }
}

export default Navigation;