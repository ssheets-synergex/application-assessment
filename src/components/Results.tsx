import { Typography } from "@mui/material";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { IResult } from "./AssessmentPage";

interface IResultsProp {
  results: IResult[];
}

export const Results: React.FC<IResultsProp> = ({ results }) => {
  //A = desired state
  //B = user results
  const data: any = [
    {
      subject: "Maintainability",
      A: 4,
      fullMark: 4,
    },
    {
      subject: "Integration",
      A: 4,
      fullMark: 4,
    },
    {
      subject: "Security",
      A: 4,
      fullMark: 4,
    },
    {
      subject: "Usability",
      A: 4,
      fullMark: 4,
    },
    {
      subject: "Future",
      A: 4,
      fullMark: 4,
    },
  ];

  results.forEach((resultElement: IResult) => {
    const matchingData = data.find(
      (dataElement: any) => dataElement.subject === resultElement.key
    );

    const i = data.indexOf(matchingData);
    data[i].B = resultElement.value;
  });

  return (
    <div>
      <Typography variant="h3">Results</Typography>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 4]} />
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
    </div>
  );
};
