import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/actions/postActions";
import { useParams } from "react-router";
import PostForm from "../../components/PostForm/PostForm";

const EditPost = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const post = useSelector((state) => state.postReducer.post);

  useEffect(() => {
    dispatch(getPost(params.id));
  }, []);

  return (
    Object.keys(post).length !== 0 && (
      <Row>
        <Col>
          <PostForm post={post} />
        </Col>
      </Row>
    )
  );
};

export default EditPost;
