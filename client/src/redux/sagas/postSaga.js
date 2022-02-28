import { takeEvery, call, put } from "redux-saga/effects";
import postService from "../../services/PostService";
import { setComments } from "../actions/commentActions";
import { setGetPostError } from "../actions/errorActions";
import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POST,
  GET_POSTS,
  GET_POST_COMMENTS,
  setPost,
  setPostLoaded,
  setPosts,
  setPostsLoaded,
} from "../actions/postActions";

function* addPostWorker(action) {
  try {
    const token = localStorage.getItem("token");

    yield call(postService.addPost, action.payload, token);
    yield call(getPostsWorker);
  } catch (error) {}
}

function* getPostWorker(action) {
  try {
    const post = yield call(postService.getPost, action.payload);

    yield put(setPost(post.data));
    yield put(setPostLoaded(false));
  } catch (error) {
    yield put(setGetPostError(error.response.data.error));
    yield put(setPostLoaded(false));
  }
}

function* getPostsWorker() {
  try {
    const posts = yield call(postService.getPosts);

    yield put(setPosts(posts.data));
    yield put(setPostsLoaded(false));
  } catch (error) {}
}

function* deletePostWorker(action) {
  try {
    const token = localStorage.getItem("token");

    yield call(postService.deletePost, action.payload, token);
    yield call(getPostsWorker);
  } catch (error) {}
}

function* editPostWorker(action) {
  try {
    const token = localStorage.getItem("token");
    yield call(postService.editPost, action.payload, token);
    yield call(getPostsWorker);
  } catch (error) {}
}

function* getPostCommentsWorker(action) {
  try {
    const comments = yield call(postService.getPostComments, action.payload);

    yield put(setComments(comments.data));
  } catch (error) {}
}

export function* postSagaWatcher() {
  yield takeEvery(ADD_POST, addPostWorker);
  yield takeEvery(GET_POST, getPostWorker);
  yield takeEvery(GET_POSTS, getPostsWorker);
  yield takeEvery(DELETE_POST, deletePostWorker);
  yield takeEvery(EDIT_POST, editPostWorker);
  yield takeEvery(GET_POST_COMMENTS, getPostCommentsWorker);
}
