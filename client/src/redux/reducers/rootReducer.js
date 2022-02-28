import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import errorReducer from "../reducers/errorReducer";
import postReducer from "../reducers/postReducer";
import userReducer from "../reducers/userReducer";
import commentReducer from "../reducers/commentReducer";

const rootReducer = combineReducers({
  authReducer,
  errorReducer,
  postReducer,
  userReducer,
  commentReducer,
});

export default rootReducer;
