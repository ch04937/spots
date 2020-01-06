import React, { useContext } from "react";
import { AuthContext } from "../context/auth/authState";

import { Container, Image, Menu } from "semantic-ui-react";

const Settings = () => {
	const { userProfile } = useContext(AuthContext);
	return (
		<div>
			<Menu
				style={{
					display: "flex",
					flexDirection: "column",
					width: "490px",
					margin: "auto",
				}}
			>
				<Container>
					<Menu.Item as="a" header>
						<Image size="mini" src="/logo.png" circular />
						{userProfile.username}
					</Menu.Item>
					<Menu.Item as="a">
						<p>Account Settings </p>
					</Menu.Item>
					<Menu.Item as="a">
						<p>Sign Out </p>
					</Menu.Item>
				</Container>
			</Menu>
		</div>
	);
};

export default Settings;
