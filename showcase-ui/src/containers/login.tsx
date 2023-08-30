import { useEffect, useState } from "react";
import { Alert, Button, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogin } from "reducers";
import { IStore } from "types";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, error, isFetching } = useSelector((state: IStore) => state.auth);
  useEffect(() => {
    if (user && user.token) {
      navigate("/me");
    }
  }, [navigate, user]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="my-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter your Email"
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
          {!isFetching ? (
            <Form.Group className="my-3 d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form.Group>
          ) : null}
          {error != null ? <Alert variant="danger">{error}</Alert> : null}
        </Form>
      </Row>
    </Container>
  );
}

export default Login;
