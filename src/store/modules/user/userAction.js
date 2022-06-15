import * as actions from './userActionTYpes';
import {
  AUTH_ENDPOINT_LOGIN,
  AUTH_ENDPOINT_LOGOUT,
  AUTH_ENDPOINT_REGISTER,
  AUTH_USER_ENDPOINT,
  AUTH_TOKEN_NAME,
} from '../../../utils/constant';
import {apiRequest, pullFromLocalStorage, putToLocalStorage} from '../../../utils/util';

export const updateRequireAuth = (payload) => ({
  type: actions.REQUIRE_AUTH,
  payload,
})

export const loginRequest = () => ({
  type: actions.LOGIN_REQUEST
});

export const loginRequestFail = (err) => ({
  type: actions.LOGIN_REQUEST_FAIL,
  payload: err
});

export const loginRequestSuccess = (user) => ({
  type: actions.LOGIN_REQUEST_SUCCESS,
  payload: user
});


export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await apiRequest.post(AUTH_ENDPOINT_LOGIN, {
      email,
      password
    });

    const {access_token, user} = response.data.data

    if (access_token) {
      putToLocalStorage(AUTH_TOKEN_NAME, access_token, false)
    }

    dispatch(loginRequestSuccess(user));

  } catch (e) {
    dispatch(loginRequestFail(e.response?.data))
  }

};

export const registrationDirect = (name, email, password, password_confirmation) => async () => {
  try {

    const registration = await apiRequest.post(AUTH_ENDPOINT_REGISTER, {
      name, email, password, password_confirmation
    });

    return registration;

  } catch (e) {
    return e.response?.data;
  }

};

const getUserRequest = () => ({
  type: actions.GET_USER_REQUEST
});

const getUserRequestFail = (err) => ({
  type: actions.GET_USER_REQUEST_FAIL,
  payload: err
});

const getUserRequestSuccess = (user) => ({
  type: actions.GET_USER_REQUEST_SUCCESS,
  payload: user
});

export const getUser = () => async (dispatch) => {

  dispatch(getUserRequest());

  try {

    // get auth user
    const response = await apiRequest.get(AUTH_USER_ENDPOINT);

    const { data } = response.data;


    dispatch(getUserRequestSuccess(data));

    return data;

  } catch (e) {
    dispatch(getUserRequestFail(e.response?.data));
  }

  return {};
};
