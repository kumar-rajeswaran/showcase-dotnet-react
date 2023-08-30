import { useEffect } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { doLogout } from "reducers";
import { IStore } from "types";

export const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((x: IStore) => x.auth.user);
  useEffect(() => {
    if (user && !user.token) {
      navigate("/login");
    }
  }, [navigate, user]);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={user.firstName} id="profile-dropdown">
              <Link to="profile" className="dropdown-item">
                Profile
              </Link>
              <NavDropdown.Divider />
              <div onClick={() => dispatch(doLogout())}>Logout</div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
