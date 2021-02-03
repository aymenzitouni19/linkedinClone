import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="/img.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>AYMEN ZITOUNI</h2>
        <h4>a.zitouni@esi-sba.dz</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">3,452</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">4,335</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent :</p>
        {recentItem("coding")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
      </div>
    </div>
  );
}

export default Sidebar;
