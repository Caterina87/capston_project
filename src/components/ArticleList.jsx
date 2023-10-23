import { Container, Image } from "react-bootstrap";

import { useSelector } from "react-redux";

const ArticleList = (props) => {
  const isArticleSelected = useSelector((state) => state.getArticles.selectedArticle);

  return (
    <Container
      className={
        isArticleSelected.id === props.article.id ? "d-flex  my-2 p-2 articleSelectedClass" : "d-flex  my-2 p-2"
      }
    >
      <div>
        <Image src={`./assets/articoli/${props.article.img}`} width={"60px"} height={"60px"}></Image>
      </div>
      <div className="ms-3 line-clamp mb-2">
        <h3 style={{ fontSize: "16px", fontWeight: "500" }} className=" mb-2">
          {props.article.title}
        </h3>
        <p style={{ fontSize: "14px", fontWeight: "400" }} className="mb-0  ">
          {props.article.description}
        </p>
      </div>
      <div className="ms-auto"></div>
    </Container>
  );
};
export default ArticleList;
