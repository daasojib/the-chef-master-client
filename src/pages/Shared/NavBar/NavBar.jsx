import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const NavBar = () => {

  const {user} = useContext(AuthContext);


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
           {user &&
              <FaUserCircle style={{fontSize:'2rem'}}></FaUserCircle>
            }
            {user ?
                    <Button variant='secondary'>Logout</Button> :
                    <Link to="/login">
                      <Button variant='secondary'>Login</Button>
                    </Link>
              }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                    </div>
          );
};

export default NavBar;