import React from "react";
import UserNavigation from "../UserNavigation";
import { Container, Row, Col } from "react-bootstrap";

export default function Status() {
  return (
    <Container fluid>
      <Row>
        <Col xs lg="2">
          <UserNavigation />
        </Col>
        <Col xs lg="10">
         USER
        </Col>
      </Row>
    </Container>
  );
}
