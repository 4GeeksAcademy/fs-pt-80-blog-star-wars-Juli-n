import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { PeopleDetails } from "../component/peopleDetails.jsx";
import { Context } from "../store/appContext";
import { PlanetsDetails } from "../component/planetsDetails.jsx";
import { VehiclesDetails } from "../component/vehiclesDetails.jsx";

export const NewDetails = () => {

    const {store,actions} = useContext(Context);

    const {type, uid} = useParams()
    useEffect(()=>{
        actions.getOne(type, uid)
    },[])

    return (
        <>
        {type === 'people' && <PeopleDetails 
        name={store.single?.properties?.name}
        img={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
        height={store.single?.properties?.height}
        mass={store.single?.properties?.mass}
        hair_color={store.single?.properties?.hair_color}
        skin_color={store.single?.properties?.skin_color}
        eye_color={store.single?.properties?.eye_color}
        birth_year={store.single?.properties?.birth_year}
        />}
        {type === 'planets' && <PlanetsDetails
                name={store.single?.properties?.name}
                img={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
                diameter={store.single?.properties?.diameter}
                rotation={store.single?.properties?.rotation}
                orbital_period={store.single?.properties?.orbital_period}
                gravity={store.single?.properties?.gravity}
                population={store.single?.properties?.population}
                climate={store.single?.properties?.climate}
                terrain={store.single?.properties?.terrain}
        />}
        {type === 'vehicles' && <VehiclesDetails
                        name={store.single?.properties?.name}
                        img={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`}
                        model={store.single?.properties?.model}
                        vehicle_class={store.single?.properties?.vehicle_class}
                        manufacturer={store.single?.properties?.manufacturer}
                        cost_in_credits={store.single?.properties?.cost_in_credits}
                        
        />}
        </>
    )
}
