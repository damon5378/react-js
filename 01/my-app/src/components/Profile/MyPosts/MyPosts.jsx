import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {



  let postsElements = 
      props.postData.map( (p) => <Post  message = {p.message} likeCount={p.likeCount}/>)


  return (
    <div className = {s.postsBlock}>
      <h3 className = {s.postTitle}>My posts</h3>
      <div>
        <div>
          <textarea className = {s.textarea}></textarea>
      </div>
      <div>
      <button className = {s.btnPost}>Add post</button>
      </div>
      </div>
      <div className = {s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
