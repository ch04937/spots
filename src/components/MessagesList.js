import React, { useState, useEffect } from "react";
import axios from "axios";

//setting styles
import "./messagelist.css";

export default function MessagesList(props) {
	console.log(props);
	const [message, setMessage] = useState([]);
	useEffect(() => {
		const fetchRoom = async () => {
			try {
				const id = props.match.params.id;
				const res = await axios.get(
					`http://localhost:3300/message/${id}`
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
			{message.map((search) => (
				<div className="messages" key={search.id}>
					<p>
						{search.username} said he is in room {search.name}
					</p>
				</div>
			))}
		</div>
	);
}
