import { useEffect, useState } from "react";
import { Col, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ArticleList from "./ArticleList";
import ArticleListDescription from "./ArticleListDescription";
import { SELECTED_ARTICLE, getArticlesFetch } from "../redux/action";

const ArticleComp = () => {
  const articles = useSelector((state) => state.getArticles?.content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesFetch());
  }, []);

  const [selectedArticle, setSelectedArticle] = useState(false);

  const handleArticle = (article) => {
    setSelectedArticle(article);
    dispatch({ type: SELECTED_ARTICLE, payload: article });
  };

  return (
    <>
      <Image className=" d-none d-md-block opacity-75 " src="../assets/pexels-pavel-danilyuk-8111853.jpg" fluid />
      <Container className="d-block d-md-flex mt-3">
        <Col md="5">
          {articles &&
            articles.map((article) => (
              <div key={article.id} onClick={() => handleArticle(article)}>
                <ArticleList article={article} />
              </div>
            ))}
        </Col>
        <Col md="7">
          {selectedArticle ? (
            <ArticleListDescription article={selectedArticle} selectedArticle={selectedArticle} />
          ) : (
            <h4 className="ps-5 fw-semibold fst-italic ">Seleziona un articolo per scoprire i dettagli...</h4>
          )}
        </Col>
      </Container>
    </>
  );
};

export default ArticleComp;
