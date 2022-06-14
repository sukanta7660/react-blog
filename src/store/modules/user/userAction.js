import * as actions from './userActionTYpes';

export const getUser = () => {
  const user = []
  return {
    type: actions.GET_USER,
    payload: user
  }
};

export const createUser = (data) => async (dispatch)=> {
  const user = data
  dispatch({
    type: actions.CREATE_USER,
    payload: user
  })
}

export const updateUser = (user, data) => {
  const updatedUser = {...user, data}
  return {
    type: actions.UPDATE_USER,
    payload: updatedUser
  }
};

export const deleteUser = (user) => {
  const deletedUser = {...user}
  return {
    type: actions.DELETE_USER,
    payload: deletedUser
  }
};
