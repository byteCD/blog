import { takeEvery, call, put } from "redux-saga/effects";
import userService from "../../services/UserService";
import { setComments } from "../actions/commentActions";
import { setGetUserError } from "../actions/errorActions";
import {
  GET_USER,
  GET_USERS,
  setUsers,
  setUser,
  GET_USER_POSTS,
  setUserPosts,
  GET_USER_COMMENTS,
  setUserLoaded,
} from "../actions/userActions";

function* getUsersWorker() {
  try {
    const users = yield call(userService.getUsers);

    yield put(setUsers(users.data));
  } catch (error) {}
}

function* getUserWorker(action) {
  try {
    const user = yield call(userService.getUser, action.payload);

    yield put(setUser(user.data));
    yield put(setUserLoaded(false));
  } catch (error) {
    yield put(setGetUserError(error.response.data.error));
    yield put(setUserLoaded(false));
  }
}

function* getUserPostsWorker(action) {
  try {
    const posts = yield call(userService.getUserPosts, action.payload);

    yield put(setUserPosts(posts.data));
  } catch (error) {}
}

function* getUserCommentsWorker(action) {
  try {
    const comments = yield call(userService.getUserComments, action.payload);

    yield put(setComments(comments.data));
  } catch (error) {}
}

export function* userSagaWatcher() {
  yield takeEvery(GET_USERS, getUsersWorker);
  yield takeEvery(GET_USER, getUserWorker);
  yield takeEvery(GET_USER_POSTS, getUserPostsWorker);
  yield takeEvery(GET_USER_COMMENTS, getUserCommentsWorker);
}
