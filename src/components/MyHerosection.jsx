import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyHeroSection = () => {
  const navigate = useNavigate;

  return (
    <Container id="hero_bg" className="d-flex ">
      <div className="row ">
        <div className="col-12 col-lg-6 align-self-center">
          <h1 className="">L'avvocato a portata di click</h1>
          <p className="">
            Scegli il professionista che preferisci in base a ciò di cui hai bisogno e richiedi un preventivo gratuito
            oppure una consulenza in tempi rapidi.
          </p>
          <div className="mt-5">
            <Button variant="secondary me-2" onClick={() => navigate("/consulenza")}>
              Richiedi una consulenza
            </Button>{" "}
            <Button variant="light" onClick={() => navigate("/avvocati")}>
              Scegli un avvocato
            </Button>{" "}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <img className="hero_section_img img-fluid" src="./assets/immagine hero2.png" alt="hero_image" />
        </div>
      </div>
    </Container>
  );
};
export default MyHeroSection;
