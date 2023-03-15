import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
