import React from "react";
import { Route, Switch } from "react-router-dom";

//state
import { HotspotState } from "./context/hotspotState";

//all components
import NavBar from "./pages/NavBar.js";
import Landing from "./pages/HomePage.js";
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
				<Route exact path="/" component={Landing} />
				<Route path="/login" component={Login} />
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
