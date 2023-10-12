import { Button } from "react-bootstrap";
import { Link, Linkedin } from "react-bootstrap-icons";

const ArticleListDescription = (props) => {
  function createMarkup() {
    return { __html: props.article?.description };
  }

  return (
    <div id="lavoroetlavora" className="cardLinkedln my-2 ms-3 p-3">
      <Link to={"#"} className="text-decoration-none text-black">
        <h3 style={{ fontSize: "24px" }}>{props.article?.title}</h3>
      </Link>

      {/* <div className="d-flex gap-2 my-3">
        <Button className="rounded-pill" style={{ fontWeight: "600" }}>
          <Linkedin className="mb-1 me-2" />
          Candidatura Semplice
        </Button>
        <Button
          className="rounded-pill text-primary bg-transparent"
          style={{ border: "1.5px solid", fontWeight: "600" }}
        >
          Salva
        </Button>
      </div> */}
      <p className="fw-semibold" style={{ fontSize: "20px" }}>
        {props.article?.title}
      </p>
      <div className="fw-light" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};
export default ArticleListDescription;
