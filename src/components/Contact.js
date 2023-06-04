import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import self from '../Assets/img/self-portrait.jpg';

export const Contact = (props) => {

    const[fullName,setFullName]=useState('');
    const[fullEmail,setFullEmail]=useState('');
    const[fullMessage,setFullMessage]=useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const form = useRef();

    const sendEmail = () => {

        alert("Message Sent")
        // e.preventDefault();
        setFullName('');
        setFullEmail('');
        setFullMessage('');

        emailjs.sendForm('service_ibyafw8', 'template_vgeu6pr', form.current, 'nYDRioNsVRnTMe5Z_')
        .then((result) => {
            console.log(result.text);
            console.log("Message Sent!");
        }, (error) => {
            console.log(error.text);
            console.log("Message Failed!");
        });

    };

    const finalSendEmail = (e) => {
        if (fullName.length===0) {
            e.preventDefault();
            setErrorMessage('Please complete all fields');
        } else if (fullEmail.length===0) {
            e.preventDefault();
            setErrorMessage('Please complete all fields');
        } else if (fullMessage.length===0) {
            e.preventDefault();
            setErrorMessage('Please complete all fields');
        } else {
            e.preventDefault();
            sendEmail();
            setErrorMessage('');
        }
    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        {errorMessage && <p className='error'>{errorMessage}</p>}
                        <form ref={form} onSubmit={finalSendEmail}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' name="user_name" placeholder='Name' onChange={e => setFullName(e.target.value)} value={fullName} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' name="user_email" placeholder='Email' onChange={e => setFullEmail(e.target.value)} value={fullEmail} />
                                </Col>
                                <Col>
                                    <textarea row='6' name="message" placeholder='Message' onChange={e => setFullMessage(e.target.value)} value={fullMessage} />
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