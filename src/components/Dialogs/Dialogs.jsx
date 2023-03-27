import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItems/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Oleg" },
    { id: 3, name: "Vlad" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "Nani?" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogsItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
