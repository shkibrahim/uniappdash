import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
    const seriesData = [{
        name: '',
        data: [31, 40, 28, 51, 42, 109, 100, 21, 51, 62, 11, 74],
        color: "#48525B"
    }, {
        name: '',
        data: [11, 32, 45, 32, 34, 52, 41, 21, 51, 62, 11, 74],
        color: "#FDA800"
    }];

    const options = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'month',
            categories: ["Jan", "Feb", "March", "Apirl", "May", "June", "July", "Augest", "Sept", "Oct", "Nov", "Dec"]
        },
        tooltip: {
            x: {
                format: 'month'
            },
        },
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={seriesData} type="area" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};
export default LineChart

