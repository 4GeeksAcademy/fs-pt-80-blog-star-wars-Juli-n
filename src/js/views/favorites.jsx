import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { GeneralCard } from "../component/generalCard.jsx";

export const Favorites = () => {
    const { store } = useContext(Context);

    return (
        <div className="container mt-5 text-center">
            <h2 className="card-hover text-warning">Favorites</h2>
            <div className="row">
                {store.favorites.length > 0 ? (
                    store.favorites.map((fav, index) => (
                        <GeneralCard
                            key={index}
                            uid={fav.uid}
                            name={fav.name}
                            type={fav.type}
                            img={fav.img}
                        />
                    ))
                ) : (
                    <p className="text-light mt-3">No favorites added yet.</p>
                )}
            </div>
        </div>
    );
};