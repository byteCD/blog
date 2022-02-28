export const ADD_POST = "ADD_POST";
export const SET_POST = "SET_POST";
export const SET_POSTS = "SET_POSTS";
export const GET_POST = "GET_POST";
export const GET_POSTS = "GET_POSTS";
export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";
export const SET_POSTS_LOADED = "SET_POSTS_LOADED";
export const SET_POST_LOADED = "SET_POST_LOADED";

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const setPost = (post) => ({
  type: SET_POST,
  payload: post,
});

export const getPost = (post) => ({
  type: GET_POST,
  payload: post,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const getPosts = () => ({
  type: GET_POSTS,
});

export const deletePost = (post) => ({
  type: DELETE_POST,
  payload: post,
});

export const editPost = (post) => ({
  type: EDIT_POST,
  payload: post,
});

export const getPostComments = (post) => ({
  type: GET_POST_COMMENTS,
  payload: post,
});

export const setPostsLoaded = (postsLoaded) => ({
  type: SET_POSTS_LOADED,
  payload: postsLoaded,
});

export const setPostLoaded = (postLoaded) => ({
  type: SET_POST_LOADED,
  payload: postLoaded,
});
