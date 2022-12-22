import React from "react";
import { NavLink } from "react-router-dom";
import {
  Logoo,
  Home,
  Discount,
  Dashbard,
  Messages,
  Notifications,
  Settings,
  LogOut,
} from "../../assets/images/icons/icons";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li className="sidebar_item">
        <Logoo />
      </li>
      <li className="sidebar_item">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/home"
        >
          <Home />
        </NavLink>
      </li>
      <li className="sidebar_item">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/discount"
        >
          <Discount />
        </NavLink>
      </li>
      <li className="sidebar_item">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/dashboard"
        >
          <Dashbard />
        </NavLink>
      </li>
      <li className="sidebar_item">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/messages"
        >
          <Messages />
        </NavLink>
      </li>
      <li className="sidebar_item">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/notifications"
        >
          <Notifications />
        </NavLink>
      </li>
      <li className="sidebar_item">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/settings"
        >
          <Settings />
        </NavLink>
      </li>
      <li className="sidebar_item">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/log"
        >
          <LogOut />
        </NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
