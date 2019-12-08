import React from "react";
import { Link } from "react-router-dom";

import "./pages.scss";

const Landing = () => {
	return (
		<div className="Landing-container">
			<h3>Landing Page</h3>
			<div className="Landing-links">
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

export default Landing;
