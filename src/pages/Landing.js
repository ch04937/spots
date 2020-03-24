import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import "./pages.scss";

const Landing = () => {
	return (
		<div className="landing-page">
			<h3>Landing Page</h3>
			<Button>
				<Link to="/sign-in">Sign In</Link>
			</Button>
			<Button>
				<Link to="/register">Sign Up</Link>
			</Button>
		</div>
	);
};

export default Landing;
