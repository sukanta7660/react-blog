import * as actions from './userActionTYpes';

const initialState = {
  loading: false,
  isLoggedIn: false,
  data: {},
  lastUser: {},
  error: '',
  errors: {},
  requireAuth: false,
};

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actions.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        data: action.payload,
        lastUser: {},
        error: '',
        errors: {}
      }
    case actions.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload?.message,
        errors: action.payload?.errors || {}
      }
    case actions.GET_USER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actions.GET_USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        data: action.payload,
        error: '',
        errors: {}
      }
    case actions.GET_USER_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload?.message,
        errors: action.payload?.errors || {}
      }

    // logout
    case actions.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true
      }

    case actions.LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        data: {},
        lastUser: action.payload,
        error: '',
        errors: {}
      }

    case actions.LOGOUT_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        errors: action.payload?.errors || {}
      }
    default:
      return state
  }
}

export default reducer
