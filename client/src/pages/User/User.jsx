import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserComments,
  getUser,
  getUserPosts,
} from "../../redux/actions/userActions";
import "./User.css";
import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
import Error from "../../components/Error/Error";
import Tabs from "../../components/Tabs/Tabs";
import Loader from "../../components/Loader/Loader";

const User = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { user, userPosts, userLoaded } = useSelector(
    (state) => state.userReducer
  );
  const error = useSelector((state) => state.errorReducer.getUserError);
  const comments = useSelector((state) => state.commentReducer.comments);

  useEffect(() => {
    dispatch(getUser(params.id));
    dispatch(getUserPosts(params.id));
    dispatch(getUserComments(params.id));
  }, []);

  return (
    <Row>
      <Col>
        {userLoaded && <Loader />}
        {!userLoaded && error && <Error error={error} />}
        {!userLoaded && !error && (
          <Col className="User">
            <h3>{user.username}</h3>
            <p>{user.role}</p>
            <Tabs
              userPosts={user.role === "Администратор" && userPosts}
              comments={comments}
            />
          </Col>
        )}
      </Col>
    </Row>
  );
};

export default User;
