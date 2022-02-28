import React, { useState } from "react";
import { Tab, Tabs as BootstrapTabs } from "react-bootstrap";
import TabComments from "./TabComments";
import TabPosts from "./TabPosts";
import "./Tabs.css";

const Tabs = ({ userPosts, comments }) => {
  const [tab, setTab] = useState(() => (userPosts ? "posts" : "comments"));

  return (
    <BootstrapTabs
      className="mb-3"
      activeKey={tab}
      onSelect={(tab) => setTab(tab)}
    >
      {userPosts && (
        <Tab eventKey="posts" title="Посты">
          <TabPosts userPosts={userPosts} />
        </Tab>
      )}
      <Tab eventKey="comments" title="Комментарии">
        <TabComments comments={comments} />
      </Tab>
    </BootstrapTabs>
  );
};

export default Tabs;
