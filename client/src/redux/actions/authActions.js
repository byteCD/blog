export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";
export const SIGNOUT = "SIGNOUT";
export const SET_AUTH_USER = "SET_AUTH_USER";
export const REMOVE_AUTH_USER = "REMOVE_AUTH_USER";
export const AUTH = "AUTH";
export const SET_AUTH_LOADED = "SET_AUTH_LOADED";
export const SET_IS_ADMIN = "SET_IS_ADMIN";

export const setAuthUser = (user) => ({
  type: SET_AUTH_USER,
  payload: user,
});

export const signIn = (user) => ({
  type: SIGNIN,
  payload: user,
});

export const signUp = (user) => ({
  type: SIGNUP,
  payload: user,
});

export const signOut = () => ({
  type: SIGNOUT,
});

export const removeAuthUser = () => ({
  type: REMOVE_AUTH_USER,
});

export const auth = () => ({
  type: AUTH,
});

export const setAuthLoaded = (authLoaded) => ({
  type: SET_AUTH_LOADED,
  payload: authLoaded,
});

export const setIsAdmin = (isAdmin) => ({
  type: SET_IS_ADMIN,
  payload: isAdmin,
});
