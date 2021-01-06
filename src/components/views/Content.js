import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../../styles/main.css";

export default function Content() {
  return (
    <Container fluid>
      <Row className="content d-flex">
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className="card-img"
              variant="top"
              src="holder.js/100px180"
            />
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
          <Card classname="card" style={{ width: "18rem" }}>
            <Card.Img
              className="card-img"
              variant="top"
              src="holder.js/100px180"
            />
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
            <Card.Img
              className="card-img"
              variant="top"
              src="holder.js/100px180"
            />
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
    </Container>
  );
}
