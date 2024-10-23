import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// This would typically come from an API call based on the doctor's ID
const getDoctorById = (id) => {
    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            specialty: "Women's Health",
            imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
        // ... other doctors ...
    ];
    return doctors.find(doctor => doctor.id === parseInt(id));
};

function BookingPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const doctor = getDoctorById(id);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the booking data to your backend
        console.log('Booking submitted:', { doctor, date: selectedDate, time: selectedTime });
        // For now, we'll just navigate back to the doctor's profile
        navigate(`/doctor/${id}`);
    };

    return (
        <div className="section">
            <Container>
                <Row>
                    <Col md="8" className="ml-auto mr-auto">
                        <Card className="card-calendar">
                            <CardBody>
                                <CardTitle tag="h4">Book an Appointment with {doctor.name}</CardTitle>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="appointmentDate">Select Date</Label>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                            minDate={new Date()}
                                            className="form-control"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="appointmentTime">Select Time</Label>
                                        <Input
                                            type="select"
                                            name="time"
                                            id="appointmentTime"
                                            value={selectedTime}
                                            onChange={e => setSelectedTime(e.target.value)}
                                        >
                                            <option value="">Choose a time</option>
                                            <option value="09:00">09:00 AM</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="14:00">02:00 PM</option>
                                            <option value="15:00">03:00 PM</option>
                                            <option value="16:00">04:00 PM</option>
                                        </Input>
                                    </FormGroup>
                                    <Button color="primary" type="submit">
                                        Confirm Booking
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BookingPage;
