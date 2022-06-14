import * as actions from './userActionTYpes';

const initialState = {
  data: [],
  loading: false,
  error: [],
  message: null
};

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case actions.GET_USER:
      return state
    default:
      return state
  }
}
