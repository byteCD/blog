import React from "react";
import { Col, Row } from "react-bootstrap";
import PostForm from "../../components/PostForm/PostForm";

const AddPost = () => {
  return (
    <Row>
      <Col>
        <PostForm />
      </Col>
    </Row>
  );
};

export default AddPost;
