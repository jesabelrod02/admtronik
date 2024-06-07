import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImagesTextSection = () => {
    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col md={4}>
                    <img src="path-to-left-image.jpg" alt="Left Side" className="img-fluid" />
                </Col>
                <Col md={4}>
                    <p className="text-center">Texto centrado que describe los servicios o productos.</p>
                </Col>
                <Col md={4}>
                    <img src="path-to-right-image.jpg" alt="Right Side" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default ImagesTextSection;
