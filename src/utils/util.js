import axios from 'axios';
import { API_BASE_URL, AUTH_TOKEN_NAME } from './constant';

export const apiRequest = axios.create({

  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'app': 'web'
  },
  withCredentials: true
});

export const api = () => {
  const api = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true
  })

  api.interceptors.response.use(response => response, error => {
    if (error.response.status === 401) {

      return Promise.reject()
    }

    return Promise.reject(error)
  })

  return api
}

apiRequest.interceptors.request.use((config) => {

  // add access token to the request
  const accessToken = getFromLocalStorage(AUTH_TOKEN_NAME, false);
  config.headers.common['Authorization'] = `Bearer ${accessToken}`;

  return config;
});

export const getFromLocalStorage = (key, decode = true) => {

  const value = window.localStorage.getItem(key);

  return decode
    ? JSON.parse(value)
    : value;
}

export const pullFromLocalStorage = (key, decode = true) => {

  const value = getFromLocalStorage(key, decode);

  window.localStorage.removeItem(key);

  return value;
}

export const putToLocalStorage = (key, value, encode = true) => {

  const finalValue = encode
    ? JSON.stringify(value)
    : value;
  window.localStorage.setItem(key, finalValue);

  return finalValue;
}
