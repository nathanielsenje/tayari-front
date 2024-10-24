import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";
import axios from 'axios';
import PageHeader from "./PageHeader";

function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/article/${id}`);
                setArticle(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch article');
                setLoading(false);
                console.error('Error fetching article:', err);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return (
            <div className="section">
                <Container>
                    <div className="text-center">
                        <h3>Loading article...</h3>
                    </div>
                </Container>
            </div>
        );
    }

    if (error || !article) {
        return (
            <div className="section">
                <Container>
                    <div className="text-center text-danger">
                        <h3>{error || "Article not found"}</h3>
                        <p>Please try again later.</p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <>
            <div className="section">
                <Container>
                    <Row>
                        <Col md="8" className="ml-auto mr-auto">
                            <Card className="card-plain">

                                <CardBody>
                                    <CardTitle><h2>{article.title}</h2></CardTitle>
                                    <div className="author mb-4">
                                        <span>By {article.author} | Published: {new Date(article.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <CardText>{article.content}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Article;
