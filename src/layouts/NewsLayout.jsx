import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import Header from '../Shared/Header/Header';
import LeftNav from '../Shared/LeftNav/LeftNav';
import RightNav from '../Shared/RightNav/RightNav';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';


const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    
                    <Col lg={9}>
                     <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer> 
        </div>
    );
};

export default NewsLayout;