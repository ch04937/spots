import React, { useEffect, useContext, useState } from "react";
// import { Route, Link } from "react-router-dom";
import axios from "axios";

//adding components
import { AuthContext } from "../context/auth/authState";
// import { TwhereContext } from "../context/twhere/twhereState";

//setting styles
import { Card, Icon, Image } from "semantic-ui-react";
import "./pages.scss";

const Search = props => {
	const { userProfile } = useContext(AuthContext);
	// const { localSpots } = useContext(TwhereContext);
	const [localSpot, setLocalSpot] = useState([{}]);

	useEffect(async () => {
		const { city, state } = userProfile;
		const location = `${city}, ` + state;
		const searchSpot = await axios.post(
			"http://localhost:3300/search/yelp",
			{
				location,
			}
		);
		setLocalSpot(searchSpot);
	}, [setLocalSpot]);
	console.log(localSpot.data);
	return (
		<div className="search-container">
			<h3>Twhere to today? {userProfile.username}</h3>
			Search Bar
			<p>Looking for something specific?</p>
			{localSpot.data.map(spot => (
				<div>
					<Card.Group
						style={{ display: "flex", justifyContent: "center" }}
					>
						<Card>
							<Card.Content style={{ textAlign: "left" }}>
								<Card.Header>
									the name is{spot.name}
								</Card.Header>
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
			))}
		</div>
	);
};
export default Search;
