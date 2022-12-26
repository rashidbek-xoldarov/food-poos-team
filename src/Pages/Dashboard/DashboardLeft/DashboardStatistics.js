import React from "react";

import "./DashboardStatisics.scss";

const DashboardStatistics = () => {
  const StatisticsList = [
    {
      percent: "+32.40%",
      price: "10,243.00",
      title: "Total Revenue",
      class: "first-percent",
    },
    {
      percent: "-12.40%",
      price: "23,456",
      title: "Total Dish Ordered",
      class: "second-percent",
    },
    {
      percent: "+2.40%",
      price: "1,234",
      title: "Total Customer",
      class: "third-percent",
    },
  ];

  return (
    <ul className="dashboard-statistics-list">
      {StatisticsList.map((item) => (
        <li key={item.title} className="dashboard-statistics-item">
          <span className={`dashboard-statistics-percent ${item.class}`}>
            {item.percent}
          </span>
          <h3 className="dashboard-statistics-title">{item.price}</h3>
          <p className="dashboard-statistics-text">{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default DashboardStatistics;
