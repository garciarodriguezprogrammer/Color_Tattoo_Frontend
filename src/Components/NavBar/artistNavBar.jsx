import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; 


export const ArtistNavBar = () => {

 const navegar = useNavigate()  
 const token = localStorage.getItem('token')
 const logMeOut = () => {
    localStorage.setItem('token', '') 
    localStorage.setItem('id', '') 
    setTimeout(() => {
     navegar('/home')
    }, 600)
   }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Área personal artist</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="nada">Home</Nav.Link>
            <NavDropdown title="Mis citas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/appointmentsArtists">Ver citas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Modificar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Eliminar cita
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Item onClick={() => logMeOut()}>Cerrar sesión</NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}








