// import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Text from './typewriter';
// import myFace from "../Assets/img/ "

export const AboutMe = () => {
    // const titleTyping = [ "Full-Stack Developer", "UI/UX Designer", "Logo Designer" ];

    return (
        <section className="aboutMe" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={10} md={5} xl={8}>
                        <span className="intro">Welcome</span>
                        <h1>{`I'm Stuart, but call me TJ. I'm a `}<span className="wrap"><Text/></span></h1>
                        <p>Lorem Ipsum</p>
                    </Col>
                    <Col xs={10} md={5} xl={6}>
                        {/* <img src={myFace} alt="My Face" /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}