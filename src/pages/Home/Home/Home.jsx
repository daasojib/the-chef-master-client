import React from 'react';
import Chefs from '../../Chefs/Chefs';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import RightNav from '../../Shared/RightNav/RightNav';

const Home = () => {
          return (
                    <div>
                              <h2>This is home</h2>
                              <Chefs></Chefs>
                              <Container className='mt-5'>
                                        <Row>
                                                  <Col lg={6}>
                                                            <LeftNav></LeftNav>
                                                  </Col>
                                                  <Col lg={6}>
                                                            <RightNav></RightNav>
                                                  </Col>
                                        </Row>
                              </Container>
                    </div>
          );
};

export default Home;