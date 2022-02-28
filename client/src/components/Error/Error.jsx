import React from "react";
import { Alert, Col } from "react-bootstrap";
import "./Error.css";

const Error = ({ error }) => {
  return (
    <Col className="Error">
      <Alert variant="danger">
        <h5>{error}</h5>
      </Alert>
    </Col>
  );
};

export default Error;
