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
    <RadarChart
      outerRadius={90}
      width={730}
      height={250}
      data={data}
      style={{ marginTop: "4%", width: "50%", margin: "auto" }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 5]} />
      <Radar
        name="Desired State"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="You"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  );
};
