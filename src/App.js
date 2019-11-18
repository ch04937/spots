import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./pages/NavBar.js/index.js";
import HomePage from "./pages/HomePage.js";
import Profile from "./pages/Profile.js";
import Login from "./components/Login";
import RegisterForm from "./components/RegisterForm.js";
import Footer from "./pages/footer.js/index.js";
import Chat from "./pages/Chat.js/index.js.js.js.js";

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
