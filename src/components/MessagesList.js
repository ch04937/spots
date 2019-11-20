import React, { useState, useEffect } from "react";
import axios from "axios";

//setting styles
import "./messagelist.css";

export default function MessagesList(props) {
	const [message, setMessage] = useState([]);
	useEffect(() => {
		const fetchRoom = async () => {
			try {
				const id = props.props.match.params.id;

				const res = await axios.get(
					`http://localhost:3300/users/${id}/room`
				);
				setMessage(res.data.room);
			} catch (e) {
				console.log(e);
			}
		};
		fetchRoom();
	}, []);
	return (
		<div className="message-list">
			{message.length > 0 &&
				message.map((chat) => (
					<div className="messages" key={chat.id}>
						<p>
							{chat.username} said he is in room {chat.name}
						</p>
					</div>
				))}
		</div>
	);
}
