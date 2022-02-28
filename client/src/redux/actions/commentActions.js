export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const SET_COMMENTS = "SET_COMMENTS";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});

export const deleteComment = (comment) => ({
  type: DELETE_COMMENT,
  payload: comment,
});

export const editComment = (comment) => ({
  type: EDIT_COMMENT,
  payload: comment,
});

export const setComments = (comments) => ({
  type: SET_COMMENTS,
  payload: comments,
});
