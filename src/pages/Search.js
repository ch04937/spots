import React, { useEffect, useContext } from "react";
// import { Route, Link } from "react-router-dom";
import SideNav from "@trendmicro/react-sidenav"; // { NavItem, NavText }

//adding components
// import MessagesList from "../components/MessagesList";
import SendMessageForm from "../components/SendMessageForm";

import { AuthContext } from "../context/auth/authState";
import { TwhereContext } from "../context/twhere/twhereState";

//setting styles
import "./pages.scss";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const Search = props => {
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
