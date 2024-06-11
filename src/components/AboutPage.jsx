import React from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import image2 from '../assets/cuadro1-min.png';
import image3 from '../assets/cuadro3-min.png';
import image4 from '../assets/cuadro4-min.png';

const AboutPage = () => {
    return (
        <Container className="about-page">
            <div className="image-container">
                <div className="image-item">
                    <div className="image-overlay-container">
                        <Image src={image2} alt="Imagen de fondo" className="background-image" />
                        <div className="contact-info">
                            <p> SOBRE NOSOTROS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <div className="image-item">
                    <div className="image-overlay-container">
                        <Image src={image3} alt="Imagen de fondo" className="background-image" />
                        <div className="contact-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <div className="image-item">
                    <div className="image-overlay-container">
                        <Image src={image4} alt="Imagen de fondo" className="background-image" />
                        <div className="contact-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        </div>
                    </div>
                </div>
            </div>
            
        </Container>
    );
};

export default AboutPage;
