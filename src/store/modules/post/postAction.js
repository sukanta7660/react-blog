import * as actions from './postTypes';

export const getPosts = () => {
  const posts = []
  return {
    type: actions.GET_POST,
    payload: posts
  }
};

export const createPost = (data) => async (dispatch)=> {
  const settings = data
  dispatch({
    type: actions.CREATE_POST,
    payload: settings
  })
}

export const updatePost = (settings, data) => {
  const updatedSettings = {...settings, data}
  return {
    type: actions.UPDATE_POST,
    payload: updatedSettings
  }
};

export const deletePost = (settings) => {
  const deletedSettings = {...settings}
  return {
    type: actions.DELETE_POST,
    payload: deletedSettings
  }
};
