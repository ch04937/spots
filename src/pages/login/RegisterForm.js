import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Box,
	Button,
	CircularProgress,
	Divider,
	Grid,
	Link,
	TextField,
	Typography,
} from "@material-ui/core";
const copyRight = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Hot Spot
			</Link>{" "}
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
		width: "70%",
		padding: "0 20px",
		marginTop: theme.spacing(3),
	},
	formControl: {
		minWidth: 160,
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
const RegistrationForm = ({
	handleChange,
	handleSubmit,
	handleBlur,
	isLoading,
	signUpError,
}) => {
	const classes = useStyles();

	useEffect(() => {
		if (signUpError) {
			if (signUpError.code === "auth/email-already-in-use") {
			}
		}
	}, [signUpError]);

	return (
		<>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
			>
				<div className={classes.paper}>
					<Typography component="h1" variant="h5">
						Sign Up
					</Typography>
					<form
						className={classes.form}
						noValidate
						onSubmit={handleSubmit}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									style={{ background: "#F2D2BF" }}
									autoComplete="firstName"
									name="firstName"
									variant="outlined"
									required
									fullWidth
									id="firstName"
									onChange={handleChange}
									onBlur={handleBlur}
									label="First Name"
									type="text"
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									style={{ background: "#F2D2BF" }}
									variant="outlined"
									required
									fullWidth
									id="lastName"
									onChange={handleChange}
									onBlur={handleBlur}
									label="Last Name"
									name="lastName"
									autoComplete="lastName"
									type="text"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									style={{ background: "#F2D2BF" }}
									variant="outlined"
									required
									fullWidth
									id="email"
									onChange={handleChange}
									onBlur={handleBlur}
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									style={{ background: "#F2D2BF" }}
									variant="outlined"
									required
									fullWidth
									name="username"
									label="Username"
									type="text"
									id="username"
									onChange={handleChange}
									onBlur={handleBlur}
									autoComplete="current-username"
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
									onChange={handleChange}
									onBlur={handleBlur}
									autoComplete="current-password"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									style={{ background: "#F2D2BF" }}
									variant="outlined"
									required
									fullWidth
									name="passwordConfirmation"
									label="Confirm Password"
									type="password"
									id="password-confirmation"
									onChange={handleChange}
									onBlur={handleBlur}
									autoComplete="confirm-password"
								/>
							</Grid>
						</Grid>
						<Grid item xs={12}></Grid>

						<Grid item xs={12}>
							<Button
								style={{
									background: "#F5945B",
									color: "#21242C",
								}}
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
							>
								{!isLoading ? (
									"Sign Up"
								) : (
									<CircularProgress
										className={classes.progress}
										size={30}
									/>
								)}
							</Button>
							<div className={classes.link}>
								<Link href="/sign-in">
									Already has an account ? Sign In
								</Link>
							</div>

							<Divider />
						</Grid>
					</form>

					<Box mt={5}>{copyRight}</Box>
				</div>
			</Grid>
		</>
	);
};

export default RegistrationForm;
