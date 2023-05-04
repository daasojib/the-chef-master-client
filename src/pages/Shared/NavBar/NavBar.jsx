import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';


const NavBar = () => {
          return (
                    <div>
                                                                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">the <span className='text-danger '>CHEF</span> master</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              Profile
            </Nav.Link>
            <Nav.Link eventKey={2} href="/login">
            <Button variant="danger">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                    </div>
          );
};

export default NavBar;