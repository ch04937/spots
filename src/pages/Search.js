import React, { useEffect, useContext, useState } from "react";
// import { Route, Link } from "react-router-dom";

//adding components
import { AuthContext } from "../utils/context/auth/authState";
import { TwhereContext } from "../utils/context/twhere/twhereState";

// import "./pages.scss";

const Search = props => {
	const { userProfile } = useContext(AuthContext);
	const { logo } = useContext(TwhereContext);
	const [localSpot, setLocalSpot] = useState([]);
	console.log("logo", logo);

	return <div className="search-container"></div>;
};
export default Search;
