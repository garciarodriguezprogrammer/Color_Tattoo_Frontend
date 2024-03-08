// export const Profile = () => {

//     return (
//         <div className= "container mt-5">
//             <div className="mt-5">
//                 <h3>Perfil</h3>
//             </div>
            

//         </div>
//     )
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'

export const Profile = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Área personal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="nada">Home</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <NavDropdown title="Mis citas" id="basic-nav-dropdown">
              <NavDropdown.Item href="getAppointments">Ver citas</NavDropdown.Item>
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
            <Nav.Link href="salir">Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}








