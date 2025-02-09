import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export const GeneralCard = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLink = () => {
        navigate(`/details/${props.type}/${props.uid}`);
    };

    const handleFav = () => {
        const { name, uid, img, type } = props;
        const newFav = {
            name, uid, img, type
        };
        actions.addRemoveFavorite(newFav);
    };

    return (
        <div className="card-hover border border-warning text-warning p-3 m-5 bg-dark card col-sm-6 col-md-4 col-lg-3">
            <figure>
                <img className="card-img-top mb-3" src={props.img} alt={props.name} />
                <figcaption>{props.name}</figcaption>
            </figure>
            <div className="d-flex justify-content-center m-3">
                <button className="btn btn-outline-warning ms-3 me-2" onClick={handleLink}>
                    Learn More
                </button>
                <button className="btn btn-outline-warning" onClick={handleFav}>
                    <FontAwesomeIcon icon={faStar} /> Favorite
                </button>
            </div>
        </div>
    );
};