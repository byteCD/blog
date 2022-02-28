import { SET_POST, SET_POSTS } from "../actions/postActions";

const initialState = {
  post: {},
  posts: [],
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
    default:
      return state;
  }
};

export default postReducer;
