import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar.js";
import HomePage from "./pages/HomePage.js";
import Profile from "./pages/Profile.js";
import Login from "./pages/Login";
import RegisterForm from "./pages/RegisterForm.js";
import Footer from "./components/footer.js";
import Chat from "./components/Chat.js/index.js.js.js";

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
