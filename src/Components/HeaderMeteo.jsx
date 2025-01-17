import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const HeaderMeteo = () => {
  return (
    <Navbar
      bg="primary"
      variant="primary"
      expand="lg"
      style={{ backgroundColor: "white" }}
    >
      <Container fluid={true} className="mt-0">
        <Navbar.Brand href="#">
          <img
            src="./public/images/logo.jpeg"
            alt="Logo"
            style={{ width: "100px", height: "60px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="text-white" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/today" className="nav-link fw-bold text-white">
              Oggi
            </Link>
            <Link to="/16gg" className="nav-link fw-bold text-white">
              Prossimamente
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default HeaderMeteo;
