import { Button, Card, Carousel, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="nav-links" href="#home">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="nav-links" href="/login">
                login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://picsum.photos/id/1003/800/300" alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://picsum.photos/id/100/800/300" alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://picsum.photos/800/300" alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Card className="text-center" style={{ border: "none" }}>
        <Container>
          <Card.Header className="mt-3" style={{ border: "none", backgroundColor: "transparent" }}>
            <h2>Featured</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text className="pl-5 pr-5">
              With supporting text below as a natural lead-in to additional content. lorem ootstrap 4 is built with flexbox, but
              not every element’s display has been changed to display: flex as this would add many unnecessary overrides and
              unexpectedly change key browser behaviors. Most of our components are built with flexbox enabled.
            </Card.Text>
            <Button className=" m-1" variant="primary ">
              Go somewhere
            </Button>
            <Button className=" m-1" variant="success">
              Go somewhere
            </Button>
          </Card.Body>
        </Container>
        <hr />
      </Card>
      <Container>
        <h2 className="text-center mt-4">Blog</h2>
        <Row className="justify-content-md-center">
          <Card
            style={{
              width: "20rem",
              margin: "20px 20px",
            }}
          >
            <Card.Img variant="top" src="https://picsum.photos/id/1001/500/500" />
            <Card.Body>
              <Card.Title>Kayaking</Card.Title>
              <Card.Text>
                We deliver a range of courses, taster sessions or adventures for trail running, skyrunning, rock climbing,
                mountain biking, scrambling and more.
              </Card.Text>
              <Button variant="success">Sign Up</Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "20rem",
              margin: "20px 20px",
            }}
          >
            <Card.Img variant="top" src="https://picsum.photos/id/101/500/500" />
            <Card.Body>
              <Card.Title>Tree Climbing</Card.Title>
              <Card.Text>
                Whether you want to learn new skills, improve your knowledge, try something new or enjoy the outdoors, everyone
                deserves adventure.
              </Card.Text>
              <Button variant="danger">Sign Up</Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "20rem",
              margin: "20px 20px",
            }}
          >
            <Card.Img variant="top" src="https://picsum.photos/id/1053/500/500" />
            <Card.Body>
              <Card.Title>Biking</Card.Title>
              <Card.Text>
                Climbing has seen a huge increase in numbers over the last few years. With the majority of people learning on
                artificial climbing walls. Give it shot!
              </Card.Text>
              <Button variant="warning">Sign Up</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
