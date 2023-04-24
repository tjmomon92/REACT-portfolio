import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/img/Logo.gif';
import github from '../Assets/img/icons-github.png';
import linkedIn from '../Assets/img/icons-linkedin.png';
import discord from '../Assets/img/icons-discord.png';

/* <a target="_blank" href="https://icons8.com/icon/84888/linkedin">LinkedIn</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */

/* <a target="_blank" href="https://icons8.com/icon/3tC9EQumUAuq/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */

/* <a target="_blank" href="https://icons8.com/icon/86955/discord">Discord</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about" className={ activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
                        <Nav.Link href="#portfolio" className={ activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
                        <Nav.Link href="#resume" className={ activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>My Resume</Nav.Link>
                    </Nav>
                    <span className="contact-me">
                        <div className="socials">
                            <a href="#"><img src={github} alt="" /></a>
                            <a href="#"><img src={linkedIn} alt="" /></a>
                            <a href="#"><img src={discord} alt="" /></a>
                        </div>
                        <button className="contact-button" onClick={() => console.log('connected')}><span>Talk to Me</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}