//localhost
export const SERVER_BASE_URL = process.env.REACT_APP_BASE_URL_API;
export const API_BASE_URL = `${SERVER_BASE_URL}/api`;

//Main Server
export const AUTH_TOKEN_NAME = 'accessToken';

export const AUTH_ENDPOINT_LOGIN = `${API_BASE_URL}/auth/login`;
export const AUTH_ENDPOINT_LOGOUT = `${API_BASE_URL}/auth/logout`;
export const AUTH_ENDPOINT_REGISTER = `${API_BASE_URL}/auth/register`;

export const AUTH_USER_ENDPOINT = `${API_BASE_URL}/user`;

// Blog api
export const GET_ALL_POST = `${API_BASE_URL}/all-posts`;
