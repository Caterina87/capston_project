import { Button, Card, Container } from "react-bootstrap";

function SearchLawyer() {
  return (
    <Container>
      <h2 className="text-center mt-5">Scegli il professionista in base alle tue esigenze</h2>
      <p className="text-center">
        Confronta i profili e risolvi il tuo problema legale velocemente con l'aiuto di un avvocato che ti seguirà passo
        passo.
      </p>
      <div className="row">
        <div className="col">
          <Card>
            <Card.Img variant="top" src="./assets/avv1.jpg" />
            <Card.Body>
              <Card.Title>Nome e cognome</Card.Title>
              <Card.Text>Breve descrizione delle caratteristiche del professonista</Card.Text>
              <Button variant="secondary">Vai ai dettagli</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Img variant="top" src="./assets/avv2.jpg" />
            <Card.Body>
              <Card.Title>Nome e cognome</Card.Title>
              <Card.Text>Breve descrizione delle caratteristiche del professonista</Card.Text>
              <Button variant="secondary">Vai ai dettagli</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Img variant="top" src="./assets/avv3.jpg" />
            <Card.Body>
              <Card.Title>Nome e cognome</Card.Title>
              <Card.Text>Breve descrizione delle caratteristiche del professonista</Card.Text>
              <Button variant="secondary">Vai ai dettagli</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Img variant="top" src="./assets/avv4.jpg" />
            <Card.Body>
              <Card.Title>Nome e cognome</Card.Title>
              <Card.Text>Breve descrizione delle caratteristiche del professonista</Card.Text>
              <Button variant="secondary">Vai ai dettagli</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
export default SearchLawyer;
