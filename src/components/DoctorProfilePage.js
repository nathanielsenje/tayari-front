import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import { Star, Clock, MapPin, Phone, Mail } from 'react-feather';
import axios from 'axios';

function DoctorProfilePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modal, setModal] = useState(false);
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/doctor/${id}`);
                setDoctor(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch doctor data');
                setLoading(false);
                console.error('Error fetching doctor:', err);
            }
        };

        fetchDoctor();
    }, [id]);

    const toggleModal = () => setModal(!modal);

    const handleBooking = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1337/booking', {
                doctorId: doctor.id,
                date: appointmentDate,
                time: appointmentTime
            });
            console.log('Appointment booked:', response.data);
            toggleModal();
            // You can add a success message or redirect the user here
        } catch (err) {
            console.error('Error booking appointment:', err);
            // You can add an error message here
        }
    };

    const handleBookingNavigate = () => {
        navigate(`/doctor/${doctor.id}/book`);
    };

    if (loading) {
        return (
            <div className="section">
                <Container>
                    <div className="text-center">Loading...</div>
                </Container>
            </div>
        );
    }

    if (error || !doctor) {
        return (
            <div className="section">
                <Container>
                    <div className="text-center text-danger">
                        {error || "Doctor not found"}
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="section">
            <Container>
                <Row>
                    <Col md="4">
                        <Card className="card-profile card-plain">
                            <div className="card-avatar">
                                <img
                                    alt={doctor.name}
                                    src={doctor.image_url}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <CardBody>
                                <CardTitle tag="h3">{doctor.name}</CardTitle>
                                <h6 className="category text-info">{doctor.specialization}</h6>
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
                                <Badge color={doctor.availability === "true" ? "success" : "warning"} className="mb-3">
                                    {doctor.availability === "true" ? "Available" : "Busy"}
                                </Badge>
                                <Button color="info" className="btn-round" block onClick={handleBookingNavigate}>
                                    Make Booking
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="8">
                        <Card className="card-plain">
                            <CardBody>
                                <h2 className="mb-3">{doctor.name}</h2>
                                <CardText>{doctor.description}</CardText>
                                <h4 className="mt-5 mb-3">Education and Experience</h4>
                                <p><strong>Education:</strong> {doctor.education}</p>
                                <p><strong>Experience:</strong> {doctor.experience} years</p>
                                <h4 className="mt-5 mb-3">Contact Information</h4>
                                <p><MapPin size={18} className="mr-2" />{doctor.location}</p>
                                <p><Phone size={18} className="mr-2" />{doctor.phone}</p>
                                <p><Mail size={18} className="mr-2" />{doctor.email}</p>
                                <p><Clock size={18} className="mr-2" />{doctor.working_hours}</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Book Appointment with {doctor.name}</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleBooking}>
                        <FormGroup>
                            <Label for="appointmentDate">Date</Label>
                            <Input
                                type="date"
                                name="appointmentDate"
                                id="appointmentDate"
                                value={appointmentDate}
                                onChange={(e) => setAppointmentDate(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="appointmentTime">Time</Label>
                            <Input
                                type="time"
                                name="appointmentTime"
                                id="appointmentTime"
                                value={appointmentTime}
                                onChange={(e) => setAppointmentTime(e.target.value)}
                                required
                            />
                        </FormGroup>
                        <Button color="primary" type="submit">Book Appointment</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default DoctorProfilePage;
