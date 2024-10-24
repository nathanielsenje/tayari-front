import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input, Badge, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { Star, User, Calendar, Search } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DoctorsPage.css'; // Make sure to create this CSS file

function DoctorCard({ doctor }) {
    const navigate = useNavigate();

    const handleBooking = () => {
        navigate(`/doctor/${doctor.id}/book`);
    };

    return (
        <Card className="doctor-card">
            <div className="doctor-card-image-container">
                <img className="doctor-card-image" alt={doctor.name} src={doctor.image_url} />
            </div>
            <CardBody>
                <CardTitle tag="h4" className="card-title">{doctor.name}</CardTitle>
                <CardSubtitle tag="h6" className="category text-info">{doctor.specialization}</CardSubtitle>
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
                    <Badge color={doctor.availability === "true" ? "success" : "warning"} pill>
                        {doctor.availability === "true" ? "Available" : "Busy"}
                    </Badge>
                </div>
                <CardText>{doctor.description}</CardText>
                <div className="button-container">
                    <Button
                        className="btn-round"
                        color="info"
                        onClick={handleBooking}
                        size="sm"
                    >
                        <Calendar size={14} /> Book Appointment
                    </Button>
                    <Button
                        className="btn-round"
                        color="primary"
                        tag={Link}
                        to={`/doctor/${doctor.id}`}
                        size="sm"
                    >
                        <User size={14} /> View Profile
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

function DoctorsPage() {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost:1337/doctor');
                setDoctors(response.data);
                setFilteredDoctors(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch doctors data');
                setLoading(false);
                console.error('Error fetching doctors:', err);
            }
        };

        fetchDoctors();
    }, []);

    useEffect(() => {
        const filtered = doctors.filter(
            (doctor) =>
                doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredDoctors(filtered);
    }, [searchTerm, doctors]);

    if (loading) {
        return (
            <div className="section">
                <Container>
                    <div className="text-center">Loading...</div>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="section">
                <Container>
                    <div className="text-center text-danger">{error}</div>
                </Container>
            </div>
        );
    }

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
