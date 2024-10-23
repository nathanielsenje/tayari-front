import React from "react";
import { Container, Row, Col } from "reactstrap";

function LandingPage() {
    return (
        <>
            <div className="section section-about-us">
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 className="title">Welcome to HiDoc</h2>
                            <h5 className="description">
                                Focusing on women's health, children's psychology, and mental health.
                                Our platform connects you with expert doctors, supportive communities,
                                and valuable resources to improve your well-being.
                            </h5>
                        </Col>
                    </Row>
                    {/* ... (rest of the code) */}
                </Container>
            </div>
        </>
    );
}

export default LandingPage;
