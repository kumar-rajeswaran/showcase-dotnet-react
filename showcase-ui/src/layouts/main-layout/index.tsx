import { SideBar, TopBar } from "layouts";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <>
      <TopBar />
      <Container fluid>
        <Row>
          <SideBar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </Row>
      </Container>
    </>
  );
};
