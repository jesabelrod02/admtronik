import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgRight from '../assets/img3-min.png';
import imgLeft from '../assets/img2-min.png';


const ImagesTextSection = () => {
    return (
        <Container className="images-text-section-container my-5">
            <Row className="align-items-center d-flex flex-nowrap">
                <Col md={4} className="d-flex justify-content-end">
                    <img src={imgLeft} alt="Left Side" className="images-text-section-image img-fluid" />
                </Col>
                <Col md={4} className="d-flex justify-content-center flex-column">
                    <h2 className="images-text-section-title">Nuestros Servicios</h2>
                    <p className="images-text-section-text">
                        Texto centrado que describe los servicios o productos, ofreciendo información relevante para los clientes.
                    </p>
                </Col>
                <Col md={4} className="d-flex justify-content-start">
                     <img src={imgRight} alt="Right Side" className="images-text-section-image img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default ImagesTextSection;