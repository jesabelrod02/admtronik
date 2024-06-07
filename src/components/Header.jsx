import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/Logo1.jpeg';

const Header = () => {
    return (
        <>
            <Navbar className="header" expand="lg">
                <Container className="nav-container">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            height="50"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#about">Nosotros</Nav.Link>
                            <Nav.Link href="#services">Servicios</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="header-subtitle">
                <Container>
                    Tu éxito es nuestro objetivo
                </Container>
            </div>
        </>
    );
};

export default Header;