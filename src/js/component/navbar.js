import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-warning mb-3">
			<Link to="/">
				<img className="card-hover m-2" width={'80px'} 
				src="https://imgs.search.brave.com/DFHJR5IUIwtV8Rpcbhw4SGm9QbE6WaddrUPX_ZKmsY8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8xMi8z/L0lUbU1FVy5qcGc" 
				alt="star wars logo" />
			</Link>
			<div className="ml-auto me-2 btn-group">
				<Link to="/favorites">
					<button className="btn btn-outline-dark btn-lg">
						<FontAwesomeIcon icon={faStar} /> Favorites
					</button>
				</Link>
			</div>
		</nav>
	);
};
