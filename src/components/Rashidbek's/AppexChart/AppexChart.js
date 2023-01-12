import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AppexChart = () => {
  const [state, setState] = useState({
    series: [75, 50, 70, 0],
    options: {
      chart: {
        type: "radialBar",
      },
      stroke: {
        show: false,
        lineCap: "round",
        width: 1,
        colors: ["#282734"],
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
          },
        },
      },
      labels: ["Dine in", "To Go", "Delivery", ""],
      colors: ["#65B0F6", "#FFB572", "#FF7CA3", "transparant"],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={350}
        width={350}
      />
    </div>
  );
};

export default AppexChart;
