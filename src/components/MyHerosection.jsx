import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

function MyHeroSection() {
  return (
    <Container className="d-flex p-5 ">
      <div className="row">
        <div className="col">
          <h1 className="my-5">L'avvocato a portata di click</h1>
          <p className="my-5">
            Scegli il professionista che preferisci in base a ciò di cui hai bisogno e richiedi un preventivo gratuito
            oppure una consulenza in tempi rapidi.
          </p>
          <div className="my-5">
            <Button variant="info">Chiedi una consulenza</Button> <Button variant="light">Scegli un avvocato</Button>{" "}
          </div>
        </div>
        <div className="col pt-2">
          <img className="hero_section_img rounded-circle" src="./assets/immagine hero.png" alt="hero_image" />
        </div>
      </div>
    </Container>
  );
}
export default MyHeroSection;
