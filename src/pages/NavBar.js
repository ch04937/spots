import React from "react";
import { Link } from "react-router-dom";

import "./pages.scss";

const NavBar = () => {
	return (
		<div className="NavBar-container">
			<div className="NavBar-links">
				<Link to="/search">Search</Link>
				<Link to="/favorites">Favorites</Link>
				<Link to="/settings">Settings</Link>
				<Link to="/profile">Profile</Link>
			</div>
		</div>
	);
};

export default NavBar;
