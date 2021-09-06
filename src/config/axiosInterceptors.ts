import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { SERVER_API_URL } from './constants';

const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = SERVER_API_URL;

export const setupAxiosInterceptors = () => {
	const onRequestSuccess = (config: AxiosRequestConfig) => {
		return config;
	};

	const onResponseSuccess = (response: AxiosResponse) => response;
	const onResponseError = (err: AxiosError) => err;

	axios.interceptors.request.use(onRequestSuccess);
};
