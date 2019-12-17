import React, { useEffect, useContext } from "react";
// import { Route, Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

//adding components
import { AuthContext } from "../context/auth/authState";
import { TwhereContext } from "../context/twhere/twhereState";

//setting styles
import "./pages.scss";
// import "semantic-ui-css";

const Search = props => {
	const { userProfile } = useContext(AuthContext);
	const { getUserRoom, userRoom } = useContext(TwhereContext);
	useEffect(() => {
		getUserRoom();
	}, []);
	return (
		<div className="search-container">
			<h3>Twhere to today? {userProfile.username}</h3>
			Search Bar
			<Card.Group>
				<Card>
					<Card.Content>
						<Card.Header>the name of the place</Card.Header>
						<Image src="../../assests/logoc.png" />
						<Card.Description>Rating</Card.Description>
						<Card.Description>
							Description of place
						</Card.Description>
						<Card.Meta>View More</Card.Meta>
					</Card.Content>
				</Card>
			</Card.Group>
		</div>
	);
};
export default Search;
