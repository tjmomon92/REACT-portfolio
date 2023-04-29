import { Container, Col, Row } from "react-bootstrap";
// import myAvatar from "../Assets/img/avatar.png"
// import { useEffect, useState } from "react";
import { MyCube } from "./Cube.js";

export const MyResume = () => {
    return(
        <section className="myresume" id="resume">
            <Container>
                <Row className="cool-ass-cube">
                    <Col xs={12} md={6} xl={5}>
                        {/* <img className="myAvatar" src={myAvatar} alt="My Avatar" /> */}
                        {
                            <MyCube />
                        }
                    </Col>
                    <Col className="right-resume" xs={12} md={6} xl={7}>
                        <h1 className="resume-title">What I've done</h1>
                        <p>Technology has always fascinated me, and I have always had a passion for figuring out how things work. With this driving force pushing me, I enrolled into a full-stack development bootcamp with SMU to follow this calling. I am very proud to say that I have learned HTML, CSS, JavaScript, Node.js, and even SQL and my new favorite language REACT. For more information, check out my resume here.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
