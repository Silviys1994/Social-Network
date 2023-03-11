import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={s.posts}>
        <Posts message="Hi, how are you?" likesCount="15" />
        <Posts message="It`s my first post" likesCount="11" />
      </div>
    </div>
  );
};

export default MyPosts;
