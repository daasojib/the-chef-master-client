import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Chefs from '../pages/Chefs/Chefs';

const Main = () => {
          return (
                    <div>
                              <Header></Header>
                              <Chefs></Chefs>
                              <Container>
                                        <Row>
                                                  <Col lg={6}>
                                                            <LeftNav></LeftNav>
                                                  </Col>
                                                  <Col lg={6}>
                                                            <RightNav></RightNav>
                                                  </Col>
                                        </Row>
                              </Container>
                              <Footer></Footer>
                    </div>
          );
};

export default Main;