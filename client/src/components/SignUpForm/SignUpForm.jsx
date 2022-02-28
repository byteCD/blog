import React, { useState } from "react";
import "./SignUpForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/actions/authActions";
import Error from "../Error/Error";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errorReducer.signUpError);

  const handleSignUp = () => dispatch(signUp({ username, password }));

  return (
    <div className="SignUpForm">
      <Form onSubmit={(e) => e.preventDefault()}>
        <h2>Регистрация</h2>
        {error && <Error error={error} />}
        <Form.Group className="mb-3">
          <Form.Control
            className="SignUpForm__input"
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className="SignUpForm__input"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          disabled={!username || !password}
          variant="outline-primary"
          type="submit"
          onClick={handleSignUp}
        >
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  );
};

export default SignUpForm;
