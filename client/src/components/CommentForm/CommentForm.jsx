import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addComment, editComment } from "../../redux/actions/commentActions";
import { getPostLink } from "../AppRouter/AppRoutes";
import "./CommentForm.css";

const CommentForm = ({ comment, setShowEdit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [text, setText] = useState(() => (comment ? comment.text : ""));

  const handleComment = () => {
    if (comment) {
      dispatch(
        editComment({
          id: comment._id,
          text: text,
          post: comment.post,
        })
      );

      setShowEdit(false);
    } else {
      dispatch(addComment({ text, post: params.id }));
    }

    navigate(getPostLink(comment ? comment.post : params.id));
    setText("");
  };

  return (
    <div className={!comment ? "CommentForm" : ""}>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3">
          <Form.Label>
            {comment ? "Редактировать комментарий" : "Добавить комментарий"}
          </Form.Label>
          <Form.Control
            className="CommentForm__textarea"
            as="textarea"
            placeholder="Комментарий"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Button
          disabled={!text}
          className="CommentForm__btn"
          variant="outline-primary"
          type="submit"
          onClick={handleComment}
        >
          {comment ? "Редактировать" : "Добавить"}
        </Button>
        {comment && (
          <Button
            variant="outline-secondary"
            type="submit"
            onClick={() => setShowEdit(false)}
          >
            Отмена
          </Button>
        )}
      </Form>
    </div>
  );
};

export default CommentForm;
