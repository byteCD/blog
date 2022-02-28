export const GET_USER = "GET_USER";
export const GET_USERS = "GET_USERS";
export const SET_USER = "SET_USER";
export const SET_USERS = "SET_USERS";
export const GET_USER_POSTS = "GET_USER_POSTS";
export const SET_USER_POSTS = "SET_USER_POSTS";
export const GET_USER_COMMENTS = "GET_USER_COMMENTS";
export const SET_USER_LOADED = "SET_USER_LOADED";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const getUser = (id) => ({
  type: GET_USER,
  payload: id,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const setUserPosts = (posts) => ({
  type: SET_USER_POSTS,
  payload: posts,
});

export const getUserPosts = (id) => ({
  type: GET_USER_POSTS,
  payload: id,
});

export const getUserComments = (id) => ({
  type: GET_USER_COMMENTS,
  payload: id,
});

export const setUserLoaded = (userLoaded) => ({
  type: SET_USER_LOADED,
  payload: userLoaded,
});
