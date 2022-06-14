export const AUTH_ACTION_TYPE_LOGIN = 'LOGIN';
export const AUTH_ACTION_TYPE_LOGOUT = 'LOGOUT';

export const login = user => {
  return {
    type: AUTH_ACTION_TYPE_LOGIN,
    payload: user
  }
}

export const logout = () => {
  return {
    type: AUTH_ACTION_TYPE_LOGOUT
  }
}
