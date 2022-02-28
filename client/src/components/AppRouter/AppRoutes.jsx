import AddPost from "../../pages/AddPost/AddPost";
import EditPost from "../../pages/EditPost/EditPost";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Post from "../../pages/Post/Post";
import Profile from "../../pages/Profile/Profile";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import User from "../../pages/User/User";
import AppRoute from "./AppRoute";

export const routes = {
  home: "/",
  all: "*",
  profile: "/profile",
  post: "/post/:id",
  user: "/user/:id",
  signUp: "/signup",
  signIn: "/signin",
  addPost: "/post/add",
  editPost: "/post/edit/:id",
};

export const getPostLink = (id) => routes.post.replace(":id", id);
export const getEditPostLink = (id) => routes.editPost.replace(":id", id);
export const getUserLink = (id) => routes.user.replace(":id", id);

export const publicRoutes = [
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.post,
    element: <Post />,
  },
  {
    path: routes.user,
    element: <User />,
  },
  {
    path: routes.all,
    element: <NotFound />,
  },
];

export const userRoutes = [
  {
    path: routes.profile,
    element: (
      <AppRoute user>
        <Profile />
      </AppRoute>
    ),
  },
];

export const guestRoutes = [
  {
    path: routes.signUp,
    element: (
      <AppRoute guest>
        <SignUp />
      </AppRoute>
    ),
  },
  {
    path: routes.signIn,
    element: (
      <AppRoute guest>
        <SignIn />
      </AppRoute>
    ),
  },
];

export const adminRoutes = [
  {
    path: routes.addPost,
    element: (
      <AppRoute admin>
        <AddPost />
      </AppRoute>
    ),
  },
  {
    path: routes.editPost,
    element: (
      <AppRoute admin>
        <EditPost />
      </AppRoute>
    ),
  },
];
