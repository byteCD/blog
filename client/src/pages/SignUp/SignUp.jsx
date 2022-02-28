import React from "react";
import { Row, Col } from "react-bootstrap";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignUp = () => {
  return (
    <Row>
      <Col className="d-flex justify-content-center text-center">
        <SignUpForm />
      </Col>
    </Row>
  );
};

export default SignUp;
