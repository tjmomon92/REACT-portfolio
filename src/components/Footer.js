import Container from 'react-bootstrap/Container';
import github from '../Assets/img/icons-github.png';
import linkedIn from '../Assets/img/icons-linkedin.png';
import discord from '../Assets/img/icons-discord.png';

export const Footer = () => {
    return (
        <Footer className='footer'>
            <Container>
                <div className="socials">
                    <a href="https://icons8.com/icon/3tC9EQumUAuq/github"><img src={github} alt="" /></a>
                    <a href="https://icons8.com/icon/84888/linkedin"><img src={linkedIn} alt="" /></a>
                    <a href="https://icons8.com/icon/86955/discord"><img src={discord} alt="" /></a>
                </div>
            </Container>
        </Footer>
    )
};