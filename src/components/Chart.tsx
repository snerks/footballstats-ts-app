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

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

type Props = {
    points: number[];
};

export const Chart: React.FC<Props> = ({ points }) => {
    const data = {
        labels: points.map((_, i) => `Game ${i + 1}`),
        datasets: [
            {
                label: "Points Scored",
                data: points,
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.3
            }
        ]
    };

    return <Line data={data} />;
};
