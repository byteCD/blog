import React from "react";
import { Link } from "react-router-dom";
import { getPostLink } from "../AppRouter/AppRoutes";

const TabComments = ({ comments }) => {
  return comments
    .map((comment) => (
      <p key={comment._id}>
        <Link to={getPostLink(comment.post)}>{comment.text}</Link>
      </p>
    ))
    .reverse();
};

export default TabComments;
