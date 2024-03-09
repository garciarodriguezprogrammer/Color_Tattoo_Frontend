import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


export const AdminNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Área personal admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="nada">Home</Nav.Link>
            <NavDropdown title="Usuarios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#users">Ver todos los usuarios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Ejemplo_1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ejemplo_2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="home">
                Salir
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="salir">Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}








