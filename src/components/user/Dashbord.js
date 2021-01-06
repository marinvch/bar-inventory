import React from "react";
import UserChart from "./UserChart";
import { Container, Row, Col } from "react-bootstrap";

import UserNavigation from "../UserNavigation";

export default function Dashbord() {
  return (
    <Container fluid>
      <Row>
        <Col xs lg="2">
          <UserNavigation />
        </Col>
        <Col xs lg="10">
          <UserChart />
        </Col>
      </Row>
    </Container>
  );
}
