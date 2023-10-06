import { useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLawyersFetch } from "../redux/action";
import { useNavigate } from "react-router-dom";

const CardComp = () => {
  const lawyers = useSelector((state) => state.getLawyers.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLawyersFetch());
  }, []);

  return (
    <Container>
      <div className="text-center">
        <h3 className="my-4 ">Il team "Legalis"</h3>
        <h4 className="my-3">I nostri avvocati hanno maturato esperienza in vari ambiti giuridici.</h4>
        <p className="my-3 fs-5">
          In questa pagina puoi selezionare il tuo preferito in base alle esigenze specifiche e scoprire il dettaglio
          del suo profilo
        </p>
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 my-4">
        {lawyers.map((lawyer) => (
          <Card style={{ width: "20rem", padding: "0" }} key={lawyer.id}>
            <Card.Img className="object-cover" variant="top" src={`./assets/${lawyer.img}`} />
            <Card.Body>
              <Card.Title>{lawyer.name}</Card.Title>
              <Card.Text>{lawyer.qualification}</Card.Text>
              <Button variant="secondary" onClick={() => navigate(`/detail/${lawyer.id}`)}>
                Vai ai dettagli
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};
export default CardComp;
