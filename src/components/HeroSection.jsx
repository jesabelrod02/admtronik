import React from 'react';
import heroImage from '../assets/MaGE.gif'; 
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container className="hero-container">
        <Row className="justify-content-center align-items-center">
          <Col md={12} className="text-center">
            <div className="hero-text">
              <h1>AUTOMATIZACIÓN DE EQUIPOS</h1>
              <button className="btn-custom">Ver Servicios</button>
            </div>
            <div className="hero-description">
              <p> Especialistas en automatización y diseño industrial, ofrecemos soluciones personalizadas en maquinados, 
                soldadura y proyectos industriales para optimizar operaciones y eficiencia.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;