import { Button, Container, Form } from 'react-bootstrap';
import React, { useContext } from 'react';
import { FaGoogle, FaGithub, FaMailBulk, FaCode } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';


const Login = () => {
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()


  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location);
  const from = location.state?.from?.pathname || '/';


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log(error);
      })
  }

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleGithubLogin = () =>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>{
      console.log(error.message)
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
        <br />
        <Button onClick={googleLogin} className='me-4 ms-5 mt-4' variant="outline-primary"> <FaGoogle />Login with Google</Button>
        <Button onClick={handleGithubLogin} className='mt-4' variant="outline-secondary"> <FaGithub />Login with GitHub</Button>
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
                             
                              <Button className='ms-4 mb-2' variant="outline-info"> <FaMailBulk />Login with Email</Button>
                    </div> */}