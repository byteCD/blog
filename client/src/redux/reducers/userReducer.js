import { SET_USER, SET_USERS, SET_USER_POSTS } from "../actions/userActions";

const initialState = {
  user: {},
  users: [],
  userPosts: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_USER_POSTS:
      return { ...state, userPosts: action.payload };
    default:
      return state;
  }
};

export default userReducer;
