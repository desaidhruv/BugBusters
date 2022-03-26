import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "Project 1",
  "Project 2",
  "Project 3",
  "Project 4",
  "Project 5",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [20, 40, 60, 30, 35, 80],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function chart() {
  return (
    <div>
      <Box width="600px" height="500px">
        <Line options={options} data={data} />
      </Box>
    </div>
  );
}

export default chart;
