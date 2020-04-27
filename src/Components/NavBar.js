import React from 'react';
import { Link } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
   return (
      <Container>
         <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="/">Virago</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                  <NavDropdown title="Options" id="collasible-nav-dropdown">
                     {/* ideally would use links to render these pages without a reload, 
                     but cleaner to use NavDropdown.Item here */}
                     {/* <Link to="/disorders">Mental Health Disorders</Link>
                     <Link to="/posts">Virago Community Posts</Link> */}
                     <NavDropdown.Item href="/disorders">Mental Health Disorders</NavDropdown.Item>
                     <NavDropdown.Item href="/posts">View All Posts</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="/"><strong>Home</strong></NavDropdown.Item>
                  </NavDropdown>
               </Nav>
               <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-primary">Search</Button>
               </Form>
               <Link to="/login"><Button variant="light"><div>Login</div></Button></Link>
               <Link to="/signup"><Button variant="light"><div>Sign Up</div></Button></Link>
            </Navbar.Collapse>
         </Navbar>
      </Container>
   )
}

export default NavBar; 