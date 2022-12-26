import React from "react";
import { OrderReport } from "../Home/Order/OrderReport";

import "./Dashboard.scss";
import DashboardHeader from "./DashboardLeft/DashboardHeader";
import DashboardStatistics from "./DashboardLeft/DashboardStatistics";
import DashboardRight from "./DashboardRight/DashboardRight";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-left">
        <DashboardHeader />
        <div className="dashboard-main">
          <DashboardStatistics />
          <div className="order_report">
            <OrderReport />
          </div>
        </div>
      </div>
      <div className="dashboard-right">
        <DashboardRight />
      </div>
    </div>
  );
};

export default Dashboard;
