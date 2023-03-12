import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      colors: ["#3E2F8A"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [100, 300, 400, 200, 100, 60, 70, 91, 200, 100, 200, 100],
      },
    ],
  };

  return (
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      width="500"
    />
  );
};

export default BarChart;
