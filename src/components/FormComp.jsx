import { useState } from "react";
import { Col, Container, FloatingLabel, FormCheck, Image, Row } from "react-bootstrap";
import { Check2Square } from "react-bootstrap-icons";
import Alert from "react-bootstrap/Alert";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { newAppointment } from "../redux/action";

const FormComp = () => {
  const dispatch = useDispatch();
  const savedAppointment = useSelector((state) => state.appointmentReducer.savedAppointment);

  const [appointment, setAppointment] = useState({
    name: "",
    suranme: "",
    email: "",
    phone: "",
    object: "",
    description: "",
    type: "",
  });

  const handleChange = (propertyName, propertyValue) => {
    setAppointment({ ...appointment, [propertyName]: propertyValue });
  };

  return (
    <>
      <Image className="d-none d-md-block opacity-75" src="../assets/pexels-karolina-grabowska-7876050.jpg" fluid />
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
              {savedAppointment && (
                <Alert className="text-center" key="success" variant="success">
                  Richiesta inviata con successo!
                </Alert>
              )}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>
                  Nome <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={appointment.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  type="text"
                  placeholder="Inserisci il tuo nome"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicSurname">
                <Form.Label>
                  Cognome <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={appointment.suranme}
                  onChange={(e) => handleChange("suranme", e.target.value)}
                  required
                  type="text"
                  placeholder="Inserisci il tuo cognome"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Indirizzo Email <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={appointment.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  type="email"
                  placeholder="Inscerisci la tua email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>
                  Numero di telefono <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={appointment.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  type="phone"
                  placeholder="Inserisci la tuo numero di telefono"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>
                  Oggetto <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  value={appointment.object}
                  onChange={(e) => handleChange("object", e.target.value)}
                  required
                  type="text"
                  placeholder="Inserisci un titolo riassuntivo"
                />
              </Form.Group>
              <Form.Label>
                Descrizione <span className="text-danger">*</span>
              </Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  value={appointment.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  required
                  as="textarea"
                  placeholder="Descrivi il tuo caso"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <Form.Label className="mt-3">
                {" "}
                <Check2Square className="fs-5"></Check2Square> Scegli la tipologia di consulenza da richiedere
              </Form.Label>
              <br />
              <FormCheck
                className="mt-3"
                inline
                type="radio"
                value="scritta"
                name="group1"
                label="Consulenza scritta"
              ></FormCheck>
              <FormCheck inline type="radio" value="telefonica" name="group1" label="Consulenza telefonica"></FormCheck>
              <FormCheck
                inline
                type="radio"
                value="videocall"
                name="group1"
                label="Consulenza in videocall"
              ></FormCheck>
              <FormCheck inline type="radio" value="preventivo" name="group1" label="Preventivo gratuito"></FormCheck>
              <br />
              <Button
                className="mt-5"
                variant="secondary"
                onClick={(e) => {
                  dispatch(newAppointment(appointment));
                  e.preventDefault();
                  setAppointment({
                    name: "",
                    suranme: "",
                    email: "",
                    phone: "",
                    object: "",
                    description: "",
                    type: "",
                  });
                }}
              >
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
