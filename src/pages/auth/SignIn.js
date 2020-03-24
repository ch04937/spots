import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Loader } from "semantic-ui-react";
import * as Yup from "yup";

import { AuthContext } from "../../utils/context/auth/authState";

import "../pages.scss";

const SignInSchema = Yup.object().shape({
	username: Yup.string().required(),
	password: Yup.string()
		.min(6, "Password Must be at least 6 characters")
		.required(),
});

const SignIn = () => {
	const { isLoading, signIn } = useContext(AuthContext);

	return (
		<div className="login">
			<h1>Login</h1>
			<Formik
				initialValues={{ username: "", password: "" }}
				onSubmit={(values, actions) => {
					signIn(values);
					// actions.resetForm();
				}}
				validationSchema={SignInSchema}
			>
				<Form className="formik">
					<div className="field">
						<label for="username">Username: </label>
						<Field
							label="Username: "
							type="text"
							name="username"
							id="username"
							placeholder="Username or Email"
						/>
						<ErrorMessage name="username" />
					</div>
					<div className="field">
						<label for="password">Password: </label>
						<Field
							className="field"
							label="Password: "
							type="password"
							name="password"
							id="password"
							placeholder="Password"
						/>
						<ErrorMessage name="password" />
					</div>
					<Button type="submit">
						{!isLoading ? "Sign In" : <Loader />}
					</Button>
				</Form>
			</Formik>
		</div>
	);
};

export default SignIn;
