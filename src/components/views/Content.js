import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../../styles/main.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

export default function Content() {
  return (
    <Container fluid>
      <Row className="content d-flex">
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img className="card-img" variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img className="card-img" variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ width: "18rem" }}>
            <Card.Img className="card-img" src={img3} variant="top" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}
