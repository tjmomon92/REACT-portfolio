import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/img/FinalLogo.png';
import github from '../Assets/img/icons-github.png';
import linkedIn from '../Assets/img/icons-linkedin.png';
import insta from '../Assets/img/icons8-instagram.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div onClick={() => window.location.replace("#home")}>
                            <Nav.Link className='navbar-link'>About Me</Nav.Link>
                        </div>
                        <div onClick={() => window.location.replace("#portfolio")}>
                            <Nav.Link className='navbar-link'>Portfolio</Nav.Link>
                        </div>
                        <div onClick={() => window.location.replace("#resume")}>
                            <Nav.Link className='navbar-link'>My Resume</Nav.Link>
                        </div>
                    </Nav>
                    <span className="contact-me">
                        <div className="socials">
                            <a href="https://github.com/tjmomon92"><img src={github} alt="" /></a>
                            <a href="https://www.linkedin.com/in/stuart-momon-385ba5151"><img src={linkedIn} alt="" /></a>
                            <a href="https://instagram.com/tjmomon?igshid=ZDdkNTZiNTM="><img src={insta} alt="" /></a>
                        </div>
                        <button className="contact-button" onClick={() => window.location.replace("/#connect")}><span>Let's Talk</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}