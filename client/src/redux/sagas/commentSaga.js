import { takeEvery, call, put } from "redux-saga/effects";
import commentService from "../../services/CommentService";
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from "../actions/commentActions";
import { getPostComments } from "../actions/postActions";

function* addCommentWorker(action) {
  try {
    const token = localStorage.getItem("token");

    yield call(commentService.addComment, action.payload, token);
    yield put(getPostComments(action.payload.post));
  } catch (error) {}
}

function* deleteCommentWorker(action) {
  try {
    const token = localStorage.getItem("token");

    yield call(commentService.deleteComment, action.payload.id, token);
    yield put(getPostComments(action.payload.post));
  } catch (error) {}
}

function* editCommentWorker(action) {
  try {
    const token = localStorage.getItem("token");

    yield call(commentService.editComment, action.payload, token);
    yield put(getPostComments(action.payload.post));
  } catch (error) {}
}

export function* commentSagaWatcher() {
  yield takeEvery(ADD_COMMENT, addCommentWorker);
  yield takeEvery(DELETE_COMMENT, deleteCommentWorker);
  yield takeEvery(EDIT_COMMENT, editCommentWorker);
}
