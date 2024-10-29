import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import img1 from '../assets/images/image 6.png'
export default function AppAbout(){
    return(
       <section id="about_us" className='block about-block'>
         <Container fluid>
            <div className='title-holder'>
                <h2>About us</h2>
                <div className='subtitle'>Your health , Our mission</div>
            </div>
           <Row >
            <Col sm={6}><Image src={img1} /></Col>
            <Col sm={3}><p>This innovative medical platform offers a comprehensive experience for users who want to monitor their health, receive medical advice, and benefit from advanced AI-based tools. It is designed to be user-friendly and secure, integrating features such as an authentication page, an intelligent medical chatbot, and an automated skin lesion classification system using images.</p></Col>
           </Row>
        </Container>
       </section>
    )
}