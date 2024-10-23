import React from "react";
import { Container, Row, Col } from "reactstrap";

function LandingPageHeader() {
    return (
        <>
            <div className="section section-about-us">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">Welcome to Health App</h2>
                            <h5 className="description">
                                Focusing on women's health, children's psychology, and mental health.
                                Our platform connects you with expert doctors, supportive communities,
                                and valuable resources to improve your well-being.
                            </h5>
                        </Col>
                    </Row>
                    <div className="separator separator-primary"></div>
                    <div className="section-story-overview">
                        <Row>
                            <Col md="6">
                                <div
                                    className="image-container image-left"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/img/login.jpg") + ")"
                                    }}
                                >
                                    <p className="blockquote blockquote-info">
                                        "Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity." <br></br>
                                        <br></br>
                                        <small>- World Health Organization</small>
                                    </p>
                                </div>
                            </Col>
                            <Col md="5">
                                <div
                                    className="image-container image-right"
                                    style={{
                                        backgroundImage:
                                            "url(" + require("assets/img/bg1.jpg") + ")"
                                    }}
                                ></div>
                                <h3>Our Services</h3>
                                <p>
                                    Connect with expert doctors specializing in women's health and children's psychology.
                                    Join our supportive forums to discuss mental health and well-being.
                                    Access valuable resources and articles to improve your health knowledge.
                                </p>
                                <p>
                                    Whether you're seeking professional advice, community support, or simply looking to
                                    learn more about health topics, our platform is here to help you on your journey to
                                    better health and wellness.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default LandingPageHeader;
