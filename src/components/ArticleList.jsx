import { Container, Image } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const ArticleList = (props) => {
  const isArticleSelected = useSelector((state) => state.getArticles.selectedArticle);
  const dispatch = useDispatch();
  return (
    <Container
      className={
        isArticleSelected.id === props.article.id
          ? "d-flex cardLinkedln my-2 p-2 articleSelectedClass"
          : "d-flex cardLinkedln my-2 p-2"
      }
    >
      <div>
        <Image src={`./assets/${props.article.img}`} width={"56px"} height={"56px"}></Image>
      </div>
      <div className="ms-3">
        <h3 style={{ fontSize: "16px", fontWeight: "500" }} className="text-primary mb-0">
          {props.article.title}
        </h3>
        <p style={{ fontSize: "14px", fontWeight: "500" }} className="mb-0">
          {props.article.description}
        </p>
        {/* <div className="d-flex">
          <span className="mt-4">
            <span style={{ fontSize: "12px" }} className="me-1">
              Promosso
            </span>
            <i className="bi bi-linkedin text-primary me-1 " width={"16px"} height={"16px"}></i>
            <span style={{ fontSize: "12px" }}>Candidatura semplice</span>
          </span>
        </div> */}
      </div>
      <div className="ms-auto">
        <XLg />
      </div>
    </Container>
  );
};
export default ArticleList;
