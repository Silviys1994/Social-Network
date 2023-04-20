import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const store = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={store.profilePage.posts}
      newPostText={store.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
