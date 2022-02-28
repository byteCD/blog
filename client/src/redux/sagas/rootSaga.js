import { all } from "redux-saga/effects";
import { authSagaWatcher } from "./authSaga";
import { postSagaWatcher } from "./postSaga";
import { userSagaWatcher } from "./userSaga";
import { commentSagaWatcher } from "./commentSaga";

function* rootSaga() {
  yield all([
    authSagaWatcher(),
    postSagaWatcher(),
    userSagaWatcher(),
    commentSagaWatcher(),
  ]);
}

export default rootSaga;
