import React from "react";
import "./PostItem.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux/actions/postActions";
import { useNavigate } from "react-router";
import { getEditPostLink, getPostLink } from "../AppRouter/AppRoutes";
import { Col } from "react-bootstrap";

const PostItem = ({ post }) => {
  const isAdmin = useSelector((state) => state.authReducer.isAdmin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeletePost = () => {
    dispatch(deletePost(post._id));
    navigate(`/`);
  };

  return (
    <Col className="PostItem">
      <Card>
        <Card.Body>
          <Card.Title as="h2">{post.title}</Card.Title>
          {post.image && <Card.Img className="mt-3 mb-3" src={post.image} />}
          <Card.Text>{post.textPreview}</Card.Text>
          <div className="PostItem__btns">
            <Button
              className="PostItem__btn"
              variant="outline-primary"
              onClick={() => navigate(getPostLink(post._id))}
            >
              Читать
            </Button>
            {isAdmin && (
              <>
                <Button
                  className="PostItem__btn"
                  variant="outline-secondary"
                  onClick={() => navigate(getEditPostLink(post._id))}
                >
                  Редактировать
                </Button>

                <Button variant="outline-danger" onClick={handleDeletePost}>
                  Удалить
                </Button>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostItem;
