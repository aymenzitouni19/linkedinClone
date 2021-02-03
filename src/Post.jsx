import React from "react";
import { Avatar } from "@material-ui/core";
import {
  ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
  ChatOutlined as ChatOutlinedIcon,
  ShareOutlined as ShareOutlinedIcon,
  SendOutlined as SendOutlinedIcon,
} from "@material-ui/icons";
import InputOption from "./InputOption";
import "./Post.css";

function Post({ name, description, message, photUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" />
        <div className="post__info">
          <h2>Aymen Zitouni</h2>
          <p>Full stack web developer at AIESEC</p>
        </div>
      </div>
      <div className="post__body">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, sit.
        </p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
