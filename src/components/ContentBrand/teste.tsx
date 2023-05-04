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
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

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
    legend: {
      display: false,
      position: "bottom" as const,
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
  interaction: {
    intersect: true,
  },
};

const labels = [
  "day1",
  "day2",
  "day3",
  "day4",
  "day5",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      // data: [1, 1.3, 1.2, 1.5, 2.3, 1.9, 2.3, 2.1, 3, 2.6, 3, 2.9],
            data: [1, 1.3, 1.2, 2, 1.9,],

      borderColor: "#04CE00",
      backgroundColor: "#04CE00)",
      pointRadius: 0,
    },
  ],
};

export function LineChart() {
  return <Line className="" options={options} data={data} />;
}
