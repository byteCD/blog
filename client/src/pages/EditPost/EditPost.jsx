import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../redux/actions/postActions";
import { useParams } from "react-router";
import PostForm from "../../components/PostForm/PostForm";
import Loader from "../../components/Loader/Loader";

const EditPost = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { post, postLoaded } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getPost(params.id));
  }, []);

  return (
    <Row>
      <Col>
        {postLoaded && <Loader />}
        {!postLoaded && <PostForm post={post} />}
      </Col>
    </Row>
  );
};

export default EditPost;
