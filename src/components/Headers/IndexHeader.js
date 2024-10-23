/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

import "./IndexHeader.css";

function IndexHeader() {
  return (
    <div
      className="page-header clear-filter"
      filter-color="blue"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="page-header-image"
        style={{
          backgroundImage: "url(" + require("../../assets/img/bg1.png") + ")",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></div>
      <Container>
        <Row className="hero-content">
          <Col
            md="8"
            className="hero-content"
            style={{
              padding: '2rem',
              color: '#333', // Dark shade, almost black
              textAlign: 'left', // Align text to the left
            }}
          >
            <h1 className="title" style={{ marginBottom: '1rem' }}>Welcome to HiDoc</h1>
            <h4 style={{ marginBottom: '1rem' }}>Your partner in holistic wellness and preventive care</h4>
            <p style={{ marginBottom: '2rem' }}>
              Connect with expert doctors, join supportive forums, and access valuable
              health resources. Take control of your health journey today.
            </p>
            <div className="button-container">
              <Button
                className="btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                Get Started
              </Button>
              <Button
                className="btn-round"
                color="neutral"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IndexHeader;
