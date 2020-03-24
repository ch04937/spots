import React, { useContext, useState } from "react";

//adding styles
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Redirect } from "react-router-dom";
import { AuthContext } from "../../utils/context/auth/authState";

const useStyles = makeStyles(theme => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white,
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Twhere
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Register() {
	const classes = useStyles();

	const [values, setValues] = useState({
		username: "",
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const { signUpUser, isLoading } = useContext(AuthContext);

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};

	// if (!isLoading) {
	// 	return <Redirect to="/favorites" />;
	// }

	// const RegistrationSchema = Yup.object().shape({
	// 	firstName: Yup.string()
	// 		.min(2, "First name must be greater than 2 characters.")
	// 		.max(50, "First name must be lesser 50 characters.")
	// 		.required("First name is required."),
	// 	lastName: Yup.string()
	// 		.min(2, "Last name must be between 2 and 50 characters.")
	// 		.max(50, "Last name must be between 2 and 50 characters.")
	// 		.required("Last name is required."),
	// 	username: Yup.string()
	// 		.min(6, "Username must be between 6 and 36 characters ")
	// 		.max(50, "Last name must be between 2 and 50 characters.")
	// 		.required("Username is required."),
	// 	email: Yup.string()
	// 		.email("Invalid email.")
	// 		.required("Email is required."),
	// 	password: Yup.string()
	// 		.min(6, "Password must be at least 6 characters.")
	// 		.max(32, "Password must be less than 32 characters.")
	// 		.required("Password is required."),
	// 	passwordConfirmation: Yup.string()
	// 		.oneOf([Yup.ref("password"), null], "Password must match.")
	// 		.required("Password confirmation is required."),
	// });

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={event => {
						event.preventDefault();
						signUpUser(
							values.username,
							values.firstName,
							values.lastName,
							values.email,
							values.password
						);
					}}
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
								value={values.firstName}
								onChange={handleChange}
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
								value={values.lastName}
								onChange={handleChange}
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
								value={values.email}
								onChange={handleChange}
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
								value={values.username}
								onChange={handleChange}
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
								value={values.password}
								onChange={handleChange}
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
								value={values.passwordConfirmation}
								onChange={handleChange}
								autoComplete="confirm-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox color="primary" />}
								label="Stay signed in."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						SignUp
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/sign-in" variant="body2">
								Already have an account?
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
