import { useEffect } from "react";
import { Button, Card, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getLawyersFetch } from "../redux/action";
import { useNavigate } from "react-router-dom";

const CardComp = () => {
  const lawyers = useSelector((state) => state.getLawyers.content);
  const isLoading = useSelector((state) => state.getLawyers.isLoading);
  const error = useSelector((state) => state.getLawyers.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("error " + error);
    dispatch(getLawyersFetch());
  }, [error]);

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
      <Row className="sm-12 md-6 lg-4 gap-2 my-4 text-center">
        {isLoading ? (
          <div className="text-center mt-3">
            <Spinner variant="success" />
          </div>
        ) : (
          lawyers.map((lawyer) => (
            <Card style={{ width: "18rem", padding: "0" }} key={lawyer.id}>
              <Card.Img
                style={{ height: "24rem", padding: "0" }}
                className="object-cover"
                variant="top"
                src={`./assets/${lawyer.img}`}
              />
              <Card.Body style={{ height: "9rem", padding: "10px" }}>
                <Card.Title>{lawyer.name}</Card.Title>
                <Card.Text>{lawyer.qualification}</Card.Text>
                <Button variant="secondary" onClick={() => navigate(`/detail/${lawyer.id}`)}>
                  Vai ai dettagli
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </Row>
    </Container>
  );
};
export default CardComp;
