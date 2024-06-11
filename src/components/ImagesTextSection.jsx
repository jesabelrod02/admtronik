import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgRight from '../assets/img3-min.png';
import imgLeft from '../assets/img2-min.png';
import imgInlineOne from '../assets/icono-min.png'; 
import imgInlineTwo from '../assets/fondo2-min.png';

const ImagesTextSection = () => {
    return (
        <Container className="images-text-section-container mt-6 my-5">
            <Row className="align-items-center">
                <Col md={4} className="col-teximage">
                    <p className="images-text-section-title">
                        Nuestros Servicios 
                    </p>
                    <p className="images-text-section-text">
                        Nuestros valores, que incluyen calidad, precio y tiempos de entrega superiores, fortalecen nuestro compromiso. Colaboramos con empresas líderes para desarrollar relaciones cercanas y comunicativas con nuestros clientes a lo largo de todas las etapas del proyecto, mejorando así el valor de sus productos. Nuestro principal objetivo es entender y satisfacer las necesidades de nuestros clientes para mejorar su eficiencia y productividad.
                        <br/><br/>
                        <img src={imgInlineOne} alt="Detail Image 1" className="img-fluid mx-auto d-block" style={{ maxWidth: '50%' }}/>
                        <br/>
                        <img src={imgInlineTwo} alt="Detail Image 2" className="img-fluid mx-auto d-block" style={{ maxWidth: '100%', marginTop: '20px' }}/>
                    </p>
                </Col>
                <Col md={4} className="d-flex justify-content-end p-0">
                    <img src={imgLeft} alt="Left Side" className="images-text-section-image img-fluid" />
                </Col>
                <Col md={4} className="d-flex justify-content-start p-0">
                    <img src={imgRight} alt="Right Side" className="images-text-section-image img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default ImagesTextSection;
