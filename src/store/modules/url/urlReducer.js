/* eslint-disable default-param-last */
import { URL_REDIRECT_SET, URL_REDIRECT_REMOVE } from './urlTypes';

const defaultState = {
  redirectedFrom: '',
  redirectedTo: '',
  isRedirected: false
};

const reducer = (state = defaultState, action) => {

  switch (action.type) {

    // login
    case URL_REDIRECT_SET:
      return {
        isRedirected: true,
        redirectedFrom: action.payload.from,
        redirectedTo: action.payload.to
      }

    case URL_REDIRECT_REMOVE:
      return {
        ...defaultState
      }

    default: return state
  }

};

export default reducer;
