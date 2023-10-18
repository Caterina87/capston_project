import { useState } from "react";
import { Button, Container, Image, Modal, Form } from "react-bootstrap";
import { Pencil, PlusLg, Trash3 } from "react-bootstrap-icons";

import { useSelector } from "react-redux";

const ArticleListAdmin = (props) => {
  const articles = useSelector((state) => state.getArticles?.content);
  const isArticleSelected = useSelector((state) => state.getArticles.selectedArticle);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [testo, setTesto] = useState(null);
  const [image, setImage] = useState({ image: "" });

  return (
    <Container
      className={
        isArticleSelected.id === props.article.id ? "d-flex  my-2 p-2 articleSelectedClass" : "d-flex  my-2 p-2"
      }
    >
      <div>
        <Image src={`./assets/${props.article.img}`} width={"60px"} height={"60px"}></Image>
      </div>
      <div className="ms-3 line-clamp mb-2">
        <p className="text-end">
          <Pencil className="mx-2" onClick={handleShow}></Pencil>
          {/* Inizio Modale */}
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Gestisci Articolo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Titolo</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    value={testo?.text}
                    onChange={(e) => setTesto({ text: e.target.value })}
                    placeholder="Inserisci il titolo dell'articolo"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                  <Form.Label>Descrizione Articolo</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={testo?.text}
                    onChange={(e) => setTesto({ text: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="d-flex flex-column">
                  <Form.Label className="mt-2">Allega un'immagine</Form.Label>
                  <input type="file" accept="image/*" onChange={(e) => setImage({ image: e.target.files[0] })} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShow(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Fine Modale */}
          <PlusLg className="mx-2 fs-5 text-success "></PlusLg>
          <Trash3 className="mx-2 text-danger"></Trash3>
        </p>
        <h3 style={{ fontSize: "16px", fontWeight: "500" }} className=" mb-2">
          {props.article.title}
        </h3>

        <p style={{ fontSize: "14px", fontWeight: "400" }} className="mb-0  ">
          {props.article.description}
        </p>
      </div>
    </Container>
  );
};
export default ArticleListAdmin;
