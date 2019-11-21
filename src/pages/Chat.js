import React, { useState, useEffect, Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import SideNav, {
	// Toggle,
	// Nav,
	NavItem,
	// NavIcon,
	NavText,
} from "@trendmicro/react-sidenav";
//adding components
import MessagesList from "../components/MessagesList";
import SendMessageForm from "../components/SendMessageForm";

//setting styles
import "./chat.css";
//setting styles
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { MessageList } from "semantic-ui-react";

function Chat(props) {
	const [room, setRoom] = useState([]);
	useEffect(() => {
		const fetchRoom = async () => {
			try {
				const id = props.match.params.id;

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
		<div className="chat-container">
			<div className="chat-menu">
				<React.Fragment>
					<SideNav>
						<SideNav.Toggle />
						{room.length > 0 &&
							room.map(room => (
								<div className="chat-room" key={room.id}>
									<SideNav.Nav>
										<NavItem eventKey={room.id}>
											<NavText>
												<Link to={`room?${room.id}`}>
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
			<div className="chat-body">
				<Route
					// render={({location, history}) => (

					// )}
					path={`/chat/room?${room.id}`}
					component={MessagesList}
				/>
				<SendMessageForm />
			</div>
		</div>
	);
}
export default Chat;
