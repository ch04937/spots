import React, { useEffect, useContext, useState } from "react";
// import { Route, Link } from "react-router-dom";
import axios from "axios";

//adding components
import { AuthContext } from "../context/auth/authState";
// import { TwhereContext } from "../context/twhere/twhereState";

//setting styles
import { Card, Image, Button, Modal, ModalActions } from "semantic-ui-react";
import "./pages.scss";
import logo from "../assests/logoc.png";

const Search = props => {
	const { userProfile } = useContext(AuthContext);
	// const { localSpots } = useContext(TwhereContext);
	const [localSpot, setLocalSpot] = useState([]);

	useEffect(() => {
		const { city, state, zipcode } = userProfile;
		const location = `${city}, ` + state + ` ` + zipcode;

		async function searchSpot() {
			const searchSpot = await axios.post(
				"http://localhost:3300/search/yelp",
				{
					location,
				}
			);
			setLocalSpot(searchSpot);
		}
		searchSpot();
	}, []);
	return (
		<div
			className="search-container"
			style={{ overflow: "auto", overflowX: "hidden" }}
		>
			<h3>Twhere today? {userProfile.username}</h3>
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
										<p>
											Rating: {data.rating}
											{` `}
											Based on {data.review_count} Yelp
											Reviews
										</p>
									</Card.Description>

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
											Save
										</Button>
										<Modal
											trigger={
												<Button inverted color="blue">
													View More
												</Button>
											}
											style={{
												width: "500px",
												padding: "15px",
											}}
										>
											<Modal.Header>
												{data.name}
											</Modal.Header>
											<Modal.Description>
												<h4>
													Address:{" "}
													<a href={"#"}>
														{data.location.address1}
													</a>
												</h4>

												<div
													style={{
														display: "flex",
														justifyContent:
															"flex-end",
													}}
												>
													<a
														href={data.url}
														style={{
															display: "flex",
															alignItems:
																"center",
															paddingRight:
																"20px",
														}}
													>
														View More on Yelp
													</a>
													<a href={data.url}>
														<img
															src={logo}
															alt="yelpLogo"
															style={{
																width: "60px",
																height: "auto",
																textAlign:
																	"right",
															}}
														/>
													</a>
												</div>
											</Modal.Description>
										</Modal>
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
