import {
  SET_GET_POST_ERROR,
  SET_SIGNIN_ERROR,
  SET_SIGNUP_ERROR,
  SET_GET_USER_ERROR,
} from "../actions/errorActions";

const initialState = {
  signInError: "",
  signUpError: "",
  getPostError: "",
  getUserError: "",
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNIN_ERROR:
      return { ...state, signInError: action.payload };
    case SET_SIGNUP_ERROR:
      return { ...state, signUpError: action.payload };
    case SET_GET_POST_ERROR:
      return { ...state, getPostError: action.payload };
    case SET_GET_USER_ERROR:
      return { ...state, getUserError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
