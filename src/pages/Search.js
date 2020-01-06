import React, { useEffect, useContext, useState } from "react";
// import { Route, Link } from "react-router-dom";
import axios from "axios";

//adding components
import { AuthContext } from "../context/auth/authState";
// import { TwhereContext } from "../context/twhere/twhereState";

//setting styles
import { Card, Image, Button } from "semantic-ui-react";
import "./pages.scss";
import logo from "../assests/logoc.png";

const Search = props => {
	const { userProfile } = useContext(AuthContext);
	console.log(userProfile);
	// const { localSpots } = useContext(TwhereContext);
	const [localSpot, setLocalSpot] = useState([]);

	useEffect(async () => {
		const { city, state, zipcode } = userProfile;
		const location = `${city}, ` + state + ` ` + zipcode;

		const searchSpot = await axios.post(
			"http://localhost:3300/search/yelp",
			{
				location,
			}
		);

		setLocalSpot(searchSpot);
	}, [setLocalSpot]);
	return (
		<div
			className="search-container"
			style={{ overflow: "auto", overflowX: "hidden" }}
		>
			<h3>Twhere to today? {userProfile.username}</h3>
			Search Bar
			<p>Looking for something specific?</p>
			<Card.Group
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				{localSpot.data &&
					localSpot.data.map(data => (
						<div key={data.id}>
							<Card
								style={{
									margin: "10px",
								}}
							>
								<Card.Content
									style={{
										textAlign: "left",
									}}
								>
									<Card.Header>{data.name}</Card.Header>
									<Image src={data.image_url} />
									<Card.Description>
										<p>Yelp Rating {data.rating}</p>
										<p>
											Based on {data.review_count} Yelp
											Reviews
										</p>
									</Card.Description>
									<Card.Meta
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-around",
											margin: "10px 0px",
										}}
									>
										<a href={data.url}>View More on Yelp</a>
										<a href={data.url}>
											<img
												src={logo}
												alt="yelpLogo"
												style={{
													width: "60px",
													height: "auto",
													textAlign: "right",
												}}
											/>
										</a>
									</Card.Meta>
									<div
										style={{
											display: "flex",
											justifyContent: "flex-end",
											marginTop: "20px",
										}}
									>
										<Button inverted color="red">
											Dislike
										</Button>
										<Button inverted color="green">
											Like
										</Button>
										<Button inverted color="blue">
											Save
										</Button>
									</div>
								</Card.Content>
							</Card>
						</div>
					))}
			</Card.Group>
		</div>
	);
};
export default Search;
