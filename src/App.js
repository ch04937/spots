import React from "react";
import { Route, Switch } from "react-router-dom";

//state
import { TwhereState } from "./utils/context/twhere/twhereState";
import { AuthState } from "./utils/context/auth/authState";

//all components
import NavBar from "./pages/NavBar.js";
import Landing from "./pages/Landing";
import SignIn from "./pages/auth/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Register from "./pages/auth/Register";
import Search from "./pages/Search.js";
import Favorites from "./pages/Favorites.js";
import Profile from "./pages/Profile.js";
// import Footer from "./pages/footer.js";

import styles from "./stylesheets/app.module.scss";

function App() {
	return (
		<div className={styles.App}>
			<AuthState>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/sign-in" component={SignIn} />
					<Route path="/register" component={Register} />
					<TwhereState>
						{/* <PrivateRoute path="/profile" component={Profile} />
						<PrivateRoute path={`/search`} component={Search} />
						<PrivateRoute path="/favorites" component={Favorites} />
						<PrivateRoute component={NavBar} /> */}
						<Route path="/profile" component={Profile} />
						<Route path={`/search`} component={Search} />
						<Route path="/favorites" component={Favorites} />
						<Route component={NavBar} />
					</TwhereState>
				</Switch>
			</AuthState>
		</div>
	);
}

export default App;
