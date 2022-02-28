import React, { useEffect } from "react";
import "./Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { getUserComments, getUserPosts } from "../../redux/actions/userActions";
import Tabs from "../../components/Tabs/Tabs";

const Profile = () => {
  const { user, isAdmin } = useSelector((state) => state.authReducer);
  const userPosts = useSelector((state) => state.userReducer.userPosts);
  const comments = useSelector((state) => state.commentReducer.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPosts(user.id));
    dispatch(getUserComments(user.id));
  }, []);

  return (
    <Row>
      <Col>
        <Col className="Profile">
          <h3>{user.username}</h3>
          <p>{user.role}</p>
          <Tabs userPosts={isAdmin && userPosts} comments={comments} />
        </Col>
      </Col>
    </Row>
  );
};

export default Profile;
