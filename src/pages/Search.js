import React, { useState, useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";
import SideNav, { NavItem, NavText } from "@trendmicro/react-sidenav";

//adding components
// import MessagesList from "../components/MessagesList";
import SendMessageForm from "../components/SendMessageForm";

import { AuthContext } from "../context/auth/authState";
import { TwhereContext } from "../context/twhere/twhereState";

//setting styles
import "./pages.scss";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const Search = props => {
	const [room, setRoom] = useState([]);
	const { userProfile } = useContext(AuthContext);
	const { getUserRoom, userRoom } = useContext(TwhereContext);
	useEffect(() => {
		getUserRoom();
	}, []);
	return (
		<div className="search-container">
			<div className="search-menu">
				<React.Fragment>
					<SideNav>
						<SideNav.Toggle />
						{room.length > 0 &&
							room.map(room => (
								<div className="search-room" key={room.id}>
									<SideNav.Nav>
										<NavItem eventKey={room.id}>
											<NavText>
												<Link to={`room?${room.name}`}>
													{room.name}
												</Link>
											</NavText>
										</NavItem>
									</SideNav.Nav>
								</div>
							))}
					</SideNav>
				</React.Fragment>
			</div>
			<div className="search-body">
				<p>{userProfile.username}</p>

				<SendMessageForm />
			</div>
		</div>
	);
};
export default Search;
