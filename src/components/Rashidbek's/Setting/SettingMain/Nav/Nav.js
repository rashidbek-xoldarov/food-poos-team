import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Nav.css";

const Nav = ({ setId }) => {
  const [category, setCategory] = useState({
    isLoading: true,
    data: [],
    isError: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((data) => {
        if (data.status === 200) {
          setCategory({
            isLoading: false,
            data: data.data,
            isError: false,
          });
        }
      })
      .catch((err) => {
        setCategory({
          isLoading: false,
          data: [],
          isError: err.message,
        });
      });
  }, []);

  return (
    <nav className="site-nav">
      {category.isLoading && <p>Loading... </p>}
      {category.isError && <p>{category.isError}</p>}
      {category.data.length !== 0 && (
        <ul className="site-nav-list">
          {category.data.map((item) => (
            <li key={item.id} className="site-nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "site-nav-link link-active" : "site-nav-link"
                }
                onClick={() => setId(item.id)}
                to={`${item.name.split(" ")[0].toLowerCase()}/${item.id}`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
