import { Container } from "react-bootstrap";
import { PinAngle } from "react-bootstrap-icons";

const SearchLawyer = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-12 col-lg-6 align-self-center">
          <h3 className="text-center my-3">Scegli il professionista in base alle tue esigenze</h3>
          <p className="text-center">
            <PinAngle className="fs-4 text-danger"></PinAngle> Confronta i profili e risolvi il tuo problema legale
            velocemente con l'aiuto di un avvocato che ti seguirà passo passo.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <img className="img-fluid" src="./assets/collage.png" alt="collage avvocati" />
        </div>
      </div>
    </Container>
  );
};
export default SearchLawyer;
