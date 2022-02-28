import {
  SET_USER,
  SET_USERS,
  SET_USER_POSTS,
  SET_USER_LOADED,
} from "../actions/userActions";

const initialState = {
  user: {},
  users: [],
  userPosts: [],
  userLoaded: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_USER_POSTS:
      return { ...state, userPosts: action.payload };
    case SET_USER_LOADED:
      return { ...state, userLoaded: action.payload };
    default:
      return state;
  }
};

export default userReducer;
