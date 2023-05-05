import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


const NavBar = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(error => console.log(error))
  }


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
           {
           user && user.photoURL ? <img src={user.photoURL} alt="" /> :
           <img width="30" height="30" src='https://coconuts.co/wp-content/uploads/2018/08/beehead.jpg' alt="" />
            }
            {user ?
                    <Button onClick={handleLogOut} variant='secondary'>Logout</Button> :
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