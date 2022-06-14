import { combineReducers } from 'redux';
import postReducer from './modules/post/postReducer';
import userReducer from "./modules/user/userReducer";

const reducers = {
  user: userReducer,
  post: postReducer
}

export default combineReducers(reducers)
