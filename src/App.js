import React from "react";
import { Route, Switch } from "react-router-dom";

//state
import { HotspotState } from "./context/hotspot/hotspotState";
import { AuthState } from "./context/auth/authState";

//all components
import NavBar from "./pages/NavBar.js";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile.js";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
// import Footer from "./pages/footer.js";
import Search from "./pages/Search.js";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
	return (
		<div className="App">
			<AuthState>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/sign-in" component={Login} />
					<Route path="/register" component={Register} />
					<HotspotState>
						<PrivateRoute path="/profile" component={Profile} />
						<PrivateRoute path={`/search`} component={Search} />
						<PrivateRoute component={NavBar} />
					</HotspotState>
				</Switch>
			</AuthState>
		</div>
	);
}

export default App;
