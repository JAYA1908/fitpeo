import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
const opt = {
    options: {
        chart: {
            toolbar: {
              show: false
            }
          },
          tooltip: {
            style: {
              fontSize: "12px",
              fontFamily: undefined
            },
            onDatasetHover: {
              style: {
                fontSize: "12px",
                fontFamily: undefined
              }
            },
            theme: "dark"
          },
          xaxis: {
            categories: ["Jan", "Feb", "March", "April", "may", "jun"],
            show: false,
            labels: {
              show: true,
              style: {
                colors: "#A3AED0",
                fontSize: "14px",
                fontWeight: "500"
              }
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            show: false,
            color: "black",
            labels: {
              show: true,
              style: {
                colors: "#CBD5E0",
                fontSize: "14px"
              }
            }
          },
          grid: {
            show: false,
            strokeDashArray: 5,
            yaxis: {
              lines: {
                show: true
              }
            },
            xaxis: {
              lines: {
                show: false
              }
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              type: "vertical",
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              colorStops: [
                [
                  {
                    offset: 0,
                    color: "#4318FF",
                    opacity: 1
                  },
                  {
                    offset: 100,
                    color: "rgba(67, 24, 255, 1)",
                    opacity: 0.28
                  }
                ]
              ]
            }
          },
          dataLabels: {
            enabled: false
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: "40px"
            }
          }
    },
    series: [
        {
            name: "Hours Spent",
            data: [2.7, 2.3, 5, 6, 4, 3]
          }
    ]
  };


const BarChart = (props) => {
 

  return (
   <div className="chart">
    <div className="productchart">
    <div className="leftright">
        <div className="left">Overview</div>
        <div className="right">Monthly Earning</div>
    </div>
    <div>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Quality</option>
   
 
    </select>
    </div>
    </div>
    <Chart
              options={opt.options}
              series={opt.series}
              type="bar"
              width="500"
            />
     
   </div>
  );
};

export default BarChart;
