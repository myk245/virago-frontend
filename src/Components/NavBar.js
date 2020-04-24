import React from 'react';
// import { Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
// import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'; 

const NavBar = () => {
   return (
      <Container>
         <Navbar expand="lg" variant="light" bg="light" sticky="top">
            <Navbar.Brand href="/home">Virago</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link href="/disorders">Browse All Disorders</Nav.Link>
                  <Nav.Link href="/posts">Posts</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </Container>
   )
}

export default NavBar; 