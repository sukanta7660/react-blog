import * as actions from './postTypes';

const initialState = {
  data: [],
  loading: false,
  error: [],
  message: null
};

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case actions.CREATE_POST:
      return action.payload
    default:
      return state
  }
}
