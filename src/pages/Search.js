import React, { useEffect, useContext } from "react";
// import { Route, Link } from "react-router-dom";

//adding components
import { AuthContext } from "../context/auth/authState";
import { TwhereContext } from "../context/twhere/twhereState";

//setting styles
import "./pages.scss";

const Search = props => {
	const { userProfile } = useContext(AuthContext);
	const { getUserRoom, userRoom } = useContext(TwhereContext);
	useEffect(() => {
		getUserRoom();
	}, []);
	return (
		<div className="search-container">
			<h3>Twhere to today? {userProfile.username}</h3>
		</div>
	);
};
export default Search;
