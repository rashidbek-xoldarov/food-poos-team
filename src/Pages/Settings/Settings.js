import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
          <Route
            path="/"
            element={<Navigate to="managament" replace={true} />}
          />
          <Route path="managament/*" element={<SettingMain />} />
          <Route path="appereance" element={<h2>apperriance</h2>} />
        </Routes>
      </div>
    </div>
  );
};

export default Settings;
