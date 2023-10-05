import { Button, Card, Container } from "react-bootstrap";

function CardComp() {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src="./assets/avv1.jpg" />
        <Card.Body>
          <Card.Title>Nome e cognome</Card.Title>
          <Card.Text>Breve descrizione delle caratteristiche del professonista</Card.Text>
          <Button variant="secondary">Vai ai dettagli</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="./assets/avv2.jpg" />
        <Card.Body>
          <Card.Title>Nome e cognome</Card.Title>
          <Card.Text>Breve descrizione delle caratteristiche del professonista</Card.Text>
          <Button variant="secondary">Vai ai dettagli</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="./assets/avv3.jpg" />
        <Card.Body>
          <Card.Title>Nome e cognome</Card.Title>
          <Card.Text>Breve descrizione delle caratteristiche del professonista</Card.Text>
          <Button variant="secondary">Vai ai dettagli</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="./assets/avv4.jpg" />
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
