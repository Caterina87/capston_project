import { useState } from "react";
import { Button, Container, Image, Modal, Form, Alert } from "react-bootstrap";
import { Pencil, PlusLg, Trash3 } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { articleMod, deleteArticle, getArticlesFetch, saveNewArticle } from "../redux/action";

const ArticleListAdmin = (props) => {
  //const articles = useSelector((state) => state.getArticles?.content);
  const isArticleSelected = useSelector((state) => state.getArticles.selectedArticle);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [changedArticle, setchangedArticle] = useState({
    id: "",
    title: "",
    data: "",
    img: null,
    description: "",
    fonte: "",
  });

  const [newArticle, setNewArticle] = useState({
    id: "",
    title: "",
    data: "",
    img: "../assets/pexels-taha-samet-arslan-7781900.jpg",
    description: "",
    fonte: "",
  });

  const handleShow = (i) => {
    setShow(true);
    setchangedArticle(props.article);
  };

  const handleChange = (propertyName, propertyValue) => {
    if (propertyName !== "image") {
      setchangedArticle({ ...changedArticle, [propertyName]: propertyValue });
    } else {
      //setStatusImg({ ...status, img: propertyValue });
    }
  };

  // Queste costanti sono legate al modale dell'inserimento di un nuovo articolo, ho inserito il
  // numero 2 per differenziarle dalle costanti usate per il modale relativo alla modifica dell'articolo

  const handleChange2 = (propertyName, propertyValue) => {
    if (propertyName !== "image") {
      setNewArticle({ ...newArticle, [propertyName]: propertyValue });
    } else {
      //setStatusImg({ ...status, img: propertyValue });
    }
  };

  const handleDelete = () => {
    setCanceled(true);
    dispatch(deleteArticle(props.article.id));
    //setSaved(false);
    // dispatch(getArticlesFetch());
  };

  const handleShowDelete = () => {
    setShow3(false);
    setCanceled(false);
    dispatch(getArticlesFetch());
  };

  const handleClose = () => {
    setShow(false);
    setShow2(false);
    dispatch(getArticlesFetch());
  };

  return (
    <Container
      className={
        isArticleSelected.id === props.article.id ? "d-flex  my-2 p-2 articleSelectedClass" : "d-flex  my-2 p-2"
      }
    >
      {" "}
      <div>
        <Image src={`./assets/${props.article.img}`} width={"60px"} height={"60px"}></Image>
      </div>
      <div className="ms-3 line-clamp mb-2">
        <p className="text-end">
          <Pencil className="mx-2" onClick={handleShow}></Pencil>
          <PlusLg className="mx-2 fs-5 text-success " onClick={setShow2}></PlusLg>
          <Trash3 className="mx-2 text-danger" onClick={setShow3}></Trash3>
        </p>
        <h3 style={{ fontSize: "16px", fontWeight: "500" }} className=" mb-2">
          {props.article.title}
        </h3>

        <p style={{ fontSize: "14px", fontWeight: "400" }} className="mb-0  ">
          {props.article.description}
        </p>
      </div>
      {/* Inizio Modale di modifica */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Articolo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.article && (
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Titolo</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  value={changedArticle?.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                <Form.Label>Descrizione Articolo</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={changedArticle?.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
                <Form.Label>Fonte dell'articolo</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  value={changedArticle?.fonte}
                  onChange={(e) => handleChange("fonte", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
                <Form.Label>Data dell'articolo</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={1}
                  value={changedArticle?.data}
                  onChange={(e) => handleChange("data", e.target.value)}
                />
              </Form.Group>
              {/* <Form.Group className="d-flex flex-column">
              <Form.Label className="mt-2">Allega un'immagine</Form.Label>
              <input type="file" accept="image/*" onChange={(e) => setImage({ image: e.target.files[0] })} />
            </Form.Group> */}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => {
              setShow(false);
              setSaved(false);
              dispatch(getArticlesFetch());
            }}
          >
            Chiudi
          </Button>
          <Button
            variant="outline-success"
            onClick={(e) => {
              dispatch(articleMod(changedArticle));
              e.preventDefault();
              setSaved(true);
              dispatch(getArticlesFetch());
            }}
          >
            Salva Modifiche
          </Button>
          {saved && (
            <Alert className="text-center" key="success" variant="success">
              Salvataggio avvenuto con successo!
            </Alert>
          )}
        </Modal.Footer>
      </Modal>
      {/* Fine Modale di modifica */}
      {/* Inizio Modale di inserimento */}
      <Modal show={show2} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Scrivi un Articolo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Titolo</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                value={newArticle?.title}
                onChange={(e) => handleChange2("title", e.target.value)}
                placeholder="Inserisci il titolo dell'articolo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
              <Form.Label>Descrizione Articolo</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={newArticle?.description}
                onChange={(e) => handleChange2("description", e.target.value)}
                placeholder="Inserisci il contenuto dell'articolo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
              <Form.Label>Fonte dell'articolo</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                value={newArticle?.fonte}
                onChange={(e) => handleChange2("fonte", e.target.value)}
                placeholder="Inserisci la fonte dell'articolo"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
              <Form.Label>Data dell'articolo</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                value={newArticle?.data}
                onChange={(e) => handleChange2("data", e.target.value)}
                placeholder="Inserisci la data dell'articolo"
              />
            </Form.Group>
            {/* <Form.Group className="d-flex flex-column">
              <Form.Label className="mt-2">Allega un'immagine</Form.Label>
              <input type="file" accept="image/*" onChange={(e) => setImage({ image: e.target.files[0] })} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => {
              setShow2(false);
              setSaved(true);
              dispatch(getArticlesFetch());
            }}
          >
            Chiudi
          </Button>
          <Button
            variant="outline-success"
            onClick={(e) => {
              dispatch(saveNewArticle(newArticle));
              e.preventDefault();
              setSaved(true);
              dispatch(getArticlesFetch());
            }}
          >
            Inserisci nuovo articolo
          </Button>
          {saved && (
            <Alert className="text-center" key="success" variant="success">
              Salvataggio avvenuto con successo!
            </Alert>
          )}
        </Modal.Footer>
      </Modal>
      {/* Fine Modale */}
      {/* Alert prima della cancellazione */}
      <Modal show={show3} onHide={handleShowDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Attenzione</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sei sicuro di voler procedere con la cancellazione dell'articolo?</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleShowDelete}>
            Chiudi
          </Button>
          <Button variant="outline-danger" onClick={handleDelete}>
            Elimina
          </Button>
          {canceled && (
            <Alert className="text-center" key="success" variant="success">
              Cancellazione avvenuta con successo!
            </Alert>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default ArticleListAdmin;
