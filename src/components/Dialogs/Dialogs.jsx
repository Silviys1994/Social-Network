import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItems/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogsItem key={d.id} name={d.name} id={d.id} img={d.img} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Add Post</button>
      </div>
    </div>
  );
};
export default Dialogs;
