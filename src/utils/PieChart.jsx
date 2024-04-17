import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const [series, setSeries] = useState([44, 55, 13]);

  const options = {
    chart: {
      width: 380,
      type: 'donut',
    },
    labels: ["Total Hired", "Total Canceled", "Total Pending"],
    colors: ["#52C93F", "#FF2727", "#FFB000"], 

    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    }
  };

  const appendData = () => {
    setSeries(prevSeries => [...prevSeries, Math.floor(Math.random() * (100 - 1 + 1)) + 1]);
  };

  const removeData = () => {
    if (series.length === 1) return;
    setSeries(prevSeries => prevSeries.slice(0, -1));
  };

  const randomize = () => {
    setSeries(prevSeries => prevSeries.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1));
  };

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  };

  return (
    <div>
      <div>
        <div className="chart-wrap">
          <div id="chart">
            <ReactApexChart options={options} series={series} type="donut" width={200} />
          </div>
        </div>
      
       
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
