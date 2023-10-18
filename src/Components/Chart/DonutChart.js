import React from 'react'
import ReactApexChart from "react-apexcharts";
export const DonutChart = () => {
 const donutChartDataCharts1 = [50, 15, 10, 20, 5];
   const op =  {    
   labels: ["Dev.to", "Creative Tim", "Github", "Bootsnipp", "Codeinwp"],
   colors: ["#5A32EA", "#FFC0CB", "808080", "#5A32EA", "#5A32EA", "808080"],
   chart: {
     width: "100%"
   },
   states: {
     hover: {
       filter: {
         type: "none"
       }
     }
   },
   legend: {
     show: false
   },
   dataLabels: {
     enabled: false
   },
   hover: { mode: null },
   plotOptions: {
     donut: {
       expandOnClick: false,
       donut: {
         labels: {
           show: false
         }
       }
     }
   },
 
   fill: {
     colors: ["#FF0000", "#4299E1", "#3182CE", "#2B6CB0", "#2C5282", "#2A4365"]
   },
   tooltip: {
     enabled: true,
     theme: "dark"
   }
}
  return (
    <div className='chart'>
     <div>
        <div className='leftright'>
            <div className='left'>CUSTOMER</div>
            <div className='right'>Customer that buy product</div>
        </div>
     <ReactApexChart
    options={op}
    series={donutChartDataCharts1}
    type="donut"
    width="100%"
    height="100%"
  />
    </div>    
     
    </div>
  )
}
