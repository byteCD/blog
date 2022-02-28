import React from "react";
import { useSelector } from "react-redux";
import PostItem from "../PostItem/PostItem";
import { Col } from "react-bootstrap";
import "./PostsList.css";

const PostsList = () => {
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <Col className="PostsList">
      {posts.length === 0 && <h5>Постов нет</h5>}
      {posts.length > 0 &&
        posts.map((post) => <PostItem key={post._id} post={post} />).reverse()}
    </Col>
  );
};

export default PostsList;
