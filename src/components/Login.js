import React from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import { Link, withRouter } from "react-router-dom";
import * as yup from "yup";

function Login({ errors, touched }) {
	return (
		<div className="Login-wrapper">
			<h3>Login</h3>
			<Form>
				<div className="Login-fields">
					{/* username: */}
					{touched.username && errors.username && (
						<p>{errors.username}</p>
					)}
					Username or Email:
					<Field
						type="username"
						name="username"
						placeholder="username"
					/>
					{/* password: */}
					{touched.password && errors.password && (
						<p>{errors.password}</p>
					)}
					Password:
					<Field
						type="password"
						name="password"
						placeholder="password"
					/>
				</div>
			</Form>
			<div className="Login-links">
				<button className="button" type="submit">
					submit
				</button>
				<Link to="/register">
					<p>Create your account</p>
				</Link>
			</div>
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
			username: yup.string().required("username is a required Field"),
			password: yup.string().required("password is a required field"),
		}),
		handleSubmit(users, { props }) {
			axios
				.post(
					"https://ch04937-hotspot-api.herokuapp.com/api/auth/login",
					users
				)
				.then((res) => {
					localStorage.setItem("token", res.data.token);
					const user_id = res.data.id;
					props.history.push(`/profile/${user_id}`);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	})(Login)
);

export default FormikLogin;
