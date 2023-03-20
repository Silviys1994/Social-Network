import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It`s my first post", likesCount: 11 },
  ];

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
        <Posts
          message={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Posts
          message={postData[1].message}
          likesCount={postData[1].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
