import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getPostComments } from "../../redux/actions/postActions";
import "./Post.css";
import { useParams } from "react-router";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Error from "../../components/Error/Error";
import CommentsList from "../../components/CommentsList/CommentsList";
import { getUserLink, routes } from "../../components/AppRouter/AppRoutes";
import CommentForm from "../../components/CommentForm/CommentForm";
import Loader from "../../components/Loader/Loader";

const Post = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { post, postLoaded } = useSelector((state) => state.postReducer);
  const { user, isAuth } = useSelector((state) => state.authReducer);
  const error = useSelector((state) => state.errorReducer.getPostError);
  const postAuthor = user?.id === post?.user?._id;
  const postDate = new Date(post.createdAt).toLocaleString();

  useEffect(() => {
    dispatch(getPost(params.id));
    dispatch(getPostComments(params.id));
  }, []);

  return (
    <Row>
      <Col>
        {postLoaded && <Loader />}
        {!postLoaded && error && <Error error={error} />}
        {!postLoaded && !error && (
          <>
            <div className="Post">
              <div className="Post__info">
                <Link
                  className="Post__link"
                  to={
                    postAuthor ? routes.profile : getUserLink(post?.user?._id)
                  }
                >
                  <span className="Post__username">{post?.user?.username}</span>
                </Link>
                <span className="Post__date">{postDate}</span>
              </div>
              <h2>{post.title}</h2>
              {post.image && <Image className="mb-3" src={post.image} fluid />}
              <div dangerouslySetInnerHTML={{ __html: post.text }} />
              <span className="Post__category">Категория:</span>{" "}
              <span>{post.category}</span>
            </div>
            {isAuth && <CommentForm />}
            <CommentsList />
          </>
        )}
      </Col>
    </Row>
  );
};

export default Post;
