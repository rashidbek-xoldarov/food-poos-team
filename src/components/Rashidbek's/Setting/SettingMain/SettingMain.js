import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav/Nav";
import SettingCardList from "./SettingCard/SettingCardList";

import "./SettingMain.scss";

const SettingMain = () => {
  const [id, setId] = useState(1);

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
      <Nav setId={setId} />
      <Routes>
        <Route path="/" element={<Navigate to={`hot/${id}`} />} />
        <Route path={`hot/${id}`} element={<SettingCardList id={id} />} />
        <Route path={`cold/${id}`} element={<SettingCardList id={id} />} />
        <Route path={`soup/${id}`} element={<SettingCardList id={id} />} />
        <Route path={`grill/${id}`} element={<SettingCardList id={id} />} />
        <Route path={`appetizer/${id}`} element={<SettingCardList id={id} />} />
        <Route path={`dessert/${id}`} element={<SettingCardList id={id} />} />
      </Routes>
    </div>
  );
};

export default SettingMain;
