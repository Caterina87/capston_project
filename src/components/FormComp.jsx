import { Col, Container, FloatingLabel, FormCheck, Image, Row } from "react-bootstrap";
import { Check2All, Check2Square } from "react-bootstrap-icons";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormComp = () => {
  return (
    <>
      <Image className="opacity-75" src="../assets/pexels-karolina-grabowska-7876050.jpg" fluid />
      <Container>
        <div className="text-center my-5">
          <h3 className="my-3">Chiedi supporto ai nostri esperti</h3>
        </div>
        <div>
          <p className="my-3 fs-5 d-none d-md-block ">
            Inserisci i tuoi dati e descrivi il tuo problema legale. Nell’oggetto della consulenza assegna un titolo
            chiaro e riassuntivo. Nella descrizione della consulenza fornisci all'avvocato i dettagli completi:
            argomento del caso, causa dei fatti e altre informazioni utili ricordando di essere il più specifico
            possibile. Infine seleziona la tipologia di consulenza che preferisci.
          </p>
        </div>
        <Row>
          <Col className="d-flex justify-content-center">
            <Form className="my-5">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il tuo nome" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSurname">
                <Form.Label>Cognome</Form.Label>
                <Form.Control type="text" placeholder="Inserisci il tuo cognome" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Indirizzo Email</Form.Label>
                <Form.Control type="text" placeholder="Inscerisci la tua email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Numero di telefono</Form.Label>
                <Form.Control type="text" placeholder="Inserisci la tuo numero di telefono" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Oggetto</Form.Label>
                <Form.Control type="text" placeholder="Inserisci un titolo riassuntivo" />
              </Form.Group>
              <Form.Label>Descrizione</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control as="textarea" placeholder="Descrivi il tuo caso" style={{ height: "100px" }} />
              </FloatingLabel>
              <Form.Label className="mt-3">
                {" "}
                <Check2Square className="fs-5"></Check2Square> Scegli la tipologia di consulenza da richiedere
              </Form.Label>
              <br />
              <FormCheck className="mt-3" inline type="radio" name="group1" label="Consulenza scritta"></FormCheck>
              <FormCheck inline type="radio" name="group1" label="Consulenza telefonica"></FormCheck>
              <FormCheck inline type="radio" name="group1" label="Consulenza in videocall"></FormCheck>
              <FormCheck inline type="radio" name="group1" label="Preventivo gratuito"></FormCheck>
              <br />
              <Button className="mt-5" variant="secondary" type="submit">
                Invia la richiesta
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormComp;
