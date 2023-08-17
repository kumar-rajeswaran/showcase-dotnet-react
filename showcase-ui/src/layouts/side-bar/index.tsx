import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar vh-100">
      <NavItem>
        <Link className="nav-link" to={"dashboard"}>
          <i className="bi bi-house fs-5 px-1"></i>
          <span>dashboard</span>
        </Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to={"profile"}>
          <i className="bi bi-house fs-5 px-1"></i>
          <span>profile</span>
        </Link>
      </NavItem>
    </Nav>
  );
};
