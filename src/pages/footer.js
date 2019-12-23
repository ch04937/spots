import React from "react";
import { Link } from "react-router-dom";

//setting styles
import "./pages.scss";

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<div className="footer-summary">
				<h2>Twhere</h2>
				<p>Copyright ©2019 Twhere. All rights reserved</p>
			</div>

			<div className="footer-links">
				<Link to="/">
					<p>Home</p>
				</Link>
				<Link to="/profile">
					<p>Settings/Profile</p>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
