import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://www.shutterstock.com/image-photo/nature-landscape-view-beautiful-tropical-260nw-1940029552.jpg"
          alt="2"
        ></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
