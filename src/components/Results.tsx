import { Button, Card, CardContent, Typography } from "@mui/material";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { IResult } from "./AssessmentPage";
import BuildIcon from "@mui/icons-material/Build";
import HttpsIcon from "@mui/icons-material/Https";
import HandshakeIcon from "@mui/icons-material/Handshake";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import { Link } from "react-router-dom";

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
    <div style={{ marginTop: "2%" }}>
      <Typography variant="h3">Results</Typography>
      <div style={{ marginTop: "1%" }}>
        <Typography variant="h5">
          Score: {actualScore()} / {possibleScore()}
        </Typography>
      </div>
      <div style={{ marginTop: "1%" }}>
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
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "3%",
          width: "75%",
          margin: "auto",
        }}
      >
        <Card style={{ width: "30%", margin: "1%" }}>
          <CardContent>
            <BuildIcon />
            <Typography variant="h6">
              <a
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href={
                  "https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/edabc2e3-357b-499c-9a70-a1961fa58c9a"
                }
              >
                Maintainability
              </a>
            </Typography>
            <Typography variant="body1">
              Bring that 30-year-old code base into a more modern, useful, and
              appealing developer environment. All while protecting and evolving
              your code base.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: "30%", margin: "1%" }}>
          <CardContent>
            <IntegrationInstructionsIcon />
            <Typography variant="h6">
              <a
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href={
                  "https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/9b55b72c-0264-4f61-95f7-327571f49e2b"
                }
              >
                Integration
              </a>
            </Typography>
            <Typography variant="body1">
              Securely and fluidly integrate with your business—and others.
              Expedite the extension of applications by quickly and securely
              opening up your business logic and data.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: "30%", margin: "1%" }}>
          <CardContent>
            <HttpsIcon />
            <Typography variant="h6">
              <a
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href={
                  "https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/2a620696-451e-4340-b475-ee7e95f1afcb"
                }
              >
                Security
              </a>
            </Typography>
            <Typography variant="body1">
              Uncover potential vulnerabilities and/or create a disaster
              recovery plan so you can bounce back from successful attacks.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: "30%", margin: "1%" }}>
          <CardContent>
            <ViewQuiltIcon />
            <Typography variant="h6">
              <a
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href={
                  "https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/28390719-9cb7-4f76-901b-928ccad1e82c"
                }
              >
                Usability
              </a>
            </Typography>
            <Typography variant="body1">
              Our lives today take place via web, mobile or touch screens. Now
              you can add commensurate modern user interfaces and experiences
              (UI/UX) to your proven business systems.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: "30%", margin: "1%" }}>
          <CardContent>
            <HandshakeIcon />
            <Typography variant="h6">
              <a
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href={
                  "https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/eae924b2-9fbb-4149-bfd6-41b30a08a198"
                }
              >
                Reliability
              </a>
            </Typography>
            <Typography variant="body1">
              Choose a solution that enables you to minimize downtime for your
              applications and boost their resilience.
            </Typography>
          </CardContent>
        </Card>
        <Card style={{ width: "30%", margin: "1%" }}>
          <CardContent>
            <RocketLaunchIcon />
            <Typography variant="h6">
              <a
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                href={
                  "https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/65f9e501-270c-40bd-ba70-0a69d1912719"
                }
              >
                Future
              </a>
            </Typography>
            <Typography variant="body1">
              Legacy application modernization is a powerful and safe way to
              help ensure your company’s success, far into the future. Think
              evolution, not revolution.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div
        style={{
          marginTop: "5%",
          width: "50%",
          margin: "auto",
          marginBottom: "5%",
        }}
      >
        <Typography variant="h6">
          Optimize your application investment.{" "}
        </Typography>
        <Typography variant="body1" style={{ marginTop: "1%" }}>
          With the Synergex Application Assessment, you can own your
          application’s future instead of the future owning you.
        </Typography>
        <Typography variant="body1" style={{ marginTop: "1%" }}>
          Synergex’s Professional Services Group delivers a thorough, informed
          and immediately actionable roadmap in the shortest amount of time
          possible, the Application Assessment can put your business on the fast
          track to a brighter, more-sustainable future.
        </Typography>
        <Typography variant="body1" style={{ marginTop: "1%" }}>
          <Link
            to="#"
            onClick={(e) => {
              window.location.href = "mailto:synergy@synergex.com";
              e.preventDefault();
            }}
          >
            Contact Us
          </Link>{" "}
          to get started!
        </Typography>
        <Button variant="contained" style={{ marginTop: "2%" }}>
          Email PDF Results
        </Button>
      </div>
    </div>
  );
};
