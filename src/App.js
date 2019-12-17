import React from "react";
import { Route, Switch } from "react-router-dom";

//state
import { TwhereState } from "./context/twhere/twhereState";
import { AuthState } from "./context/auth/authState";

//all components
import NavBar from "./pages/NavBar.js";
import Landing from "./pages/Landing";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./pages/login/Register";
import Search from "./pages/Search.js";
import Favorites from "./pages/Favorites.js";
import Profile from "./pages/Profile.js";
import Settings from "./pages/Settings.js";
// import Footer from "./pages/footer.js";

import "./App.css";

function App() {
	return (
		<div className="App">
			<AuthState>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/sign-in" component={Login} />
					<Route path="/register" component={Register} />
					<TwhereState>
						<PrivateRoute path="/profile" component={Profile} />
						<PrivateRoute path={`/search`} component={Search} />
						<PrivateRoute path="/favorites" component={Favorites} />
						<PrivateRoute path={`/settings`} component={Settings} />
						<PrivateRoute component={NavBar} />
					</TwhereState>
				</Switch>
			</AuthState>
		</div>
	);
}

export default App;
