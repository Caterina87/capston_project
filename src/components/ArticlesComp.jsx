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
      <Image className="opacity-75 " src="../assets/pexels-cqfavocat-613508.jpg" fluid />
      <Container className="d-flex mt-3" style={{ height: "calc(100vh - 104px)", overflow: "auto" }}>
        <Col xs="12" md="5" style={{ height: "calc(100vh - 128px)", overflow: "auto" }}>
          {articles &&
            articles.map((article) => (
              <div key={article.id} onClick={() => handleArticle(article)}>
                <ArticleList article={article} />
              </div>
            ))}
        </Col>
        <Col xs="none" md="7" style={{ height: "calc(100vh - 128px)", overflow: "auto" }}>
          {selectedArticle ? (
            <ArticleListDescription article={selectedArticle} selectedArticle={selectedArticle} />
          ) : (
            <h3 className="ps-5">Scegli una news per vedere la descrizione</h3>
          )}
        </Col>
      </Container>
    </>
  );
};

export default ArticleComp;
