import React, { useEffect, useState } from "react";
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
import { Faker } from "@faker-js/faker";

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
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  animations: {
    y: {
      easing: "easeInOutElastic",
    },
    radius: {
      duration: 400,
      easing: "linear",
      // loop: (context) => context.active,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#fff",
      },
      display: true,
      grid: {
        display: false,
        color: "#ffffff",
        borderDash: [5, 5],
      },
    },
    y: {
      ticks: {
        color: "#fff",
      },
      border: { dash: [4, 4] },

      display: true,
      grid: {
        display: true,
        color: "#ecececaa",
        borderDash: [5, 5],
        tickBorderDash: [10],
        tickBorderDashOffset: 10,
        drawTicks: true,
        lineWidth: 1,
      },
    },
  },
};

interface PorpsData {
  labels: string[];
  datasets: {
    data: number[];
    label: string;
    fill: boolean;
    borderColor: string;
    borderWidth: number;
  }[];
}

export function LineChart() {
  const views = [
    // 100000, 110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000,
    // 190000, 200000, 210000, 220000, 240000, 260000, 280000, 300000, 320000,
    // 340000, 360000, 380000, 400000, 430000, 460000, 490000, 520000, 550000,
    // 580000, 610000, 640000, 670000, 700000, 740000, 780000, 820000, 860000,
    // 900000, 940000, 980000, 1020000, 1060000, 1100000, 1140000, 1180000,
    // 1220000, 1260000, 1300000, 1340000, 1380000, 1420000, 1460000, 1500000,
    1550000, 1600000, 1650000, 1700000, 1750000, 1800000, 1850000, 1900000,
    1950000, 2000000, 2050000, 2100000, 2150000, 2200000, 2250000, 2300000,
    2350000, 2400000, 2450000, 2500000, 2550000, 2600000, 2650000, 2700000,
    2750000, 2800000, 2850000, 2900000, 2950000, 3000000, 3100000, 3200000,
    3300000, 3400000, 3500000, 3600000, 3700000, 3800000, 3900000, 4000000,
    4200000, 4400000, 4600000, 4800000, 5000000, 5200000, 5400000, 5600000,
    5800000, 6000000, 6200000, 6400000, 6600000, 6800000, 7000000, 7200000,
    7400000, 7600000, 7800000, 8000000, 8200000, 8400000, 8600000, 8800000,
    9000000,
  ];

  const labels = [
    "dia 1",
    "dia 2",
    "dia 3",
    "dia 4",
    "dia 5",
    "dia 6",
    "dia 7",
    "dia 8",
    "dia 9",
    "dia 10",
    "dia 11",
    "dia 12",
    "dia 13",
    "dia 14",
    "dia 15",
    "dia 16",
    "dia 17",
    "dia 18",
    "dia 19",
    "dia 20",
    "dia 21",
    "dia 22",
    "dia 23",
    "dia 24",
    "dia 25",
    "dia 26",
    "dia 27",
    "dia 28",
    "dia 29",
    "dia 30",
    "dia 31",
    "dia 32",
    "dia 33",
    "dia 34",
    "dia 35",
    "dia 36",
    "dia 37",
    "dia 38",
    "dia 39",
    "dia 40",
    "dia 41",
    "dia 42",
    "dia 43",
    "dia 44",
    "dia 45",
    "dia 46",
    "dia 47",
    "dia 48",
    "dia 49",
    "dia 50",
    "dia 51",
    "dia 52",
    "dia 53",
    "dia 54",
    "dia 55",
    "dia 56",
    "dia 57",
    "dia 58",
    "dia 59",
    "dia 60",
  ];

  const initialData = {
    labels: labels,
    datasets: [
      {
        label: "My Data",
        data: views,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        pointRadius: 0,
        borderWidth: 3,
      },
    ],
  };

  // useEffect(() => {
  //   let contador = 1;
  // const interval = setInterval(() => {
  //   const newData = {
  //     ...data,
  //     labels: [...data.labels, `Dia ${data.labels.length + 1}`],
  //     datasets: [
  //       {
  //         ...data.datasets[0],
  //         data: [
  //           ...data.datasets[0].data,
  //           views[data.labels.length + 1], // adiciona um valor aleatório entre 1 e 100
  //         ],
  //       },
  //     ],
  //   };
  //   contador++;
  //   setData(newData);
  // }, 1500);

  //   return () => clearInterval(interval);
  // }, [data]);
  return <Line options={options} data={initialData} />;
}
