import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

// import styles from "../stylesheets/pages.module.scss";

const Landing = () => {
	return (
		<div>
			<h1>Landing Page</h1>
			<Button>
				<Link to="/login">Login In</Link>
			</Button>
			<Button>
				<Link to="/register">Sign Up</Link>
			</Button>
		</div>
	);
};

export default Landing;
