import { takeEvery, call, put, select } from "redux-saga/effects";
import authService from "../../services/AuthService";
import {
  SIGNIN,
  setAuthUser,
  SIGNOUT,
  removeAuthUser,
  AUTH,
  setIsLoaded,
  SIGNUP,
  setIsAdmin,
} from "../actions/authActions";
import { setSignInError, setSignUpError } from "../actions/errorActions";

function* signInWorker(action) {
  try {
    const user = yield call(authService.signIn, action.payload);
    localStorage.setItem("token", user.data.token);
    yield put(setAuthUser(user.data.user));

    if (user.data.user.role === "Администратор") {
      yield put(setIsAdmin(true));
    }

    yield put(setIsLoaded(false));
  } catch (error) {
    yield put(setSignInError(error.response.data.error));
    yield put(setIsLoaded(false));
    localStorage.removeItem("token");
  }
}

function* signUpWorker(action) {
  try {
    const user = yield call(authService.signUp, action.payload);
    localStorage.setItem("token", user.data.token);

    yield put(setAuthUser(user.data.user));
    yield put(setIsLoaded(false));
  } catch (error) {
    yield put(setSignUpError(error.response.data.error));
    localStorage.removeItem("token");
    yield put(setIsLoaded(false));
  }
}

function* signOutWorker() {
  try {
    const user = yield select((state) => state.authReducer.user);

    if (user.role === "Администратор") {
      yield put(setIsAdmin(false));
    }

    localStorage.removeItem("token");
    yield put(removeAuthUser());
  } catch (error) {
    localStorage.removeItem("token");
    yield put(setIsLoaded(false));
  }
}

function* authWorker() {
  try {
    const token = localStorage.getItem("token");
    const user = yield call(authService.auth, token);
    yield put(setAuthUser(user.data.user));

    if (user.data.user.role === "Администратор") {
      yield put(setIsAdmin(true));
    }

    yield put(setIsLoaded(false));
  } catch (error) {
    localStorage.removeItem("token");
    yield put(setIsLoaded(false));
  }
}

export function* authSagaWatcher() {
  yield takeEvery(SIGNIN, signInWorker);
  yield takeEvery(SIGNUP, signUpWorker);
  yield takeEvery(SIGNOUT, signOutWorker);
  yield takeEvery(AUTH, authWorker);
}
