import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

export const RadarChartComponent = ({ data }: any) => {
  return (
    <RadarChart outerRadius={90} width={500} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 5]} />
      <Radar
        name="Desired State"
        dataKey="A"
        stroke="#007f96"
        fill="#007f96"
        fillOpacity={0.6}
      />
      <Radar
        name="You"
        dataKey="B"
        stroke="#F1584D"
        fill="#F1584D"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};
