import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import { Card, Button } from "react-bootstrap";

export const PeopleCard = ({ type = 'people', ...props }) => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    
    const isFavorite = store.favorites.some(fav => 
        fav.uid === props.uid && fav.type === type
    );

    return (
        <Card className="m-2" style={{ width: '18rem' }}>
            <Card.Img 
                variant="top" 
                src={props.img} 
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
                }}
            />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <div className="d-flex justify-content-between">
                    <Button 
                        variant="primary" 
                        onClick={() => navigate(`/details/${type}/${props.uid}`)}
                    >
                        Details
                    </Button>
                    <Button 
                        variant={isFavorite ? "danger" : "outline-danger"}
                        onClick={() => actions.toggleFavorite({
                            uid: props.uid,
                            type: type,
                            name: props.name
                        })}
                    >
                        ♥
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};