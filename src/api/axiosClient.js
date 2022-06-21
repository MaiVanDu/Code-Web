import axios from 'axios';
import queryString from 'query-string';
const API_URL = process.env.API_URL || 'http://ecommerce.hankiendev.com/api';

const axiosClient = axios.create({ baseURL: API_URL, paramsSerializer: params => queryString.stringify(params), headers: {
	'Accept': 'application/json',
	'Access-Control-Allow-Credentials': true,
	'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
	'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
	'Access-Control-Allow-Origin': '*',
	'Content-Type': 'application/json',
	'X-Requested-With': 'XMLHttpRequest',
	'Authorization' : 'Bearer ' + localStorage.getItem('token')
} });
axiosClient.interceptors.response.use(
	response => {
		if(response.status >= 200 && response.status < 300){
			return Promise.resolve(response);
		}
	},

	async error => {
		if(error.response?.status === 401){
			console.log('Authourzire');
		}
		else {
			console.log("Error: ", error);
		}
	}
)
export default axiosClient;
