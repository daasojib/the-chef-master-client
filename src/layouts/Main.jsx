import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Chefs from '../pages/Chefs/Chefs';
import { Outlet } from 'react-router-dom';

const Main = () => {
          return (
                    <div>
                              <Header></Header>
                              <Outlet></Outlet>
                              <Footer></Footer>
                    </div>
          );
};

export default Main;