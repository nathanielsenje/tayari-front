import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

// Mock user data
const user = {
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    joinDate: "January 15, 2023",
    bio: "Mother of two, passionate about mental health and wellness.",
    avatarUrl: require("assets/img/user-avatar.jpg"),
};

function UserProfilePage() {
    return (
        <div className="section">
            <Container>
                <div className="text-center">
                    <div className="photo-container">
                        <img src={user.avatarUrl} alt={user.name} />
                    </div>
                    <h3 className="title">{user.name}</h3>
                    <p className="category">Member since {user.joinDate}</p>
                    <p>{user.bio}</p>
                </div>
                <Row className="mt-5">
                    <Col md="6" className="ml-auto mr-auto">
                        <div className="profile-tabs">
                            <h5>Email: {user.email}</h5>
                            <Button color="info" className="btn-round" fullWidth>
                                Edit Profile
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md="8" className="ml-auto mr-auto">
                        <h4 className="title text-center">Recent Activity</h4>
                        <div className="card card-plain">
                            <p>
                                You haven't posted anything yet. Join a discussion in our
                                forums!
                            </p>
                            <Button color="primary" className="btn-round" href="/forums">
                                Go to Forums
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserProfilePage;
