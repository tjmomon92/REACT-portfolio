// import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import self from '../Assets/img/self-portrait.jpg';

export const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ibyafw8', 'template_vgeu6pr', form.current, 'nYDRioNsVRnTMe5Z_')
      .then((result) => {
          console.log(result.text);
          console.log("Message Sent!");
      }, (error) => {
          console.log(error.text);
          console.log("Message Failed!");
      });
  };

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' name="user_name" placeholder='Name' />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' name="user_email" placeholder='Email' />
                                </Col>
                                <Col>
                                    <textarea row='6' name="message" placeholder='Message' />
                                    <button className='contact-submit-button' type="submit" value="Send"><span>Send</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col md={6}>
                        <img src={self} alt='My Face' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
};