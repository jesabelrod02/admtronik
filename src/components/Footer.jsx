import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/admtronik.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between align-items-center py-3">
          <Col md={4} className="text-md-left text-center">
            <img src={logo} alt="ADMTRONIK Logo" className="img-fluid" /> {/* Utiliza la imagen en lugar del texto */}
          </Col>
          <Col md={4} className="text-md-right text-center footer-social">
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
          </Col>
        </Row>
        <Row className="justify-content-center footer-text">
          <Col>
            <p>ADMTRONINIK © Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
