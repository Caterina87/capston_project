import { Container, Image } from "react-bootstrap";

const ArticleListDescription = (props) => {
  function createMarkup() {
    return { __html: props.article?.description };
  }

  return (
    <Container>
      <Image src="../assets/pexels-julio-nery-1687147.jpg" fluid rounded />
      <div className=" my-2 ms-3 p-2">
        <h3 className="mb-3" style={{ fontSize: "27px" }}>
          {props.article?.title}
        </h3>

        <div className="lh-base mb-2" dangerouslySetInnerHTML={createMarkup()} />
        <div className="d-flex justify-content-between">
          <span className="text-muted"> Fonte: {props.article?.fonte}</span>
          <span className="text-muted"> Data: {props.article?.data}</span>
        </div>
      </div>
    </Container>
  );
};
export default ArticleListDescription;
