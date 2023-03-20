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

let dialogsData = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Oleg" },
  { id: 3, name: "Vlad" },
];

let messagesData = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Yo" },
  { id: 3, message: "Nani?" },
];

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id} />
          <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id} />
          <DialogsItems name={dialogsData[2].name} id={dialogsData[2].id} />
        </div>
      </div>
      <div className={s.messages}>
        <Message id={messagesData[0].id} message={messagesData[0].message} />
        <Message id={messagesData[1].id} message={messagesData[1].message} />
        <Message id={messagesData[2].id} message={messagesData[2].message} />
      </div>
    </div>
  );
};
export default Dialogs;
