import React, { useContext, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

//adding components
import LoginForm from "./LoginForm";
import { AuthContext } from "../../context/auth/authState";

//adding styles
import { Grid } from "@material-ui/core";

const Login = ({ history }) => {
	const {
		accessToken,
		isLoading,
		signInError,
		signInWithUserIdAndPassword,
	} = useContext(AuthContext);

	useEffect(() => {
		if (accessToken) {
			history.push("/chat");
		}
	}, [accessToken]);

	const AdminLoginSchema = Yup.object().shape({
		username: Yup.string().required("username is required."),
		password: Yup.string()
			.min(6, "Password must be greater 6 characters.")
			.required("Password is required."),
	});

	return (
		<div>
			<Grid container>
				<Grid
					item
					md={6}
					style={{ background: "#A35629", margin: "0, 50%" }}
				></Grid>
				<Grid item md={6}>
					<Formik
						initialValues={{ username: "", password: "" }}
						onSubmit={(values, actions) => {
							signInWithUserIdAndPassword(values);
							actions.resetForm();
						}}
						render={formikProps => (
							<LoginForm
								{...formikProps}
								isLoading={isLoading}
								signInError={signInError}
							/>
						)}
						validationSchema={AdminLoginSchema}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default Login;
