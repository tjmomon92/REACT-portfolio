import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import self from '../Assets/img/self-portrait.jpg';

export const Contact = () => {
    const formInitialDetails ={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtontext] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
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
}