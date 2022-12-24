import React from "react";
import { OrderReport } from "../Home/Order/OrderReport";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <div className="order_report">
          <OrderReport />
        </div>
      </div>
      <div className="dashboard-right"></div>
    </div>
  );
};

export default Dashboard;
