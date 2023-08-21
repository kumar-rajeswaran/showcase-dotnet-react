import { NavBar, SideMenu } from "layouts";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <SideMenu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </Row>
      </Container>
    </>
  );
};
