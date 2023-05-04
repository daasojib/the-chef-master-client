import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
          return (
                    <Container>
                              <h2 className='text-center'>Question Answer Section</h2>
                              <h3>1/ Tell the differences between uncontrolled and controlled components?</h3>
                              <p>There are two types of components in react.First Controlled and second uncontrolled.
                                        <br />
                                        <span className='text-primary'>Controlled:</span>components are controlled by the parent or another components.It's notify the parent components that the components value is changed.
                                        <br />
                                        <span className='text-primary'>Uncontrolled:</span>this components are managed internally by itself.There is no control in parent component and other components.

                              </p>
                              <h2>2/ How to validate React props using PropTypes?</h2>
                              <p>When developing a React application, you'll need to structure and define your props to avoid bugs and errors.PropTypes can help catch bugs early on by ensuring that the props passed to a component are of the correct type and have the expected values.The validation steps are:
                                        run: npm i prop-types
                                        then import the prop-types.after that we validate them by setting the propTypes property of the FooComponent component to an object that has the names of the props to validate as the keys. And the corresponding values are the data type of the props.
                                        <br />
                                        *Import PropTypes at the top of the file <br />
                                        *Define the propTypes property on your component <br />
                                        *Define the PropTypes for each prop that your component expects
                              </p>
                              <h2>3/ Tell us the difference between nodejs and express js?</h2>
                              <p>
                                        Node.js and Express.js are both popular frameworks used for building server-side applications using JavaScript.
                                        <br />
                                        * Express.js is a higher-level framework that provides a structured approach to building web applications.On the other hand Node.js is a lower-level technology that provides the core functionality for building server-side applications. 
                                        <br />
                                        * Express provides the features and tools for building web applications such as routing and middleware and templates.Node provides built-in modules and API for interacting with the system, networking, and other low-level functionality.
                                        <br />
                                        *  Node is used to build wide range applications like real life application and Express made for building web applications.
                                        <br />
                                        *Express is beginner friendly and easy to learn. On the other hand Node is complicated than Express.Node requires strong JavaScript knowledge.
                                        </p>
                                        <h2>4/ What is a custom hook, and why will you create a custom hook?</h2>
                                        <p>React JS hooks are functions that is reuseable.If there is a requirement to add a feature, one can install a third-party library and solve the problem. But there is another way to solve the problem,React provides us some of many custom hooks we can use it when we need.For Reusability,Readability,Testability purpose we can use and create custom hooks. The most commonly used ones being useState, useRef, and useEffect.React hooks are functions that let you use and interact with state in React function components.</p>
                    </Container>
          );
};

export default Blog;