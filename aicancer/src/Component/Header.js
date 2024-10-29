import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function AppHeader(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CancerAI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about_us">About us</Nav.Link>
            <Nav.Link href="#OurServices">Our Services</Nav.Link>
            <Nav.Link href="#team">Our team</Nav.Link>
            <Nav.Link href="#Contact">Contact us</Nav.Link> 
            <Nav.Link href="#Connexion">Connexion</Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}