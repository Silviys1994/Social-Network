import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogsItem.module.css";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink
        to={path}
        className={({ isActive }) => {
          const linkClasses = [s.registerButton];
          if (isActive) linkClasses.push(s.active);
          return linkClasses.join(" ");
        }}
      >
        <div className={s.dialogsBar}>
          <img src={props.img}></img>
          <p>{props.name}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogsItem;
