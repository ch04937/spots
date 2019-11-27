import axios from "axios";

import { loadState } from "./localStorage";

const developmentBaseUrl = "http://localhost:3300";
const productionBaseUrl = "";

export const client = axios.create({
	baseURL:
		process.env.NODE_ENV === "production"
			? productionBaseUrl
			: developmentBaseUrl,
	header: {
		"Content-Type": "application/json",
	},
});
export const clientWithAuth = axios.create({
	baseURL:
		process.env.NODE_ENV === "production"
			? productionBaseUrl
			: developmentBaseUrl,
});
clientWithAuth.interceptors.request.use(
	config => {
		const state = loadState("auth");
		const token = state.accessToken;
		if (token) {
			config.headers["Authorization"] = "Bearer " + token;
		}
		config.headers["Content-Type"] = "application/json";
		return config;
	},
	error => {
		Promise.reject(error);
	}
);
