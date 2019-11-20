import React from "react";
import { Route } from "react-router-dom";
import SideNav, {
	// Toggle,
	// Nav,
	NavItem,
	NavIcon,
	NavText,
} from "@trendmicro/react-sidenav";

//adding components
import MessageList from "./MessagesList";
//setting styles
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./side-menu.css";
export default function SideMenu() {
	return (
		<div className="side-menu">
			<Route
				render={({ location, history }) => (
					<React.Fragment>
						<SideNav
							onSelect={(selected) => {
								const to = "/" + selected;
								if (location.pathname !== to) {
									history.push(to);
								}
							}}
						>
							<SideNav.Toggle />
							<SideNav.Nav defaultSelected="chathome">
								<NavItem eventKey="chathome">
									<NavIcon>
										<i
											className="fa fa--fw fa-home"
											style={{ fontSize: ".5rem" }}
										/>
									</NavIcon>
									<NavText>Home</NavText>
								</NavItem>
							</SideNav.Nav>
						</SideNav>
						<Route
							path="/"
							exact
							component={(props) => <MessageList />}
						/>
					</React.Fragment>
				)}
			/>
		</div>
	);
}
