import { usestate, useEffect } fro, "react";
import { Container, Col, Row } from "react-bootstrp";
// import myFace from "../Assets/img/ "

export const AboutMe = () => {
    <section className="aboutMe" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={10} md={5} xl={8}>
                    <span className="intro">Welcome</span>
                    <h1>{`I'm Stuart, but call me TJ. I'm a`}<span className="wrap">full-stack developer</span></h1>
                    <p>Lorem Ipsum</p>
                </Col>
                <Col xs={10} md={5} xl={6}>
                    {/* <img src={myFace} alt="My Face" /> */}
                </Col>
            </Row>
        </Container>
    </section>
}