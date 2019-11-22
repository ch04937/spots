import React from "react";
import { Route, Switch } from "react-router-dom";

//state
import { HotspotState } from "./context/hotspot/hotspotState";

//all components
import NavBar from "./pages/NavBar.js";
import Landing from "./pages/HomePage.js";
import Profile from "./pages/Profile.js";
import Login from "./pages/login/Login";
import RegisterForm from "./pages/login/RegisterForm";
// import Footer from "./pages/footer.js";
import Chat from "./pages/Chat.js";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/sign-in" component={Login} />
				<Route path="/register" component={RegisterForm} />
				<HotspotState>
					<Route path="/profile" component={Profile} />
					<Route path="/chat/:id" component={Chat} />
				</HotspotState>
				{/* <Footer /> */}
			</Switch>
			<NavBar />
		</div>
	);
}

export default App;
