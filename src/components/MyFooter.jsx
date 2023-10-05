import { Container } from "react-bootstrap";

function MyFooter() {
  return (
    <footer expand="lg" className="bg-body-tertiary">
      <Container className=" bg-body-tertiary pt-4 ">
        <div className="row">
          <div className="col-4">
            <p className="bg-body-tertiary fw-semibold">Legalis - L'avvocato a portata di click</p>
            <p className="bg-body-tertiary">
              Sede legale: Corso Italia 25 <br /> 00168 - Roma{" "}
            </p>
            <p className="bg-body-tertiary">Partita Iva: IT123456789 </p>
          </div>
          <div className="col">
            <ul className="list-unstyled">
              <li>Richiedi una consulenza</li>
              <li>Cerca un avvocato</li>
              <li>Articoli</li>
            </ul>
          </div>
          <div className="col">
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
}

export default MyFooter;
