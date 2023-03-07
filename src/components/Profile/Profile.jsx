import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.Profile}>
      <div>
        <img
          src="https://www.shutterstock.com/image-photo/nature-landscape-view-beautiful-tropical-260nw-1940029552.jpg"
          alt="2"
        ></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
