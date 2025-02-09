import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Details = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    console.log(params)

    useEffect(() => {
        actions.loadPerson(params.uid)
    }, [])

    const { height, name, mass } = store.person?.properties || ''

    return (
        <div className="container">
            {
                store.person?.properties ?
                    <>
                        <h2>{name}</h2>
                        <p>altura: {height}</p>
                        <p>peso: {mass}</p>
                        <p>color de piel: {store.person?.properties?.skin_color}</p>
                        <p>color de pelo: {store.person?.properties?.hair_color}</p>
                    </>
                    :
                    <h2>Loading</h2>

            }
        </div>
    )

}