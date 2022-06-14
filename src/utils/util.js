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
