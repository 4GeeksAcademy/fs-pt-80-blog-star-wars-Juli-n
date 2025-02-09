import React from "react";

export const PeopleDetails = (props) => {

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
                    <p>height: {props.height} </p>
                    <p>mass: {props.mass}</p>
                    <p>hair color: {props.hair_color}</p>
                    <p>skin color: {props.skin_color}</p>
                    <p>eye color: {props.eye_color}</p>
                    <p>birth year: {props.birth_year}</p>
                </div>
            </div>
        </div>
    )
}