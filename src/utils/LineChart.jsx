import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const seriesData = [
    {
      name: "",
      data: [31, 40, 28, 51, 42, 109, 100, 21, 51, 62, 11, 74],
      color: "#48525B",
    },
    {
      name: "",
      data: [11, 32, 45, 32, 34, 52, 41, 21, 51, 62, 11, 74],
      color: "#FDA800",
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "month",
      categories: [
        "Jan",
        "Feb",
        "March",
        "Apirl",
        "May",
        "June",
        "July",
        "Augest",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      x: {
        format: "month",
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <div className="flex gap-10">
          <h1 className="text-xl font-semibold text-[#48525B] font-primary">Driver & Rider</h1>
          <div className="flex gap-10">
            <div className="flex gap-2 items-center rounded-sm">
              <div className="w-4 h-1 bg-[#48525B]"></div>
              <h2>Drivers</h2>
            </div>
            <div className="flex gap-2 items-center rounded-sm">
              <div className="w-4 h-1 bg-[#FDA800]"></div>
              <h2>Riders</h2>
            </div>
          </div>
        </div>
        <ReactApexChart
          options={options}
          series={seriesData}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
export default LineChart;
