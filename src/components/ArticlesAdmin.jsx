import { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArticleListAdmin from "./ArticleListAdmin";
import ArticleListDescriptionAdmin from "./ArticleListDescription";
import { useDispatch, useSelector } from "react-redux";
import { SELECTED_ARTICLE, getArticlesFetch } from "../redux/action";

const ArticlesAdmin = () => {
  const [displayusername, displayusernameupdate] = useState("");
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.getArticles?.content);

  useEffect(() => {
    dispatch(getArticlesFetch());
  }, []);

  const [selectedArticle, setSelectedArticle] = useState(false);

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
        //usenavigate("/login");
        displayusernameupdate(username);
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location]);

  return (
    <div>
      {showmenu && (
        <Container className="d-block d-md-flex mt-3">
          <Col md="5">
            {articles &&
              articles.map((article) => (
                <div key={article.id} onClick={() => handleArticle(article)}>
                  <ArticleListAdmin article={article} />
                </div>
              ))}
            <p>
              <Link to={"/login"}>Logout</Link>
            </p>
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
