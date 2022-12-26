import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="site-nav">
      <ul className="site-nav-list">
        <li className="site-nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "site-nav-link link-active" : "site-nav-link"
            }
            to="hot"
          >
            Hot Dishes
            <span className="line"></span>
          </NavLink>
        </li>
        <li className="site-nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "site-nav-link link-active" : "site-nav-link"
            }
            to="cold"
          >
            Cold Dishes
            <span className="line"></span>
          </NavLink>
        </li>
        <li className="site-nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "site-nav-link link-active" : "site-nav-link"
            }
            to="Soup"
          >
            Soup
            <span className="line"></span>
          </NavLink>
        </li>
        <li className="site-nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "site-nav-link link-active" : "site-nav-link"
            }
            to="grill"
          >
            Grill
            <span className="line"></span>
          </NavLink>
        </li>
        <li className="site-nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "site-nav-link link-active" : "site-nav-link"
            }
            to="appetizer"
          >
            Appetizer
            <span className="line"></span>
          </NavLink>
        </li>
        <li className="site-nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "site-nav-link link-active" : "site-nav-link"
            }
            to="dessert"
          >
            Dessert
            <span className="line"></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
