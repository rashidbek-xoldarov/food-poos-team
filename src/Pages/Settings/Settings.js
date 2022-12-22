import React from "react";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import SettingMain from "../../components/Rashidbek's/Setting/SettingMain/SettingMain";
import SettingSidebarList from "../../components/Rashidbek's/Setting/SettingSidebar/SettingSidebarList";

import "./Settings.scss";

const Settings = () => {
  return (
    <div className="settings">
      <h2 className="settings-title">Settings</h2>
      <div className="settings-inner">
        <SettingSidebarList />
        <Routes>
          <Route index element={<SettingMain />} />
        </Routes>
      </div>
    </div>
  );
};

export default Settings;
