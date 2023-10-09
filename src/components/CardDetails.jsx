import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLawyerFetch } from "../redux/action";
import { useEffect } from "react";

const CardDetails = () => {
  const lawyer = useSelector((state) => state.getLawyers.lawyer);
  const dispatch = useDispatch();
  const urlParam = useParams();

  useEffect(() => {
    dispatch(getLawyerFetch(urlParam.id));
  }, []);

  return (
    <>
      <Image className="opacity-75" src="../assets/pexels-bruno-cervera-1431324.jpg" fluid />
      <Container className="my-5">
        <Row>
          <Col>
            <Image id="ImageDetailsLawyer" src={`../assets/${lawyer.img}`} roundedCircle />
            <p>Avv. {lawyer.name}</p>
            <span>Specializzato in ...........................</span>
          </Col>

          <Col>
            <h6>Curriculum Vitae</h6>
            <p> {lawyer.biography}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CardDetails;
