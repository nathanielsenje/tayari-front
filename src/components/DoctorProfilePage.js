import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, Badge } from "reactstrap";
import { Star, Clock, MapPin, Phone, Mail } from 'react-feather';

// This would typically come from an API call based on the doctor's ID
const getDoctorById = (id) => {
    // For now, we'll use the mock data from DoctorsPage
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
            education: "MD from Johns Hopkins University",
            experience: "15 years",
            location: "123 Health St, Medical City, MC 12345",
            phone: "+1 (123) 456-7890",
            email: "dr.sarah@healthapp.com",
            workingHours: "Mon-Fri: 9AM-5PM"
        },
        // ... add other doctors here
    ];
    return doctors.find(doctor => doctor.id === parseInt(id));
};

function DoctorProfilePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const doctor = getDoctorById(id);

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    const handleBooking = () => {
        navigate(`/doctor/${id}/book`);
    };

    return (
        <div className="section">
            <Container>
                <Row>
                    <Col md="4">
                        <Card className="card-profile card-plain">
                            <div className="card-avatar">
                                <img alt={doctor.name} src={doctor.imageUrl} style={{ width: '100%', height: 'auto' }} />
                            </div>
                            <CardBody>
                                <CardTitle tag="h3">{doctor.name}</CardTitle>
                                <h6 className="category text-info">{doctor.specialty}</h6>
                                <div className="star-rating mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            fill={i < Math.floor(doctor.rating) ? "#f1c40f" : "none"}
                                            stroke="#f1c40f"
                                            size={20}
                                        />
                                    ))}
                                    <span className="ml-2">{doctor.rating} ({doctor.reviews} reviews)</span>
                                </div>
                                <Badge color={doctor.availability === "Available" ? "success" : "warning"} className="mb-3">
                                    {doctor.availability}
                                </Badge>
                                <Button color="info" className="btn-round" block onClick={handleBooking}>
                                    Book Appointment
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="8">
                        <Card className="card-plain">
                            <CardBody>
                                <h3 className="mb-3">About {doctor.name}</h3>
                                <CardText>{doctor.description}</CardText>
                                <h4 className="mt-5 mb-3">Education and Experience</h4>
                                <p><strong>Education:</strong> {doctor.education}</p>
                                <p><strong>Experience:</strong> {doctor.experience}</p>
                                <h4 className="mt-5 mb-3">Contact Information</h4>
                                <p><MapPin size={18} className="mr-2" />{doctor.location}</p>
                                <p><Phone size={18} className="mr-2" />{doctor.phone}</p>
                                <p><Mail size={18} className="mr-2" />{doctor.email}</p>
                                <p><Clock size={18} className="mr-2" />{doctor.workingHours}</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DoctorProfilePage;
