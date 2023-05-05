import { Button, Container, Form } from 'react-bootstrap';
import React, { useContext } from 'react';
import { FaGoogle, FaGithub, FaMailBulk,FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';


const Login = () => {
          const {signIn} = useContext(AuthContext)
          const handleLogin = event =>{
                    event.preventDefault();
                    const form = event.target;
                    const email = form.email.value;
                    const password = form.password.value;
                    console.log(email,password)
                    signIn(email,password)
                    .then(result =>{
                              const loggedUser = result.user;
                              console.log(loggedUser)
                    })
                    .catch(error=>{
                              console.log(error);
                    })
          }
          return (
                    <Container className='ms-auto w-50 mb-5 mt-5'>
                              <h3 className='text-center'>Please Login</h3>
                                <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
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