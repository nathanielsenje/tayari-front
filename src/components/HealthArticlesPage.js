import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from 'axios';

function ArticleCard({ article }) {
    return (
        <Card className="card-plain mb-4">
            <CardBody>
                <CardTitle tag="h4" className="text-capitalize">{article.title}</CardTitle>
                <h6 className="category text-info">{article.category}</h6>
                <CardText>{article.content.substring(0, 150)}...</CardText>
                <div className="author">
                    <span>By {article.author} | Published: {new Date(article.createdAt).toLocaleDateString()}</span>
                </div>
                <Button
                    className="btn-round"
                    color="info"
                    tag={Link}
                    to={`/article/${article.id}`}
                >
                    Read More
                </Button>
            </CardBody>
        </Card>
    );
}

function HealthArticlesPage() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('https://weary-cadaver-66gj7w47rxwf54pv-1337.app.github.dev/article');
                setArticles(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch articles');
                setLoading(false);
                console.error('Error fetching articles:', err);
            }
        };

        fetchArticles();
    }, []);

    if (loading) {
        return (
            <div className="section">
                <Container>
                    <div className="text-center">
                        <h3>Loading articles...</h3>
                    </div>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="section">
                <Container>
                    <div className="text-center text-danger">
                        <h3>{error}</h3>
                        <p>Please try again later.</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="section">
            <Container>
                <h2 className="title text-center mb-5">Health Articles</h2>
                <Row>
                    <Col md="8" className="ml-auto mr-auto">
                        {articles.length > 0 ? (
                            articles.map((article) => (
                                <ArticleCard
                                    key={article.id}
                                    article={article}
                                />
                            ))
                        ) : (
                            <div className="text-center">
                                <h4>No articles available at the moment.</h4>
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HealthArticlesPage;
