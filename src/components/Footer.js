import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather';

function Footer() {
    return (
        <footer className="footer" data-background-color="black">
            <Container>
                <Row>
                    <Col md="3">
                        <h5>HIDOC</h5>
                        <p>Expert Care for Women, Children, and Mental Health</p>
                    </Col>
                    <Col md="3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/doctors">Find a Doctor</Link></li>
                            <li><Link to="/articles">Health Articles</Link></li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h5>Legal</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h5>Connect with Us</h5>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="copyright">
                            © {new Date().getFullYear()} HIDOC. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
