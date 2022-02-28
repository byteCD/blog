import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import { Row, Col } from "react-bootstrap";

const SignIn = () => {
  return (
    <Row>
      <Col className="d-flex justify-content-center text-center">
        <SignInForm />
      </Col>
    </Row>
  );
};

export default SignIn;
