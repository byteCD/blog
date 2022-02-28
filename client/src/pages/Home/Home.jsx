import { Col, Row } from "react-bootstrap";
import React from "react";
import PostsList from "../../components/PostsList/PostsList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/postActions";
import AboutAuthor from "../../components/AboutAuthor/AboutAuthor";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Row lg="2">
      <Col lg="9">
        <PostsList />
      </Col>
      <Col lg="3">
        <AboutAuthor />
      </Col>
    </Row>
  );
};

export default Home;
