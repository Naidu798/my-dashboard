import React from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ChartBox = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-64">
      <h4 className="font-semibold text-lg mb-4">{title}</h4>
      {children}
    </div>
  );
};

const Charts = () => {
  // Data for the Bar Chart (Institution Inspection)
  const inspectionData = {
    labels: ["10", "11", "12", "13", "14"],
    datasets: [
      {
        label: "School",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "College",
        data: [2, 3, 20, 5, 1],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // Data for the Line Chart (Assessment and Examination)
  const assessmentData = {
    labels: ["Mon 10", "Tue 11", "Wed 12", "Thu 13", "Fri 14", "Sat 15"],
    datasets: [
      {
        label: "School",
        data: [1200, 1400, 1000, 1600, 1300, 1450],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
      {
        label: "College",
        data: [800, 950, 1200, 900, 1100, 1000],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  // Data for the Doughnut Chart (Academics Report)
  const academicsData = {
    labels: ["John", "Jeeva", "Ram"],
    datasets: [
      {
        label: "Students",
        data: [204, 175, 399],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  // Data for Institution Graph (Last 30 days)
  const institutionGraphData = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "School",
        data: [100, 75, 90, 60],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "College",
        data: [80, 55, 70, 50],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Schools Chart */}
      <ChartBox title="Schools">
        <Bar
          data={inspectionData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </ChartBox>

      {/* Institution Inspection */}
      <ChartBox title="Institution Inspection">
        <Bar
          data={inspectionData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </ChartBox>

      {/* Assessment and Examination */}
      <ChartBox title="Assessment and Examination">
        <Line
          data={assessmentData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </ChartBox>

      {/* Academics Report */}
      <ChartBox title="Academics Report">
        <Doughnut
          data={academicsData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </ChartBox>

      {/* Institution Graph */}
      <ChartBox title="Institution Graph">
        <Bar
          data={institutionGraphData}
          options={{ responsive: true, maintainAspectRatio: false }}
        />
      </ChartBox>

      {/* Institution List */}
      <ChartBox title="Institution List">
        {/* Placeholder for list */}
        <div className="h-full flex items-center justify-center">
          Institution List Placeholder
        </div>
      </ChartBox>
    </div>
  );
};

export default Charts;
