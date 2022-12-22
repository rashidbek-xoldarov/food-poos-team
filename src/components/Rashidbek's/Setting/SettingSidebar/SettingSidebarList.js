import React from "react";
import { NavLink } from "react-router-dom";
import {
  About,
  Appereance,
  Management,
  Notification,
  Restaurant,
  Security,
} from "../../../../assets/images/icons/icons";

import "./SettingSidebarList.scss";

const SettingSidebarList = () => {
  const SettingList = [
    {
      image: <Appereance className="settingbar-img" />,
      url: "appereance",
      title: "Appereance",
      text: "Dark and Light mode, Font size",
    },
    {
      image: <Restaurant className="settingbar-img" />,
      url: "restaurant",
      title: "Your Restaurant",
      text: "Dark and Light mode, Font size",
    },
    {
      image: <Management className="settingbar-img" />,
      url: "/settings",
      title: "Products Management",
      text: "Manage your product, pricing, etc",
    },

    {
      image: <Notification className="settingbar-img" />,
      url: "notifications",
      title: "Notifications",
      text: "Customize your notifications",
    },
    {
      image: <Security className="settingbar-img" />,
      url: "security",
      title: "Security",
      text: "Configure Password, PIN, etc",
    },
    {
      image: <About className="settingbar-img" />,
      url: "about",
      title: "About Us",
      text: "Find out more about Posly",
    },
  ];

  return (
    <ul className="settingbar-list">
      {SettingList.map((item) => (
        <li className="settingbar-item" key={item.title}>
          <NavLink
            to={item.url}
            end
            className={({ isActive }) =>
              isActive
                ? "settingbar-link active-link-settingbar"
                : "settingbar-link"
            }
          >
            {item.image}
            <div className="settingbar-item-info">
              <h3 className="settingbar-item-title">{item.title}</h3>
              <p className="settingbar-item-text">{item.text}</p>
            </div>
            <span className="settingbar-line"></span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SettingSidebarList;
