import React from "react";
import Nav from "./Nav/Nav";
import SettingCardList from "./SettingCard/SettingCardList";

import "./SettingMain.scss";

const SettingMain = () => {
  return (
    <div className="setting-main">
      <div className="setting-main-top">
        <h2 className="setting-main-top-title">Products Management</h2>
        <select className="setting-main-top-select">
          <option value="0">Manage Categories</option>
          <option value="1">Manage Categories</option>
          <option value="2">Manage Categories</option>
          <option value="3">Manage Categories</option>
        </select>
      </div>
      <Nav />
      <SettingCardList />
    </div>
  );
};

export default SettingMain;
