import { SET_COMMENTS } from "../actions/commentActions";

const initialState = {
  comments: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
