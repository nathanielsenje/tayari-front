import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

// Mock data for forum posts
const forumPosts = [
    {
        id: 1,
        title: "Coping with Postpartum Depression",
        author: "Sarah M.",
        preview: "I've been struggling with postpartum depression and I'm looking for advice...",
        replies: 15,
        category: "Mental Health"
    },
    {
        id: 2,
        title: "Helping Children Manage Anxiety",
        author: "Michael L.",
        preview: "My 8-year-old has been showing signs of anxiety. What strategies can I use to help?",
        replies: 23,
        category: "Children's Psychology"
    },
    {
        id: 3,
        title: "Nutrition During Pregnancy",
        author: "Emily R.",
        preview: "I'm in my first trimester and want to ensure I'm eating right. Any tips?",
        replies: 31,
        category: "Women's Health"
    }
];

function ForumPostCard({ post }) {
    return (
        <Card className="card-plain">
            <CardBody>
                <CardTitle tag="h4">{post.title}</CardTitle>
                <h6 className="category text-info">{post.category}</h6>
                <CardText>{post.preview}</CardText>
                <div className="author">
                    <span>Posted by {post.author}</span>
                </div>
                <div className="stats">
                    <i className="now-ui-icons ui-2_chat-round"></i> {post.replies} Replies
                </div>
                <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    Read More
                </Button>
            </CardBody>
        </Card>
    );
}

function ForumsPage() {
    return (
        <div className="section">
            <Container>
                <h2 className="title text-center">Health Forums</h2>
                <Row>
                    <Col md="8" className="ml-auto mr-auto">
                        {forumPosts.map((post) => (
                            <ForumPostCard key={post.id} post={post} />
                        ))}
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="text-center">
                        <Button color="primary" size="lg">
                            Start a New Discussion
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ForumsPage;
