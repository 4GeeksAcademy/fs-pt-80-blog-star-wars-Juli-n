import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Alert, Spinner, Card, ListGroup } from "react-bootstrap";

export const Details = () => {
    const { store, actions } = useContext(Context);
    const { type, uid } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await actions.loadDetails(type, uid);
                setDetails(data);
                setError(null);
            } catch (err) {
                setError("Error loading details");
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [type, uid]);

    if (loading) return <Spinner animation="border" />;
    if (error) return <Alert variant="danger">{error}</Alert>;

    return (
        <div className="container mt-4">
            <Card>
                <Card.Img 
                    variant="top" 
                    src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`} 
                />
                <Card.Body>
                    <Card.Title>{details?.properties?.name}</Card.Title>
                    <ListGroup variant="flush">
                        {Object.entries(details?.properties || {}).map(([key, value]) => (
                            <ListGroup.Item key={key}>
                                <strong>{key}:</strong> {value}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};