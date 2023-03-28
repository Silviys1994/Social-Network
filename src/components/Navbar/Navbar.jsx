import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/Profile"
          className={({ isActive }) => {
            const linkClasses = [s.registerButton];
            if (isActive) linkClasses.push(s.active);
            return linkClasses.join(" ");
          }}
        >
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => {
            const linkClasses = [s.registerButton];
            if (isActive) linkClasses.push(s.active);
            return linkClasses.join(" ");
          }}
        >
          Dialogs
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/News"
          className={({ isActive }) => {
            const linkClasses = [s.registerButton];
            if (isActive) linkClasses.push(s.active);
            return linkClasses.join(" ");
          }}
        >
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/Music"
          className={({ isActive }) => {
            const linkClasses = [s.registerButton];
            if (isActive) linkClasses.push(s.active);
            return linkClasses.join(" ");
          }}
        >
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/Settings"
          className={({ isActive }) => {
            const linkClasses = [s.registerButton];
            if (isActive) linkClasses.push(s.active);
            return linkClasses.join(" ");
          }}
        >
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/Friends"
          className={({ isActive }) => {
            const linkClasses = [s.registerButton];
            if (isActive) linkClasses.push(s.active);
            return linkClasses.join(" ");
          }}
        >
          Friends
        </NavLink>
        <div className={`${s.items} ${s.friends}`}>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/590px-June_odd-eyed-cat.jpg"></img>
            {props.message}
            <p>Andrey</p>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/590px-June_odd-eyed-cat.jpg"></img>
            {props.message}
            <p>Oleg</p>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/590px-June_odd-eyed-cat.jpg"></img>
            {props.message}
            <p>Vlad</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
