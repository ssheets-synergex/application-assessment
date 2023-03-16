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
    <RadarChart outerRadius={120} width={400} height={400} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" tickSize={20} />
      <PolarRadiusAxis angle={30} domain={[0, 5]} />
      <Radar
        name="Desired State"
        dataKey="A"
        stroke="#3F3D56"
        fill="#3F3D56"
        fillOpacity={0.6}
      />
      <Radar
        name="You"
        dataKey="B"
        stroke="#CC9966"
        fill="#CC9966"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};
