import { Col, Image, Row } from "react-bootstrap";

const CardDetails = () => {
  return (
    <Row>
      <Image className="opacity-75" src="../assets/pexels-bruno-cervera-1431324.jpg" fluid />
      <Col>
        <p>Avv. Nome e Cognome</p>
        <span>Specializzato in ...........................</span>
      </Col>

      <Col>
        <h6>Curriculum Vitae</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum saepe minus eos, vel ullam maxime error?
          Iure quos animi repellendus, corporis obcaecati optio, fugiat deserunt, veritatis tempore est consectetur.
        </p>
      </Col>
    </Row>
  );
};
export default CardDetails;
