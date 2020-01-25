import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
  <div className={s.item}>
    <img src='https://w0.pngwave.com/png/85/114/avatar-user-profile-male-logo-profile-icon-png-clip-art.png'></img>
      <div className={s.post}>Post 1</div>
      <div className={s.span__wrapper}>
      <span className={s.span}>like</span>
      <span className={s.span}>dislike</span>
  </div>
  </div>
  );
};

export default Post;
