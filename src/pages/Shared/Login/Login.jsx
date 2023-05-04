import { Button } from 'react-bootstrap';
import React from 'react';
import { FaGoogle, FaGithub, FaMailBulk,FaCode } from 'react-icons/fa';


const Login = () => {
          return (
                    <div className='text-center'>
                              <h3>Login With</h3>
                              <Button className='mb-2' variant="outline-primary"> <FaGoogle />Login with Google</Button>
                              <Button className='mb-2' variant="outline-secondary"> <FaGithub />Login with GitHub</Button>
                              <Button className='mb-2' variant="outline-info"> <FaMailBulk />Login with Email</Button>
                              <Button className='mb-2' variant="outline-info"> <FaCode />Registration</Button>
                    </div>
          );
};

export default Login;