import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div>
        <img
          src="https://www.shutterstock.com/image-photo/nature-landscape-view-beautiful-tropical-260nw-1940029552.jpg"
          alt="2"
        ></img>
      </div>
      <div>
        <img></img>
      </div>
      <div>ava + description</div>
      <div>
        my posts
        <div>New post</div>
        <div>
          <div className="item">Post 1</div>
          <div className="item">Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
