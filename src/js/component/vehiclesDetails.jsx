import React from "react";

export const VehiclesDetails = (props) => {

    return (
        <div className="container">
            <div className="d-flex ">
                <figure className="card-hover border border-warning rounded-top text-warning p-3 m-5 bg-dark">
                    <img src={props.img} alt={props.name} />
                    <figcaption className="m-2 text-center">
                        name: {props.name}
                    </figcaption>
                </figure>
                <div className="text-warning mt-5">
                    <p>model: {props.model}</p>
                    <p>vehicle_class: {props.vehicle_class}</p>
                    <p>manufacturer: {props.manufacturer}</p>
                    <p>cost_in_credits: {props.cost_in_credits}</p>
                </div>
            </div>
        </div>
    )
}