import { Container, Row, Col } from 'react-bootstrap';
import github from '../Assets/img/icons-github.png';
import linkedIn from '../Assets/img/icons-linkedin.png';
import insta from '../Assets/img/icons8-instagram.png';

export const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col>
                        <div className="socials">
                            <a href="https://github.com/tjmomon92"><img src={github} alt="" /></a>
                            <a href="https://www.linkedin.com/in/stuart-momon-385ba5151"><img src={linkedIn} alt="" /></a>
                            <a href="https://instagram.com/tjmomon?igshid=ZDdkNTZiNTM="><img src={insta} alt="" /></a>
                        </div>
                    </Col>
                    <Col>
                        <div className="credit">
                            <p>All social media icons sourced through icons8. Check them out <a href="https://icons8.com/">here!</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};