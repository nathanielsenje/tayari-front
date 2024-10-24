import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function BookingPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [doctor, setDoctor] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchDoctor = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/doctor/${id}`);
                setDoctor(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch doctor data');
                setLoading(false);
            }
        };

        fetchDoctor();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!selectedTime) {
            setError('Please select a time for your appointment');
            return;
        }

        try {
            const response = await axios.post('http://localhost:1337/booking', {
                doctorId: id,
                date: selectedDate.toISOString().split('T')[0],
                time: selectedTime
            });

            setSuccess('Appointment booked successfully!');
            setTimeout(() => navigate(`/doctor/${id}`), 2000);
        } catch (err) {
            setError('Failed to book appointment. Please try again.');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    return (
        <div className="section">
            <Container>
                <Row>
                    <Col md="8" className="ml-auto mr-auto">
                        <Card className="card-calendar">
                            <CardBody>
                                <h2>Book an Appointment with Dr. {doctor.name}</h2>
                                {error && <Alert color="danger">{error}</Alert>}
                                {success && <Alert color="success">{success}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <Label for="date">Select Date</Label>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={date => setSelectedDate(date)}
                                            minDate={new Date()}
                                            className="form-control"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="time">Select Time</Label>
                                        <Input 
                                            type="select" 
                                            name="time" 
                                            id="time"
                                            value={selectedTime}
                                            onChange={e => setSelectedTime(e.target.value)}
                                        >
                                            <option value="">Choose a time</option>
                                            <option value="09:00">9:00 AM</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="14:00">2:00 PM</option>
                                            <option value="15:00">3:00 PM</option>
                                            <option value="16:00">4:00 PM</option>
                                        </Input>
                                    </FormGroup>
                                    <Button color="primary" type="submit">
                                        Book Appointment
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
