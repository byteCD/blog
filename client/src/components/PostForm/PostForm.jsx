import React, { useState } from "react";
import { Button, Col, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost, editPost } from "../../redux/actions/postActions";
import { routes } from "../AppRouter/AppRoutes";
import Error from "../Error/Error";
import TextEditor from "../TextEditor/TextEditor";
import "./PostForm.css";

const PostForm = ({ post }) => {
  const [title, setTitle] = useState(() => (post ? post.title : ""));
  const [text, setText] = useState(() => (post ? post.text : ""));
  const [image, setImage] = useState(() => (post ? post.image : ""));
  const [imagePreview, setImagePreview] = useState("");
  const [category, setCategory] = useState(() =>
    post ? post.category : "Без категории"
  );
  const [textPreview, setTextPreview] = useState(() =>
    post ? post.textPreview : ""
  );
  const [error, setError] = useState("");
  const categories = useSelector((state) => state.postReducer.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePost = () => {
    const data = {
      title,
      textPreview,
      text,
      category,
      image,
    };

    if (post) {
      data.id = post._id;
    }

    if (post) {
      dispatch(editPost(data));
    } else {
      dispatch(addPost(data));
    }

    navigate(routes.home);
  };

  const handleChangeImage = (e) => {
    const newImage = e.target.files[0];

    if (newImage) {
      const reader = new FileReader();

      if (
        newImage.type === "image/png" ||
        newImage.type === "image/jpg" ||
        newImage.type === "image/jpeg"
      ) {
        reader.onloadend = (e) => setImage(e.target.result);
        reader.readAsDataURL(newImage);

        setImage(newImage);
        setError("");
      } else {
        setError("Неверный формат изображения");
      }
    }
  };

  const handleDeleteImage = () => {
    setImage("");
    setImagePreview("");
  };

  return (
    <div className="PostForm">
      <Form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
        <h2>{post ? "Редактировать пост" : "Добавить пост"}</h2>
        {error && <Error error={error} />}
        <Form.Group className="mb-3">
          <Form.Label>Заголовок</Form.Label>
          <Form.Control
            className="PostForm__input"
            type="text"
            placeholder="Заголовок"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Превью</Form.Label>
          <Form.Control
            className="PostForm__textarea"
            as="textarea"
            placeholder="Превью"
            rows={3}
            value={textPreview}
            onChange={(e) => setTextPreview(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Текст</Form.Label>
          <TextEditor text={text} setText={setText} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Изображение</Form.Label>
          <Col>
            {imagePreview && <Image className="mb-3" src={image} fluid />}
            {!imagePreview && image && (
              <Image className="mb-3" src={image} fluid />
            )}
            {(imagePreview || image) && (
              <Button
                className="mb-3"
                variant="outline-danger"
                type="submit"
                onClick={handleDeleteImage}
              >
                Удалить изображение
              </Button>
            )}
          </Col>
          <Form.Control
            className="PostForm__input"
            type="file"
            onChange={handleChangeImage}
          />
        </Form.Group>
        <Form.Select
          className="PostForm__input mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </Form.Select>
        <Button
          disabled={!title || !textPreview || !text || error}
          variant="outline-primary"
          type="submit"
          onClick={handlePost}
        >
          {post ? "Редактировать" : "Добавить"}
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;
