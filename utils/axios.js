import axios from "axios";

const settings = {

	baseURL: 'https://llm-kbg2.onrender.com',
	// baseURL: 'http://127.0.0.1:8000',
	headers: {
		Accept: 'application/json,text/plain,*/*',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': "*"
	}
}

// console.log(get("auth"))

export const request = axios.create(settings);

request.interceptors.request.use(
	(config) => {
		const token = "0123456789";
		if (token) {
			config.headers.Authorization = `Bearer ${token == null ? "0123456789" : token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);