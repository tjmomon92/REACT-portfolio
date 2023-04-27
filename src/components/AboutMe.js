// import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Text from './typewriter';
// Added in ability to change opening 'aboutMe' image
// import myFace from "../Assets/img/self-portrait.jpg"
import myAvatar from "../Assets/img/avatar.png"
// import myLogo from "../Assets/img/FinalLogo.png"

export const AboutMe = () => {

    return (
        <section className="aboutMe" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col className="left-about" xs={12} md={6} xl={7}>
                        <span className="intro">Welcome</span>
                        <h1>{`I'm Stuart, but call me TJ. I'm a `}<span className="wrap"><Text/></span></h1>
                        <p>I am a Texas based full-stack web developer, with a passion for UI/UX design and creation and who finds a fun hobby in application development for just about anything. My focus revolves around clean and efficient code, while ensuring accessibility and ease-of-use to ensure that anyone can utilize my creations. I am a tenacious and quick learner, and there is nothing that I love more than to learn something new about my chosen craft.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img className="myFace" src={myFace} alt="My Face" /> */}
                        <img className="myAvatar" src={myAvatar} alt="My Avatar" />
                        {/* <img className="myLogo" src={myLogo} alt="My Logo" /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}