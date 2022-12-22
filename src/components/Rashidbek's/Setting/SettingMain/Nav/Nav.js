import React from "react";

import "./Nav.css";

const Nav = () => {
  return (
    <nav className="site-nav">
      <ul className="site-nav-list">
        <li className="site-nav-item">
          <a className="site-nav-link link-active" href="/">
            Hot Dishes
            <span className="line"></span>
          </a>
        </li>
        <li className="site-nav-item">
          <a className="site-nav-link" href="/">
            Cold Dishes
            <span className="line"></span>
          </a>
        </li>
        <li className="site-nav-item">
          <a className="site-nav-link" href="/">
            Soup
            <span className="line"></span>
          </a>
        </li>
        <li className="site-nav-item">
          <a className="site-nav-link" href="/">
            Grill
            <span className="line"></span>
          </a>
        </li>
        <li className="site-nav-item">
          <a className="site-nav-link" href="/">
            Appetizer
            <span className="line"></span>
          </a>
        </li>
        <li className="site-nav-item">
          <a className="site-nav-link" href="/">
            Dessert
            <span className="line"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
