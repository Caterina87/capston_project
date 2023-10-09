import { Container, FloatingLabel, FormCheck } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormComp = () => {
  return (
    <Container>
      <div className="text-center my-5">
        <h4 className="my-3">Chiedi supporto ai nostri esperti.</h4>
      </div>
      <div>
        <h6 className="my-3">Invia la tua richiesta di consulenza</h6>
        <p className="my-3">
          Inserisci i tuoi dati e descrivi il tuo problema legale. Nell’oggetto della consulenza assegna un titolo
          chiaro e riassuntivo. <br />
          Nella Descrizione della consulenza fornisci all'avvocato i dettagli completi: argomento del caso, causa dei
          fatti e altre informazioni utili ricordando di essere il più specifico possibile.
        </p>
      </div>
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
          <Form.Control type="text" placeholder="Inscerisci la tuo numero di telefono" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Oggetto</Form.Label>
          <Form.Control type="text" placeholder="Inserisci un titolo riassuntivo" />
        </Form.Group>
        <Form.Label>Descrizione</Form.Label>
        <FloatingLabel controlId="floatingTextarea2">
          <Form.Control as="textarea" placeholder="Descrivi il tuo caso" style={{ height: "100px" }} />
        </FloatingLabel>
        <Form.Label className="mt-3">Scegli la tipologia di consulenza da richiedere</Form.Label>
        <br />
        <FormCheck className="mt-3" inline type="radio" name="group1" label="Consulenza scritta"></FormCheck>
        <FormCheck inline type="radio" name="group1" label="Consulenza telefonica"></FormCheck>
        <FormCheck inline type="radio" name="group1" label="Consulenza in videocall"></FormCheck>
        <FormCheck inline type="radio" name="group1" label="Preventivo gratuito"></FormCheck>
        <br />
        <Button className="my-3" variant="secondary" type="submit">
          Invia la richiesta
        </Button>
      </Form>
    </Container>
  );
};

export default FormComp;
