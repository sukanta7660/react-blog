import * as actions from './postTypes';

export const getPosts = () => {
  const posts = []
  return {
    type: actions.GET_POST,
    payload: posts
  }
};

export const createPost = (data) => async (dispatch)=> {
  const posts = data
  dispatch({
    type: actions.CREATE_POST,
    payload: posts
  })
}

export const updatePost = (post, data) => {
  const updatedPosts = {...post, data}
  return {
    type: actions.UPDATE_POST,
    payload: updatedPosts
  }
};

export const deletePost = (post) => {
  const deletedPost = {...post}
  return {
    type: actions.DELETE_POST,
    payload: deletedPost
  }
};
