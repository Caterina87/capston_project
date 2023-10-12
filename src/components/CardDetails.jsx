import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLawyerFetch } from "../redux/action";
import { useEffect } from "react";
import { FileText, Pen, PersonVideo3, Telephone } from "react-bootstrap-icons";

const CardDetails = () => {
  const lawyer = useSelector((state) => state.getLawyers.lawyer);
  const dispatch = useDispatch();
  const urlParam = useParams();

  useEffect(() => {
    dispatch(getLawyerFetch(urlParam.id));
  }, []);

  return (
    <>
      <Image className="opacity-75 " src="../assets/pexels-bruno-cervera-1431324.jpg" fluid />
      <Container className="my-5">
        <Row>
          <Col>
            <Image className="mb-3" id="ImageDetailsLawyer" src={`../assets/${lawyer.img}`} rounded />
            <h4>{lawyer.name}</h4>
            <h5>{lawyer.qualification}</h5>
            <h6 className="my-5">Competenze</h6>
            <ul className="list-unstyled">
              <li>Successioni, eredità e donazioni,</li>
              <li>Condominio, Diritti reali proprietà, usufrutto, locazioni,</li>
              <li>Responsabilità civile, professionale e assicurazioni,</li>
              <li>Separazioni e Divorzi,</li>
              <li>Diritto della crisi di impresa e della insolvenza,</li>
              <li>Diritto bancario e dei mercati finanziari</li>
              <li>Diritto commerciale e societario</li>
            </ul>
          </Col>

          <Col>
            <h6 className="mt-5 mb-3">Formazione</h6>
            <p> {lawyer.training}</p>
            <h6 className="mt-5 mb-3">Curriculum Vitae</h6>
            <p> {lawyer.biography}</p>
            <h6 className="mt-5 mb-3">Servizi offerti</h6>
            <ul className="list-unstyled lh-lg">
              <li>
                {" "}
                <Pen className="me-2 fs-5 text-danger"></Pen> Consulenza Scritta{" "}
              </li>
              <li>
                {" "}
                <Telephone className="me-2 fs-5 text-danger"></Telephone> Consulenza Telefonica{" "}
              </li>
              <li>
                {" "}
                <PersonVideo3 className="me-2 fs-5 text-danger"></PersonVideo3> Consulenza in Videocall{" "}
              </li>
              <li>
                {" "}
                <FileText className="me-2 fs-5 text-danger"></FileText> Preventivo Gratuito
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardDetails;
