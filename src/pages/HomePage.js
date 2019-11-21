import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="HomePage-container">
			<h3>Landing Page</h3>
			<div className="HomePage-links">
				<div className="button-div">
					<Link to="/sign-in">Sign In</Link>
				</div>
				<div className="button-div">
					<Link to="/register">Sign Up</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
