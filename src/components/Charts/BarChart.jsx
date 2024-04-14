import React, { useEffect, useRef } from 'react';

const BarChart = () => {
  const chartContainerRef = useRef(null);
  const myChart = useRef(null);

  useEffect(() => {
    if (!myChart.current) {
      // Load echarts script dynamically
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.min.js';
      script.async = true;
      script.onload = () => {
        myChart.current = window.echarts.init(chartContainerRef.current);
        
        const series = [
          
          {
            data: [30, 7, 10, 20, 10, 7, 50],
            type: 'bar',
            stack: 'a',
            name: 'c',
            itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0, color: '#000' // start color
                  }, {
                      offset: 1, color: '#fdbe00' // end color
                  }],
                  global: false // false by default
                }
              }
          },
          
          
        
        ];

        const stackInfo = {};
        for (let i = 0; i < series[0].data.length; ++i) {
          for (let j = 0; j < series.length; ++j) {
            const stackName = series[j].stack;
            if (!stackName) {
              continue;
            }
            if (!stackInfo[stackName]) {
              stackInfo[stackName] = {
                stackStart: [],
                stackEnd: []
              };
            }
            const info = stackInfo[stackName];
            const data = series[j].data[i];
            if (data && data !== '-') {
              if (info.stackStart[i] == null) {
                info.stackStart[i] = j;
              }
              info.stackEnd[i] = j;
            }
          }
        }
        for (let i = 0; i < series.length; ++i) {
          const data = series[i].data;
          const info = stackInfo[series[i].stack];
          for (let j = 0; j < series[i].data.length; ++j) {
            const isEnd = info.stackEnd[j] === i;
            const topBorder = isEnd ? 20 : 0;
            const bottomBorder = 0;
            data[j] = {
              value: data[j],
              itemStyle: {
                borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder]
              }
            };
          }
        }

        const option = {
          xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'March', 'Apirl', 'May', 'June', 'July']
          },
          yAxis: {
            type: 'value'
          },
          series: series
        };

        if (option && typeof option === 'object') {
          myChart.current.setOption(option);
        }

        // Resize chart on window resize
        const resizeHandler = () => {
          if (myChart.current) {
            myChart.current.resize();
          }
        };
        window.addEventListener('resize', resizeHandler);

        return () => {
          window.removeEventListener('resize', resizeHandler);
        };
      };
      document.body.appendChild(script);
    }
  }, []);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />;
};

export default BarChart;
