import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../features/AuthSlice';


export const NavBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated); // Accede al estado de autenticación desde Redux
  const dispatch = useDispatch();
  const navegar = useNavigate();
  const handleLogout = () => {
    dispatch(logOut()); 
    setTimeout(() => {
      navegar('/home');
    }, 600);
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/profile">Área personal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="nada">Home</Nav.Link>
            <NavDropdown title="Mis citas" id="basic-nav-dropdown">
              <NavDropdown.Item href="getAppointments">Ver citas</NavDropdown.Item>
              <NavDropdown.Item href="nuevaCita">Nueva cita</NavDropdown.Item>
            </NavDropdown>

            {isLoggedIn && <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}








