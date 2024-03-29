import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Posts key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;

    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
