import { Button, Container, Form } from 'react-bootstrap';
import React from 'react';
import { FaGoogle, FaGithub, FaMailBulk,FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
          return (
                    <Container className='ms-auto w-50 mb-5 mt-5'>
                              <h3 className='text-center'>Please Login</h3>
                                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
      <br />
      <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to='/register'>Register</Link>
        </Form.Text>
      <Form.Text className="text-success">

        </Form.Text>
      <Form.Text className="text-danger">

        </Form.Text>
    </Form>
                    </Container>
          );
};

export default Login;


{/* <div className='text-center'>
                              <h3 className='mt-3'>Login With</h3>
                              <Button className='mt-4 mb-5' variant="outline-info"> <FaCode />Registration</Button>
                              <br />
                              <Button className='me-4 mb-2' variant="outline-primary"> <FaGoogle />Login with Google</Button>
                              <Button className='mb-2' variant="outline-secondary"> <FaGithub />Login with GitHub</Button>
                              <Button className='ms-4 mb-2' variant="outline-info"> <FaMailBulk />Login with Email</Button>
                    </div> */}