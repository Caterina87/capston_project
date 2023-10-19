import { Button } from "react-bootstrap";
import { Lock, PersonFill, PersonLock } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src="./assets/Legalis.png" width="90" height="90" className="d-inline-block align-top" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" fs-6 fw-semibold">
            <Nav.Link to="#link" onClick={() => navigate("/consulenza")}>
              Richiedi una consulenza
            </Nav.Link>
            <Nav.Link to="#link" onClick={() => navigate("/avvocati")}>
              Cerca un avvocato
            </Nav.Link>
            <Nav.Link to="#link" onClick={() => navigate("/articoli")}>
              Articoli
            </Nav.Link>
          </Nav>
          <Nav.Link className="text-success ms-auto " to="#link" onClick={() => navigate("/login")}>
            <Button variant="secondary fw-semibold">
              Accedi <PersonFill className="ms-1 fs-5 text-white"></PersonFill>
            </Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
