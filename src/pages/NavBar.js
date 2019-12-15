import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
	return (
		<div className="NavBar-container">
			<div className="NavBar-links">
				<Link to="/search">
					<p>Search</p>
				</Link>

				<Link to="/favorites">
					<p>Favorites</p>
				</Link>
				<Link to="/settings">
					<p>Settings</p>
				</Link>
				<Link to="/profile">
					<p>Me</p>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
