import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import SideNav, {
	// Toggle,
	// Nav,
	NavItem,
	NavIcon,
	NavText,
} from "@trendmicro/react-sidenav";

//adding components
import MessageList from "./MessagesList";
//setting styles
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./side-menu.css";

export default function SideMenu(props) {
	const [room, setRoom] = useState([]);
	useEffect(() => {
		const fetchRoom = async () => {
			try {
				const id = props.props.match.params.id;

				const res = await axios.get(
					`http://localhost:3300/users/${id}/room`
				);
				setRoom(res.data.room);
			} catch (e) {
				console.log(e);
			}
		};
		fetchRoom();
	}, []);

	return (
		<div className="side-menu">
			<Route
				render={({ location, history }) => (
					<React.Fragment>
						<SideNav
							onSelect={(selected) => {
								const to = "/" + selected;
								if (location.pathname !== to) {
									history.push(to);
								}
							}}
						>
							<SideNav.Toggle />
							{room.length > 0 &&
								room.map((room) => (
									<div className="chat-room" key={room.id}>
										<SideNav.Nav>
											<NavItem eventKey={room.id}>
												<NavText>{room.name}</NavText>
											</NavItem>
										</SideNav.Nav>
									</div>
								))}
						</SideNav>
						<Route
							path="/"
							exact
							component={(props) => <MessageList />}
						/>
					</React.Fragment>
				)}
			/>
		</div>
	);
}
