import React from "react";
import { useNavigate } from "react-router";

export const PeopleCard = (props) => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/details/'+props.uid)
    }
    return (
        <div className="card-hover border border-warning text-warning p-3 m-5 bg-dark col-sm-6 col-md-4 col-lg-3">
            <div className="card">
                <figure>
                    <img className="card-img-top" src={props.img} alt={props.name} />
                    <figcaption>{props.name}</figcaption>
                </figure>
                <div className="d-flex">
                    <button className="btn btn-primary" onClick={handleClick}>Learn more</button>
                    <button className="btn btn-light">corazon</button>
                </div>
            </div>
        </div>
    )
}