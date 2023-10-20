import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <footer expand="lg" className="bg-body-tertiary">
      <Container className=" bg-body-tertiary pt-4 ">
        <div className="row">
          <div className="col-4">
            <p className="bg-body-tertiary fw-semibold">Legalis - L'avvocato a portata di click</p>
            <p className="bg-body-tertiary d-none d-md-block">
              Sede legale: Corso Italia 25 <br /> 00168 - Roma{" "}
            </p>
            <p className="bg-body-tertiary d-none d-md-block">Partita Iva: IT123456789 </p>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li>
                {" "}
                <Link to="/consulenza" className="text-decoration-none text-dark">
                  {" "}
                  Richiedi una consulenza
                </Link>
              </li>
              <li>
                <Link to="/avvocati" className="text-decoration-none text-dark ">
                  Cerca un avvocato{" "}
                </Link>{" "}
              </li>
              <li>
                <Link to="/articoli" className="text-decoration-none text-dark">
                  Articoli
                </Link>
              </li>
            </ul>
          </div>
          <div className="col d-none d-sm-block">
            <ul className="list-unstyled">
              <li>Consulenza scritta</li>
              <li>Consulenza telefonica</li>
              <li>Consulenza video</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li>Termini e condizioni</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <p className="text-center">&copy; Legalis- L'avvocato a portata di click. S.R.L. 2023</p>
      </Container>
    </footer>
  );
};

export default MyFooter;
