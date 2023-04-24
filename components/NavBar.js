import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Stuart Momon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>
                        {/* <Nav.Link href="#resume">My Resume</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <span className="contact-me">
                        <button className="contact-button" onClick={() => console.log('connected')}><span>Talk to Me</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}