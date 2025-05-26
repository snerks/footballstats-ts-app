import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";
import type { PointsInfo } from "../types/models";

// import { PointsInfo } from ""

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

type Props = {
    pointsInfoItems: PointsInfo[];
};

export const Chart: React.FC<Props> = ({ pointsInfoItems }) => {
    const data = {
        // labels: pointsInfoItems.map((_, i) => `Game ${i}`),
        labels: pointsInfoItems.map((item) => `${item.message}`),
        datasets: [
            {
                label: "Running Points Total",
                data: pointsInfoItems.map((item) => item.points),
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.3
            }
        ],
        options: { responsive: true, maintainAspectRatio: true }
    };

    return (
        <div className="chart-container">
            <Line data={data} />
        </div>
    );
};
