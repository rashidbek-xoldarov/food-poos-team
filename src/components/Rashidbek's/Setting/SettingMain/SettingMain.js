import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Navigate to="hot" />} />
        <Route path="/hot" element={<SettingCardList />} />
      </Routes>
    </div>
  );
};

export default SettingMain;
