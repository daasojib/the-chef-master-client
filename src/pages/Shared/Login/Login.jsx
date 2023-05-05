import { Button } from 'react-bootstrap';
import React from 'react';
import { FaGoogle, FaGithub, FaMailBulk,FaCode } from 'react-icons/fa';


const Login = () => {
          return (
                    <div className='text-center'>
                              <h3 className='mt-3'>Login With</h3>
                              <Button className='mt-4 mb-5' variant="outline-info"> <FaCode />Registration</Button>
                              <br />
                              <Button className='me-4 mb-2' variant="outline-primary"> <FaGoogle />Login with Google</Button>
                              <Button className='mb-2' variant="outline-secondary"> <FaGithub />Login with GitHub</Button>
                              <Button className='ms-4 mb-2' variant="outline-info"> <FaMailBulk />Login with Email</Button>
                    </div>
          );
};

export default Login;