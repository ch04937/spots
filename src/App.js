import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import HomePage from "./components/HomePage.js";
import Profile from "./components/Profile.js";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm.js";
import Footer from "./components/footer.js";
import Chat from "./components/Chat.js";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Route path="/chat" component={Chat} />
			<Route exact path="/" component={HomePage} />
			<Route path="/profile" component={Profile} />
			<Route path="/Login" component={Login} />
			<Route path="/register" component={RegisterForm} />
			<NavBar />
			<Footer />
		</div>
	);
}

export default App;
