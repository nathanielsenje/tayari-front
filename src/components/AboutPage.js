import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import './AboutPage.css';

// Import SVG illustrations
import ChatSVG from '../assets/img/illustrations/chat.svg';
import CommunitySVG from '../assets/img/illustrations/community.svg';
import DoctorsSVG from '../assets/img/illustrations/doctors.svg';
import ForumSVG from '../assets/img/illustrations/forum.svg';
import LifestyleSVG from '../assets/img/illustrations/lifestyle.svg';
import MedicineSVG from '../assets/img/illustrations/medicine.svg';
import Testimonial1 from '../assets/img/testimonial1.jpg';
import Testimonial2 from '../assets/img/testimonial2.jpg';
import Testimonial3 from '../assets/img/testimonial3.jpg';


const testimonials = [
    {
        quote: "HiDoc made finding a specialist so easy. I got the care I needed quickly and efficiently.",
        author: "Sarah M.",
        image: Testimonial2
    },
    {
        quote: "The community forums on HiDoc have been a great source of support during my health journey.",
        author: "John D.",
        image: Testimonial3
    },
    {
        quote: "As a doctor, HiDoc has helped me connect with patients who truly need my expertise.",
        author: "Dr. Emily R.",
        image: Testimonial1
    }
];

const solutions = [
    {
        title: "Easy Access to Healthcare",
        description: "HiDoc addresses the challenges in modern healthcare through a multi-faceted approach. By leveraging technology, we've created a platform that brings healthcare to your fingertips.",
        image: MedicineSVG
    },
    {
        title: "Community Support",
        description: "Beyond connecting patients with doctors, HiDoc fosters a supportive community through our forums. Here, individuals can share experiences, seek advice, and find emotional support.",
        image: ForumSVG
    },
    {
        title: "Health Education",
        description: "HiDoc is committed to health education. Our curated articles, written by medical professionals, provide reliable, up-to-date information on a wide range of health topics.",
        image: LifestyleSVG
    }
];

const AboutPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    return (
        <div className="about-page">
            <section className="importance-section">
                <Container>
                    <h2>
                        HiDoc is <span className="highlight blue">revolutionizing</span> healthcare by bridging the gap between <span className="highlight green">patients</span> and <span className="highlight orange">medical professionals</span>. In an era where access to <span className="highlight purple">quality healthcare</span> is more crucial than ever, HiDoc stands as a beacon of <span className="highlight red">innovation</span>, providing seamless connections to expert care, fostering <span className="highlight yellow">community support</span>, and empowering individuals with vital health information.
                    </h2>
                </Container>
            </section>

            <section className="solution-section">
                <Container>
                    <h2>How HiDoc <span className="highlight yellow">Solves</span> the Problem</h2>
                    {solutions.map((solution, index) => (
                        <Row className="mb-5" key={index}>
                            <Col md={10} className="mx-auto">
                                <div className="solution-item">
                                    <Row className="align-items-center">
                                        <Col md={9}>
                                            <div className="solution-content">
                                                <h3>
                                                    <span className={`highlight ${index === 0 ? 'blue' :
                                                        index === 1 ? 'green' : 'purple'
                                                        }`}>
                                                        {solution.title}
                                                    </span>
                                                </h3>
                                                <p>{solution.description}</p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className="solution-image-wrapper">
                                                <img
                                                    src={solution.image}
                                                    alt={solution.title}
                                                    className="solution-image"
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </section>

            <section className="testimonials-section">
                <Container>
                    <h2>HiDoc <span className="highlight purple">Testimonials</span></h2>
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                            <Carousel
                                activeIndex={activeIndex}
                                next={next}
                                previous={previous}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem
                                        key={index}
                                        onExiting={() => setAnimating(true)}
                                        onExited={() => setAnimating(false)}
                                    >
                                        <div className="carousel-inner-content">
                                            <Row className="align-items-center">
                                                <Col xs="3">
                                                    <div className="testimonial-image">
                                                        <img
                                                            src={testimonial.image}
                                                            alt={testimonial.author}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col xs="9">
                                                    <blockquote className="text-left">
                                                        <p className="description">
                                                            {testimonial.quote}
                                                        </p>
                                                        <footer className="blockquote-footer">
                                                            {testimonial.author}
                                                        </footer>
                                                    </blockquote>
                                                </Col>
                                            </Row>
                                        </div>
                                    </CarouselItem>
                                ))}
                                <a
                                    className="carousel-control-prev"
                                    data-slide="prev"
                                    href="#pablo"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        previous();
                                    }}
                                    role="button"
                                >
                                    <i className="now-ui-icons arrows-1_minimal-left"></i>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    data-slide="next"
                                    href="#pablo"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        next();
                                    }}
                                    role="button"
                                >
                                    <i className="now-ui-icons arrows-1_minimal-right"></i>
                                </a>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="principles-section">
                <Container>
                    <h2>HiDoc <span className="highlight orange">Principles</span></h2>
                    <Row>
                        {[
                            { icon: ChatSVG, title: "Patient-Centric Care", color: "#e74c3c" },
                            { icon: CommunitySVG, title: "Data Privacy", color: "#3498db" },
                            { icon: DoctorsSVG, title: "Accessibility", color: "#f1c40f" },
                            { icon: ForumSVG, title: "Innovation", color: "#9b59b6" },
                            { icon: LifestyleSVG, title: "Empathy", color: "#2ecc71" },
                            { icon: MedicineSVG, title: "Excellence", color: "#e67e22" }
                        ].map((principle, index) => (
                            <Col md={4} key={index}>
                                <div className="principle-item">
                                    <img src={principle.icon} alt={principle.title} className="principle-icon" />
                                    <h4>{principle.title}</h4>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="contact-section">
                <Container>
                    <h2><span className="highlight yellow">Talk to</span> HiDoc</h2>
                    <Row className="align-items-center">
                        <Col md={4} className="contact-illustration">
                            <img 
                                src={ChatSVG} 
                                alt="Contact Illustration" 
                                className="contact-image"
                            />
                        </Col>
                        <Col md={8}>
                            <div className="contact-form">
                                <Form>
                                    <FormGroup>
                                        <Label for="name">Name</Label>
                                        <Input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            placeholder="Your Name" 
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Your Email" 
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="message">Message</Label>
                                        <Input 
                                            type="textarea" 
                                            name="message" 
                                            id="message" 
                                            placeholder="Your Message" 
                                            rows="5"
                                        />
                                    </FormGroup>
                                    <Button 
                                        className="btn-round"
                                        color="info"
                                        size="lg"
                                        block
                                    >
                                        Send Message
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default AboutPage;
