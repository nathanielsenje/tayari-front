/*eslint-disable*/
import React from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "../../assets/img/linear-light.png"; // Make sure this path is correct

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row className="align-items-center">
          <Col xs="6" className="text-left">
            <img src={logo} alt="HiDoc Logo" className="footer-logo" style={{ height: '30px' }} />
          </Col>
          <Col xs="6" className="text-right">
            <div className="copyright" id="copyright">
              © {new Date().getFullYear()} HiDoc
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
