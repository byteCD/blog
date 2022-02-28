export const SET_SIGNIN_ERROR = "SET_SIGNIN_ERROR";
export const SET_SIGNUP_ERROR = "SET_SIGNUP_ERROR";
export const SET_GET_POST_ERROR = "SET_GET_POST_ERROR";
export const SET_GET_USER_ERROR = "SET_GET_USER_ERROR";

export const setSignInError = (error) => ({
  type: SET_SIGNIN_ERROR,
  payload: error,
});

export const setSignUpError = (error) => ({
  type: SET_SIGNUP_ERROR,
  payload: error,
});

export const setGetPostError = (error) => ({
  type: SET_GET_POST_ERROR,
  payload: error,
});

export const setGetUserError = (error) => ({
  type: SET_GET_USER_ERROR,
  payload: error,
});
