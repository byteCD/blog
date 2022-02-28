import React, { useState } from "react";
import "./SignInForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../redux/actions/authActions";
import Error from "../Error/Error";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.errorReducer.signInError);

  const handleSignIn = () => dispatch(signIn({ username, password }));

  return (
    <div className="SignInForm">
      <Form onSubmit={(e) => e.preventDefault()}>
        <h2>Вход</h2>
        {error && <Error error={error} />}
        <Form.Group className="mb-3">
          <Form.Control
            className="SignInForm__input"
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            className="SignInForm__input"
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
          onClick={handleSignIn}
        >
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default SignInForm;
