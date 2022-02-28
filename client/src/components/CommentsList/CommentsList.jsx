import React from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import CommentItem from "../CommentItem/CommentItem";
import "./CommentsList.css";

const CommentsList = () => {
  const comments = useSelector((state) => state.commentReducer.comments);

  return (
    <Col className="CommentsList">
      <h4>Комментарии</h4>
      {comments.length > 0 &&
        comments
          .map((comment) => <CommentItem key={comment._id} comment={comment} />)
          .reverse()}
      {comments.length === 0 && <h5>Комментариев нет</h5>}
    </Col>
  );
};

export default CommentsList;
