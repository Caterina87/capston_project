import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostsFetch } from "../redux/action";

const CardComp = () => {
  const lawyers = useSelector((state) => state.getLawyers.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFetch());
  }, []);

  return (
    <>
      <Container>
        {lawyers.map((lawyer) => (
          <Card key={lawyer.id}>
            <Card.Img className="image-fluid" variant="top" src={lawyer.img} />
            <Card.Body>
              <Card.Title>{lawyer.name}</Card.Title>
              <Card.Text>{lawyer.qualification}</Card.Text>
              <Button variant="secondary">Vai ai dettagli</Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};
export default CardComp;
