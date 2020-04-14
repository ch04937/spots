import React, { useContext } from "react";
import { AuthContext } from "../utils/context/auth/authState";

import { Container, Image, Menu } from "semantic-ui-react";

import styles from "../stylesheets/pages.module.scss";

const profile = [
	{
		url: "",
		account: "Account Settings ",
		signOut: "Sign Out"
	}
];

const Profile = () => {
	// const { userProfile, signOut } = useContext(AuthContext);
	return (
		<div className="menu">
			{profile.map((data, idx) => (
				<div className={styles.settings} key={idx}>
					<span>Image</span>
					<span>{data.account}</span>
					<span>{data.signOut}</span>
				</div>
			))}
		</div>
	);
};

export default Profile;
