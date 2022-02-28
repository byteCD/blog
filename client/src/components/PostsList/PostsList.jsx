import React from "react";
import { useSelector } from "react-redux";
import PostItem from "../PostItem/PostItem";
import { Col } from "react-bootstrap";
import "./PostsList.css";
import Loader from "../Loader/Loader";

const PostsList = () => {
  const { posts, postsLoaded } = useSelector((state) => state.postReducer);

  return (
    <Col className="PostsList">
      {postsLoaded && <Loader />}
      {!postsLoaded && (
        <>
          {posts.length === 0 && <h5>Постов нет</h5>}
          {posts.length > 0 &&
            posts
              .map((post) => <PostItem key={post._id} post={post} />)
              .reverse()}
        </>
      )}
    </Col>
  );
};

export default PostsList;
