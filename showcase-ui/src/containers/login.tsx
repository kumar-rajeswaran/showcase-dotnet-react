import { FormEvent, useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogin } from "reducers";
import { IStore } from "types";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: IStore) => state.auth.user);
  const isFetching = useSelector((state: IStore) => state.auth.isFetching);
  useEffect(() => {
    if (user && user.token) {
      navigate("/me");
    }
  }, [navigate, user]);
  const handleSubmit = () => {
    dispatch(
      doLogin({
        Email: username,
        Password: password,
      })
    );
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Form.Group className="my-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="my-3 d-flex justify-content-end">
          <Button variant="primary" onClick={() => handleSubmit()}>
            Login
          </Button>
        </Form.Group>
        <span>{isFetching ? "loading" : null}</span>
      </Row>
    </Container>
  );
}

export default Login;
