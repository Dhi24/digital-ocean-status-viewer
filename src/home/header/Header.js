import React from "react";
import { Row, Col } from "react-bootstrap";

import "./../header/Header.css";

function Header(props) {
  return (
    <header>
      <Row>
        <Col>
          <span className="p-2">Digital Ocean Status Viewer</span>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
