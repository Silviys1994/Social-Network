import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink
            to="./id_1"
            className={({ isActive }) => {
              const linkClasses = [s.registerButton];
              if (isActive) linkClasses.push(s.active);
              return linkClasses.join(" ");
            }}
          >
            Andrey
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="./id_2"
            className={({ isActive }) => {
              const linkClasses = [s.registerButton];
              if (isActive) linkClasses.push(s.active);
              return linkClasses.join(" ");
            }}
          >
            Oleg
          </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink
            to="./id_3"
            className={({ isActive }) => {
              const linkClasses = [s.registerButton];
              if (isActive) linkClasses.push(s.active);
              return linkClasses.join(" ");
            }}
          >
            Vlad
          </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Yo</div>
        <div className={s.message}>Nani?</div>
      </div>
    </div>
  );
};
export default Dialogs;
