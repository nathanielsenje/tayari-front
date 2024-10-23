import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const articles = [
    {
        id: 1,
        title: "The Importance of Mental Health in Women",
        author: "Dr. Sarah Johnson",
        preview: "Mental health is a crucial aspect of overall well-being, especially for women...",
        date: "May 15, 2023",
        category: "Mental Health"
    },
    {
        id: 2,
        title: "Nutrition Tips for a Healthy Pregnancy",
        author: "Dr. Emily Rodriguez",
        preview: "Proper nutrition during pregnancy is essential for both the mother and the developing baby...",
        date: "May 10, 2023",
        category: "Women's Health"
    },
    {
        id: 3,
        title: "Understanding and Managing Childhood Anxiety",
        author: "Dr. Michael Chen",
        preview: "Anxiety in children is more common than many people realize. Learn how to recognize the signs...",
        date: "May 5, 2023",
        category: "Children's Psychology"
    }
];

function ArticleCard({ article }) {
    return (
        <Card className="card-plain">
            <CardBody>
                <CardTitle tag="h4">{article.title}</CardTitle>
                <h6 className="category text-info">{article.category}</h6>
                <CardText>{article.preview}</CardText>
                <div className="author">
                    <span>By {article.author} | {article.date}</span>
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

function HealthArticlesPage() {
    return (
        <div className="section">
            <Container>
                <h2 className="title text-center">Health Articles</h2>
                <Row>
                    <Col md="8" className="ml-auto mr-auto">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HealthArticlesPage;
