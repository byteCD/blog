import React from "react";
import "./CommentItem.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { deleteComment } from "../../redux/actions/commentActions";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { getPostLink, getUserLink, routes } from "../AppRouter/AppRoutes";
import CommentForm from "../CommentForm/CommentForm";

const CommentItem = ({ comment }) => {
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const { user, isAdmin } = useSelector((state) => state.authReducer);
  const commentAuthor = user?.id === comment?.user?._id;
  const commentDate = new Date(comment?.createdAt).toLocaleString();

  const handleDeleteComment = () => {
    dispatch(
      deleteComment({
        id: comment?._id,
        post: comment?.post,
        user: comment?.user?._id,
      })
    );
  };

  return (
    <Col className="CommentItem">
      <Col className="CommentItem__user">
        <Link
          className="CommentItem__link"
          to={commentAuthor ? routes.profile : getUserLink(comment?.user?._id)}
        >
          <span className="CommentItem__username">{comment.user.username}</span>
        </Link>
        <span>{commentDate}</span>
      </Col>
      {!showEdit && <p>{comment.text}</p>}
      {showEdit && <CommentForm comment={comment} setShowEdit={setShowEdit} />}
      {(commentAuthor || isAdmin) && !showEdit && (
        <>
          <Button
            className="CommentItem__btn"
            variant="outline-secondary"
            type="submit"
            onClick={() => setShowEdit(true)}
          >
            Редактировать
          </Button>
          <Button
            variant="outline-danger"
            type="submit"
            to={getPostLink(comment.post)}
            onClick={handleDeleteComment}
          >
            Удалить
          </Button>
        </>
      )}
    </Col>
  );
};

export default CommentItem;
