import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input, Badge, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { Star, Search } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import './DoctorsPage.css'; // Make sure to create this CSS file

// Updated mock data for doctors with web image URLs, availability status, and profile URLs
const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Women's Health",
        description: "Specializing in gynecology and reproductive health with 15 years of experience.",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        rating: 4.8,
        reviews: 120,
        availability: "Available",
        profileUrl: "/doctor/sarah-johnson"
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Child Psychology",
        description: "Expert in child development and behavioral issues with a focus on early intervention.",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        rating: 4.6,
        reviews: 95,
        availability: "Busy",
        profileUrl: "/doctor/michael-chen"
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Mental Health",
        description: "Experienced psychiatrist specializing in anxiety, depression, and stress management.",
        imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        rating: 4.9,
        reviews: 150,
        availability: "Available",
        profileUrl: "/doctor/emily-rodriguez"
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        specialty: "Cardiology",
        description: "Renowned cardiologist with expertise in heart disease prevention and treatment.",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        rating: 4.7,
        reviews: 110,
        availability: "Available",
        profileUrl: "/doctor/james-wilson"
    },
    {
        id: 5,
        name: "Dr. Olivia Patel",
        specialty: "Dermatology",
        description: "Skilled dermatologist specializing in skin cancer detection and cosmetic procedures.",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        rating: 4.8,
        reviews: 130,
        availability: "Busy",
        profileUrl: "/doctor/olivia-patel"
    },
    {
        id: 6,
        name: "Dr. Robert Lee",
        specialty: "Orthopedics",
        description: "Experienced orthopedic surgeon specializing in sports injuries and joint replacements.",
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        rating: 4.9,
        reviews: 140,
        availability: "Available",
        profileUrl: "/doctor/robert-lee"
    }
];

function DoctorCard({ doctor }) {
    const navigate = useNavigate();

    const handleBooking = () => {
        navigate(`/doctor/${doctor.id}/book`);
    };

    return (
        <Card className="doctor-card">
            <div className="doctor-card-image-container">
                <img className="doctor-card-image" alt={doctor.name} src={doctor.imageUrl} />
            </div>
            <CardBody>
                <CardTitle tag="h4" className="card-title">{doctor.name}</CardTitle>
                <CardSubtitle tag="h6" className="category text-info">{doctor.specialty}</CardSubtitle>
                <div className="card-description">
                    <div className="star-rating">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                fill={i < Math.floor(doctor.rating) ? "#f1c40f" : "none"}
                                stroke="#f1c40f"
                                size={16}
                            />
                        ))}
                        <span className="ml-2">{doctor.rating} ({doctor.reviews} reviews)</span>
                    </div>
                    <Badge color={doctor.availability === "Available" ? "success" : "warning"} pill>
                        {doctor.availability}
                    </Badge>
                </div>
                <CardText>{doctor.description}</CardText>
                <div className="button-container">
                    <Button
                        className="btn-round"
                        color="info"
                        onClick={handleBooking}
                        block
                    >
                        Book Appointment
                    </Button>
                    <Button
                        className="btn-round"
                        color="primary"
                        tag={Link}
                        to={`/doctor/${doctor.id}`}
                        block
                    >
                        View Profile
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

function DoctorsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);

    useEffect(() => {
        const filtered = doctors.filter(
            (doctor) =>
                doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDoctors(filtered);
    }, [searchTerm]);

    return (
        <div className="section">
            <Container>
                <h2 className="title text-center">Our Expert Doctors</h2>
                <Row className="justify-content-center">
                    <Col md="6">
                        <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Search className="now-ui-icons ui-1_zoom-bold" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Search doctors by name or specialty"
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    {filteredDoctors.map((doctor) => (
                        <Col md="4" key={doctor.id}>
                            <DoctorCard doctor={doctor} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default DoctorsPage;
