/* eslint-disable */

import React, { useEffect, useState } from "react";
import {
	Button,
	CircularProgress,
	Divider,
	TextField,
	Link,
	Box,
	Grid,
	Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const copyRight = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="/">
				Hot Spot
			</Link>
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
};
const useStyles = makeStyles(theme => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "70%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	signInWithGoogle: {
		margin: theme.spacing(2, 0, 2),
	},
	progress: {
		margin: theme.spacing(1),
		color: "white",
	},
	link: {
		textAlign: "center",
	},
}));

const SignInForm = ({
	values,
	handleSubmit,
	handleChange,
	handleBlur,
	signInWithGoogle,
	isLoading,
	signInError,
	errors,
	touched,
}) => {
	const classes = useStyles();

	useEffect(() => {
		if (signInError) {
			if (signInError.code === "auth/invalid-email") {
			} else if (signInError.code === "auth/user-not-found") {
			} else if (signInError.code === "auth/wrong-password") {
			}
		}
	}, [signInError]);
	return (
		<>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
			>
				<Grid item xs={12} className={classes.paper}>
					<Typography component="h1" variant="h5">
						Hot Spot
					</Typography>
					<Typography component="h1" variant="h5">
						Sign In
					</Typography>

					<form
						className={classes.form}
						noValidate
						onSubmit={handleSubmit}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									style={{ background: "#F2D2BF" }}
									variant="outlined"
									required
									fullWidth
									id="userId"
									label="UserId"
									name="userId"
									autoComplete="userId"
									placeholder="Username or email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									style={{ background: "#F2D2BF" }}
									variant="outlined"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									onChange={handleChange}
									onBlur={handleBlur}
									// helperText={
									// 	touched.password ? errors.password : ""
									// }
									// error={
									// 	touched.password &&
									// 	Boolean(errors.password)
									// }
								/>
							</Grid>
						</Grid>
						<Button
							style={{
								background: "#b53737",
								color: "#21242C",
								hover: { background: "#8e1600" },
							}}
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							{!isLoading ? (
								"Sign In"
							) : (
								<CircularProgress
									className={classes.progress}
									size={30}
								/>
							)}
						</Button>
						<div className={classes.link}>
							<Link href="/register" variant="body2">
								Don't have an account? Register
							</Link>
						</div>

						<Divider />
					</form>
					<Box mt={5}>{copyRight}</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default SignInForm;
