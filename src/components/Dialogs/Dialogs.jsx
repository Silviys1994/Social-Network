import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogsItems = (props) => {
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
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <DialogsItems name="Andrey" id="1" />
          <DialogsItems name="Oleg" id="2" />
          <DialogsItems name="Vlad" id="3" />
        </div>
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="Yo" />
        <Message message="Nani?" />
      </div>
    </div>
  );
};
export default Dialogs;
