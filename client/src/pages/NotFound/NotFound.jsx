import React from "react";
import { Col, Row } from "react-bootstrap";
import Error from "../../components/Error/Error";

const NotFound = () => {
  return (
    <Row>
      <Col>
        <Error error="Страница не найдена" />
      </Col>
    </Row>
  );
};

export default NotFound;
