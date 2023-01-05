import React from "react";

import foodImg from "../../../assets/images/food.png";
import chart from "../../../assets/images/Chart.png";
import "./DashboardRight.scss";
import AppexChart from "../../../components/Rashidbek's/AppexChart/AppexChart";

const DashboardRight = () => {
  const list = Array(3).fill(1);

  return (
    <div className="dashboard-right-wrapper">
      <div className="dashboard-right-top">
        <div className="dashboard-right-header">
          <h3 className="dashboard-right-title">Most Ordered</h3>
          <select className="dashboard-right-select">
            <option value="0">Today</option>
            <option value="0">Today</option>
            <option value="0">Today</option>
            <option value="0">Today</option>
          </select>
        </div>
        <div className="dashboard-right-list-wrapper">
          <ul className="dashboard-right-list">
            {list.map((item, index) => (
              <li key={index} className="dashboard-right-item">
                <img src={foodImg} alt="foods" width="56" height="56" />
                <div className="dashboard-right-item-info">
                  <h4 className="dashboard-right-item-title">
                    Spicy seasoned seafood noodles
                  </h4>
                  <p className="dashboard-right-item-price">
                    200 dishes ordered
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <button className="dashboard-right-btn">View All</button>
        </div>
      </div>
      <div className="dashboard-right-boottom">
        <div className="dashboard-right-header">
          <h3 className="dashboard-right-title">Most Type of Order</h3>
          <select className="dashboard-right-select">
            <option value="0">Today</option>
            <option value="0">Today</option>
            <option value="0">Today</option>
            <option value="0">Today</option>
          </select>
        </div>
        <div className="dashboard-right-boottom-img-wrapper">
          <AppexChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardRight;
