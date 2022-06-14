import { combineReducers } from 'redux';
import postReducer from './modules/post/postReducer';

const reducers = {
  post: postReducer
}

export default combineReducers(reducers)
