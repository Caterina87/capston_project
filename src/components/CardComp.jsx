import { Button, Card, Container } from "react-bootstrap";

function CardComp() {
  return (
    <Container>
      <Card>
        <Card.Img className="image-fluid" variant="top" src="./assets/avv1.jpg" />
        <Card.Body>
          <Card.Title>Nome e cognome</Card.Title>
          <Card.Text>Breve descrizione delle caratteristiche del professonista</Card.Text>
          <Button variant="secondary">Vai ai dettagli</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default CardComp;
