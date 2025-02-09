import React from "react";

export const PlanetDetails = (props) => {

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
                    <p>diameter: {props.diameter}</p>
                    <p>rotation_period: {props.rotation_period} </p>
                    <p>orbital_period: {props.orbital_period}</p>
                    <p>gravity: {props.gravity}</p>
                    <p>population: {props.population}</p>
                    <p>climate: {props.climate}</p>
                    <p>terrain: {props.terrain}</p>
                </div>
            </div>
        </div>
    )
}