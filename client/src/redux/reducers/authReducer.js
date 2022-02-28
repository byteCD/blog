import {
  SET_AUTH_USER,
  REMOVE_AUTH_USER,
  SET_AUTH_LOADED,
  SET_IS_ADMIN,
} from "../actions/authActions";

const initialState = {
  user: {},
  isAuth: false,
  isAdmin: false,
  authLoaded: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return { ...state, user: action.payload, isAuth: true };
    case REMOVE_AUTH_USER:
      return { ...state, user: {}, isAuth: false };
    case SET_AUTH_LOADED:
      return { ...state, authLoaded: action.payload };
    case SET_IS_ADMIN:
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};

export default authReducer;
