import React from "react";
import { Link } from "react-router-dom";
import { getPostLink } from "../AppRouter/AppRoutes";

const TabPosts = ({ userPosts }) => {
  return userPosts
    .map((post) => (
      <p key={post._id}>
        <Link to={getPostLink(post._id)}>{post.title}</Link>
      </p>
    ))
    .reverse();
};

export default TabPosts;
