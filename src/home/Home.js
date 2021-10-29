import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import HomeRoutes from "../hoc/Home.route";

import "./../home/Home.css";

function Home() {
  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <HomeRoutes></HomeRoutes>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Home;
