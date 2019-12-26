import React, { useEffect, useContext, useState } from "react";
// import { Route, Link } from "react-router-dom";

//adding components
import { AuthContext } from "../context/auth/authState";
import { TwhereContext } from "../context/twhere/twhereState";

//setting styles
import { Card, Icon, Image } from "semantic-ui-react";
import "./pages.scss";

const Search = props => {
	const { userProfile } = useContext(AuthContext);
	const { getLocalSpots, localSpots } = useContext(TwhereContext);

	useEffect(() => {
		const { city, state } = userProfile;
		const location = `${city}, ` + state;
		getLocalSpots(location);
	}, []);

	return (
		<div className="search-container">
			<h3>Twhere to today? {userProfile.username}</h3>
			Search Bar
			<p>Looking for something specific?</p>
			<Card.Group style={{ display: "flex", justifyContent: "center" }}>
				<Card>
					<Card.Content style={{ textAlign: "left" }}>
						<Card.Header>the name of the place</Card.Header>
						<Image src="../assests/logoc.png" />
						<Card.Description>Rating</Card.Description>
						<Card.Description>
							Description of place
						</Card.Description>
						<Card.Meta style={{ textAlign: "right" }}>
							View More
						</Card.Meta>
					</Card.Content>
				</Card>
			</Card.Group>
		</div>
	);
};
export default Search;
