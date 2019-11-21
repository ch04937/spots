import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./pages/NavBar.js";
import HomePage from "./pages/HomePage.js";
import Profile from "./pages/Profile.js";
import Login from "./components/Login.js";
import RegisterForm from "./components/RegisterForm.js";
// import Footer from "./pages/footer.js";
import Chat from "./pages/Chat.js";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/chat/:id" component={Chat} />
				<Route exact path="/" component={HomePage} />
				<Route path="/profile" component={Profile} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={RegisterForm} />
				{/* <Footer /> */}
			</Switch>
			<NavBar />
		</div>
	);
}

export default App;
