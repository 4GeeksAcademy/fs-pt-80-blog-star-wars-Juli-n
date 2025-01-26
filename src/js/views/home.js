import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { PeopleCard } from "../component/peopleCard.jsx";
import { VehiclesCard } from "../component/vehiclesCard.jsx";
import { PlanetsCard } from "../component/planetsCard.jsx";

export const Home = () => {
	const {store, actions} = useContext(Context);

	return(
		<div className="text-center mt-5">
			<div className="row">
          
		    {store.people?.map(el => <PeopleCard 
			key={el.uid}
			name={el.name}
			uid={el.uid}
			img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
			/>)}

			</div>

		</div>
	)
}
