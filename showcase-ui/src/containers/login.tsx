import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSignin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
    }
    const loginParams = {
      email,
      password,
    };
    console.log({ loginParams });
  };
  return (
    <Container>
      <Row>
        <Col lg={4} md={6} sm={6}>
          <Form onSubmit={handleSignin}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="Password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Button type="submit">Login</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
