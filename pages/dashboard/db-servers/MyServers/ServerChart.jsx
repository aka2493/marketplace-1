import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  import { faker } from "@faker-js/faker";
 import HoursSelect from "./HoursSelect";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  );
  
  export const options = {
    responsive: true,
    scales: {
        y: {
          ticks: {
            callback: function (value, index, values) {
              return `${value} kbps`;
            },
            beginAtZero: true,
          },
        },
        x: {
          ticks: {
            autoSkip: false,
            maxRotation: 0,
          },
        },
      },
  
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
  
      tooltips: {
        position: "nearest",
        mode: "index",
        intersect: false,
        yPadding: 10,
        xPadding: 10,
        caretSize: 4,
        backgroundColor: "rgba(72, 241, 12, 1)",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#1967d2",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 4,
      },
    },
  };
  
  const labels = Array.from({length: 24}, (_, i) => i + 1).map((day) => day.toString());
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: [0, 0.75, 1.5, 2.25, 3,1,0.9,1.4,0.2,0.7,1.8,1.9,2.0,3.0,1.6,0.6,2.7,2.6,2.2],
        borderColor: "#1967d2",
        backgroundColor: "#1967d2",
       
        fill: false,
      },
    ],
  };
  
  const ChartMain = () => {
    
    return (
        <div className="container mr-10 border  py-40 border-light-4">
        <div className="d-flex justify-between items-center">
   <span>
     <h5 className="text-16 fw-500  ml-20">Public Network</h5>
     <h5 className="text-14 fw-500 mt-10 mb-30 text-light-4 ml-20">Loreum Ipsum is a Dummy Text</h5>
     </span>
   <HoursSelect/>
   </div>
 
      <div className="widget-content ml-10">
        <Bar options={options} data={data} />
      </div>
      </div>
    );
  };
  
  export default ChartMain;