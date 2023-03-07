import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/590px-June_odd-eyed-cat.jpg"></img>
        {props.message}
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
