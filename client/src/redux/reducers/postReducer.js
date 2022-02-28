import {
  SET_POST,
  SET_POSTS,
  SET_POSTS_LOADED,
  SET_POST_LOADED,
} from "../actions/postActions";

const initialState = {
  post: {},
  posts: [],
  postsLoaded: true,
  postLoaded: true,
  categories: [
    "Без категории",
    "Наука",
    "Программирование",
    "Новости",
    "Разработка",
  ],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, post: action.payload };
    case SET_POSTS:
      return { ...state, posts: action.payload };
    case SET_POSTS_LOADED:
      return { ...state, postsLoaded: action.payload };
    case SET_POST_LOADED:
      return { ...state, postLoaded: action.payload };
    default:
      return state;
  }
};

export default postReducer;
