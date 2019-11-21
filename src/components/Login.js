import React from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as yup from "yup";

import "./login.css";

function Login({ errors, touched }) {
	return (
		<div className="login-wrapper">
			<h3>Sign Up</h3>
			<Form>
				<div className="login-field">
					{/* username: */}
					Username or Email:
					<Field
						type="username"
						name="username"
						placeholder="username"
					/>
					{touched.username && errors.username && (
						<p>{errors.username}</p>
					)}
				</div>
				<div className="login-field">
					{/* password: */}
					Password:
					<Field
						type="password"
						name="password"
						placeholder="password"
					/>
					{touched.password && errors.password && (
						<p>{errors.password}</p>
					)}
					<button className="button" type="submit">
						submit
					</button>
					<div className="link">
						<Link to="/register">Don't have an account?</Link>
					</div>
				</div>
			</Form>
		</div>
	);
}
const FormikLogin = withRouter(
	withFormik({
		mapPropsToValues({ username, password }) {
			return {
				username: username || "",
				password: password || "",
			};
		},
		validationSchema: yup.object().shape({
			username: yup.string().required("Username is a required Field"),
			password: yup.string().required("Password is a required field"),
		}),
		handleSubmit(users, { props }) {
			axios
				.post("http://localhost:3300/users", users)
				.then(res => {
					localStorage.setItem("token", res.data.token);
					const user_id = res.data.id;
					props.history.push(`/profile/${user_id}`);
				})
				.catch(err => {
					console.log(err);
				});
		},
	})(Login)
);

export default FormikLogin;
