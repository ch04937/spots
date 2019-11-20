import React from "react";

//adding components
import SideMenu from "../components/SideMenu";
import MessagesList from "../components/MessagesList";
import SendMessageForm from "../components/SendMessageForm";

//setting styles
import "./chat.css";

function Chat(props) {
	return (
		<div className="chat-container">
			<div className="chat-menu">
				<SideMenu />
			</div>
			<div className="chat-body">
				<MessagesList props={props} />
				<SendMessageForm />
			</div>
		</div>
	);
}
export default Chat;
