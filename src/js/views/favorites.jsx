import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Alert } from "react-bootstrap";

export const Favorites = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="container mt-4">
            <h2 className="mb-4">⭐ Favorites</h2>
            
            {store.favorites.length === 0 ? (
                <Alert variant="info">No favorites added yet!</Alert>
            ) : (
                <Row>
                    {store.favorites.map((fav, index) => (
                        <Col md={4} className="mb-3" key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{fav.name}</Card.Title>
                                    <Card.Text>
                                        Type: {fav.type}<br/>
                                        ID: {fav.uid}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <Button 
                                            variant="primary" 
                                            onClick={() => navigate(`/details/${fav.type}/${fav.uid}`)}
                                        >
                                            Details
                                        </Button>
                                        <Button 
                                            variant="danger"
                                            onClick={() => actions.toggleFavorite(fav)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};