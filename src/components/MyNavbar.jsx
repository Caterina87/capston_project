import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let usernamelocal = sessionStorage.getItem("username");
    if (usernamelocal === "" || usernamelocal === null) {
      setUsername(false);
    } else {
      setUsername(true);
    }
  }, [username, location]);

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
            {!username && (
              <Nav.Link to="#link" onClick={() => navigate("/articoli")}>
                Articoli
              </Nav.Link>
            )}
            {username && (
              <Nav.Link to="#link" onClick={() => navigate("/articoliAdmin")}>
                Articoli Admin
              </Nav.Link>
            )}
          </Nav>
          <Nav.Link className="text-success ms-auto " to="#link" onClick={() => navigate("/login")}>
            {!username && (
              <Button variant="secondary fw-semibold">
                Area Riservata <PersonFill className="ms-1 fs-4 text-white align-top"></PersonFill>
              </Button>
            )}
            {username && (
              <Button variant="secondary fw-semibold">
                Logout <PersonFill className="ms-1 fs-4 text-white align-top"></PersonFill>
              </Button>
            )}
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
