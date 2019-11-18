import React from "react";

//adding components
import SideMenu from "./SideMenu";
import MessagesList from "./MessagesList";
import SendMessageForm from "../components/SendMessageForm";

//setting styles
import "./chat.css";

export default function Chat(props) {
	return (
		<div className="chat">
			<SideMenu />
			<h2 className="title">title</h2>
			<MessagesList props={props} />
			<SendMessageForm />
			<p>Here is where we will chat</p>
		</div>
	);
}
