import axios from "axios";
import { BASE_URL } from "../Constants/constants";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

AxiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = 'Bearer ' +token; // Add a space after 'Bearer'
  }
  config.headers['Access-Control-Allow-Origin'] = '*'; // This should be handled server-side, not in the request headers

  return config;
});

export default AxiosInstance;
