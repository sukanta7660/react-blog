import { combineReducers } from 'redux';
import postReducer from './modules/post/postReducer';
import userReducer from "./modules/user/userReducer";
import urlReducer from './modules/url/urlReducer';

const reducers = {
  user: userReducer,
  post: postReducer,
  url: urlReducer
}

export default combineReducers(reducers)
