import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../features/AuthSlice';


export const AdminNavBar = () => {
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
        <Navbar.Brand href="/profileAdmin">Área personal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="nada">Home</Nav.Link>
            <NavDropdown title="Usuarios" id="basic-nav-dropdown">
              <NavDropdown.Item href="allUsers">Ver todos los usuarios</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Citas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/appointmentsAdmin">Ver todas las citas</NavDropdown.Item>
            </NavDropdown>

            {isLoggedIn && <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}








