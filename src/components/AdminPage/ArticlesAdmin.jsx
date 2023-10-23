import { useState, useEffect } from "react";
import { Alert, Button, Col, Container, Form, Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { SELECTED_ARTICLE, getArticlesFetch, saveNewArticle } from "../../redux/action";
import ArticleListAdmin from "./ArticleListAdmin";
import ArticleListDescriptionAdmin from "../ArticleListDescription";

const ArticlesAdmin = () => {
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.getArticles?.content);
  const [show2, setShow2] = useState(false);
  const [saved, setSaved] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(false);
  const articleBlank = {
    id: "",
    title: "",
    data: "",
    img: "pexels-taha-samet-arslan-7781900.jpg",
    description: "",
    fonte: "",
  };

  useEffect(() => {
    dispatch(getArticlesFetch());
  }, []);

  const handleArticle = (article) => {
    setSelectedArticle(article);
    dispatch({ type: SELECTED_ARTICLE, payload: article });
  };

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        usenavigate("/login");
      }
    }
  }, [location]);

  const [newArticle, setNewArticle] = useState({
    id: "",
    title: "",
    data: "",
    img: "pexels-taha-samet-arslan-7781900.jpg",
    description: "",
    fonte: "",
  });

  const handleClose = () => {
    setShow2(false);
    dispatch(getArticlesFetch());
  };

  const handleChange2 = (propertyName, propertyValue) => {
    if (propertyName !== "image") {
      setNewArticle({ ...newArticle, [propertyName]: propertyValue });
    } else {
      //setStatusImg({ ...status, img: propertyValue });
    }
  };

  return (
    <div>
      {showmenu && (
        <Container className="d-block d-md-flex mt-3">
          <Col md="5">
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
                    setSaved(false);
                    dispatch(getArticlesFetch());
                    setNewArticle(articleBlank);
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
                    setNewArticle(articleBlank);
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
            {articles &&
              articles.map((article) => (
                <div key={article.id} onClick={() => handleArticle(article)}>
                  <ArticleListAdmin article={article} />
                </div>
              ))}
            <div className="ms-3 line-clamp my-5 text-end">
              <Button variant="secondary" className="align-end" onClick={setShow2}>
                Nuovo articolo
              </Button>
            </div>
          </Col>
          <Col md="7">
            {selectedArticle ? (
              <ArticleListDescriptionAdmin article={selectedArticle} selectedArticle={selectedArticle} />
            ) : (
              <h4 className="ps-5 fw-semibold fst-italic ">Seleziona un articolo per scoprire i dettagli...</h4>
            )}
          </Col>
        </Container>
      )}
    </div>
  );
};

export default ArticlesAdmin;
