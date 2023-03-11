import ReactApexChart from "react-apexcharts";

const DonutChart = () => {
  const state: any = {
    series: [25, 10, 65],
    options: {
      colors: ["#FF0022", "#F9A70D", "#3E2F8A"],
      chart: {
        type: "donut",
      },
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false,
      },
      labels: [
        "Pending payment status",
        "Paid payment status",
        "Cancelled payment status",
      ],
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
      />
    </div>
  );
};

export default DonutChart;
