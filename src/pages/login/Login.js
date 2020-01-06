import React, { useContext, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SignInForm from "./LoginForm";
import { AuthContext } from "../../context/auth/authState";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	image: {
		width: "100%",
		height: "100%",
	},
}));
const SignIn = ({ history }) => {
	const { accessToken } = useContext(AuthContext);
	const classes = useStyles();
	useEffect(() => {
		if (accessToken) {
			history.push("/favorites");
		}
	}, [accessToken]);
	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item md={6} style={{ background: "#A35629" }}></Grid>
				<Grid item md={6}>
					<SignInForm path={history.location} />
				</Grid>
			</Grid>
		</div>
	);
};

export default SignIn;
