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
      A: 5,
      fullMark: 5,
    },
    {
      subject: "Integration",
      A: 5,
      fullMark: 5,
    },
    {
      subject: "Security",
      A: 5,
      fullMark: 5,
    },
    {
      subject: "Usability",
      A: 5,
      fullMark: 5,
    },
    {
      subject: "Reliability",
      A: 5,
      fullMark: 5,
    },
    {
      subject: "Future",
      A: 5,
      fullMark: 5,
    },
  ];

  results.forEach((resultElement: IResult) => {
    const matchingData = data.find(
      (dataElement: any) => dataElement.subject === resultElement.key
    );

    const i = data.indexOf(matchingData);
    data[i].B = resultElement.value;
  });

  const possibleScore = () => {
    let totalPossibleScore = 0;
    data.forEach((item: any) => (totalPossibleScore += item.fullMark));

    console.log("totalPossibleScore: ", totalPossibleScore);
    return totalPossibleScore;
  };
  const actualScore = () => {
    let totalActualScore = 0;
    results.forEach((result: any) => (totalActualScore += result.value));
    return totalActualScore;
  };

  return (
    <div>
      <Typography variant="h3">Results</Typography>
      <div>
        <Typography variant="h5">
          Score: {actualScore()} / {possibleScore()}
        </Typography>
      </div>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
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
    </div>
  );
};
