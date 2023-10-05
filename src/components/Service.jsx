import { Container } from "react-bootstrap";
import { Check2Circle } from "react-bootstrap-icons";

function Service() {
  return (
    <Container>
      <div className="row my-5 ">
        <div className="col-12 col-lg-6">
          <img className="img-fluid" id="grafico_service_page" src="./assets/grafico.png" alt="mockup" />
        </div>
        <div className="col-12 col-lg-6 align-self-center">
          <h3 className="mb-4">Prenota una consulenza personalizzata</h3>
          <ul className="list-unstyled lh-lg  ">
            <li>
              {" "}
              <Check2Circle className="me-2 fs-4 text-success"></Check2Circle>Seleziona la modalità di consulenza che
              preferisci
            </li>
            <li>
              {" "}
              <Check2Circle className="me-2 fs-4 text-success"></Check2Circle>Inserisci le informazioni relative al tuo
              caso
            </li>
            <li>
              {" "}
              <Check2Circle className="me-2 fs-4 text-success"></Check2Circle>Richiedi un preventivo gratuito
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
export default Service;
