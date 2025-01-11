"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
}

const data = {
  labels: ["16 Dec", "17 Dec", "18 Dec", "19 Dec", "20 Dec", "21 Dec", "22 Dec"],
  datasets: [
    {
      data: [42000, 42500, 46000, 44000, 44500, 43000, 42000],
      borderColor: "rgb(37, 99, 235)",
      tension: 0.4,
    },
  ],
}

const timeFrames = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"]

export function PriceChart() {
  return (
    <div className="p-4 md:p-6 bg-white rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Bitcoin Price Chart (USD)</h2>
      <div className="flex gap-2 md:gap-4 overflow-x-auto pb-4 mb-4 scrollbar-hide">
        {timeFrames.map((period) => (
          <button
            key={period}
            className={`px-3 py-1 text-sm rounded whitespace-nowrap ${
              period === "7D" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {period}
          </button>
        ))}
      </div>
      <div className="h-[300px] md:h-[400px]">
        <Line options={options} data={data} />
      </div>
    </div>
  )
}

