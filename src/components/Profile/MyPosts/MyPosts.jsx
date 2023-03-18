import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Posts";

const Posts = (props) => {
  return <Post message={props.message} likesCount={props.likesCount} />;
};

const MyPosts = () => {
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount="15" />
        <Post message="It`s my first post" likesCount="11" />
      </div>
    </div>
  );
};

export default MyPosts;
