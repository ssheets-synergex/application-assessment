import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { IResult } from "./AssessmentPage";
import BuildIcon from "@mui/icons-material/Build";
import HttpsIcon from "@mui/icons-material/Https";
import HandshakeIcon from "@mui/icons-material/Handshake";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import { Link } from "react-router-dom";
import {
  AssessmentCategoryCard,
  BoxedLayout,
  EmailPdfModal,
  RadarChart,
} from ".";
import { useState } from "react";

interface IResultsProp {
  results: IResult[];
}

export const Results: React.FC<IResultsProp> = ({ results }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  let answers: any[] = [];

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
    answers.push({
      key: resultElement.key,
      value: resultElement.value,
      userAnswer: resultElement.userAnswer,
      question: resultElement.question,
    });
  });

  const possibleScore = () => {
    let totalPossibleScore = 0;
    data.forEach((item: any) => (totalPossibleScore += item.fullMark));
    return totalPossibleScore;
  };
  const actualScore = () => {
    let totalActualScore = 0;
    results.forEach((result: any) => (totalActualScore += result.value));
    return totalActualScore;
  };

  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClickClose = () => {
    setIsModalOpen(false);
  };

  return (
    <BoxedLayout>
      <Typography variant="h1" color="primary">
        Results
      </Typography>
      <Typography variant="h5" marginTop={"2%"} marginBottom={"4%"}>
        Score: {actualScore()} / {possibleScore()}
      </Typography>
      <Grid container marginBottom={"4%"}>
        <Grid item xs={12} sm={12} md={6}>
          <List sx={{ listStyleType: "disc" }}>
            <ListSubheader style={{ textAlign: "left" }}>
              Your Answers:
            </ListSubheader>
            {answers.map((answer) => (
              <ListItemText
                key={answer.key}
                style={{
                  display: "list-item",
                  textAlign: "left",
                  margin: "2%",
                  marginLeft: 50,
                }}
              >
                {`${answer.key} (${answer.value}/5): ${answer.question}`}
                <span
                  style={{ fontWeight: "bold" }}
                >{` ${answer.userAnswer}`}</span>
              </ListItemText>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            margin="auto"
            alignItems="center"
            width="100%"
            height="100%"
          >
            <RadarChart data={data} style={{ margin: 0 }} />
          </Box>
        </Grid>
      </Grid>
      <Grid container marginBottom={"4%"}>
        <AssessmentCategoryCard
          icon={<BuildIcon fontSize="large" />}
          category="Maintainability"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/edabc2e3-357b-499c-9a70-a1961fa58c9a"
          categoryDescription="Bring that 30-year-old code base into a more modern, useful, and
          appealing developer environment. All while protecting and evolving
          your code base."
        />
        <AssessmentCategoryCard
          icon={<IntegrationInstructionsIcon fontSize="large" />}
          category="Integration"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/9b55b72c-0264-4f61-95f7-327571f49e2b"
          categoryDescription="Securely and fluidly integrate with your business—and others.
          Expedite the extension of applications by quickly and securely
          opening up your business logic and data."
        />
        <AssessmentCategoryCard
          icon={<HttpsIcon fontSize="large" />}
          category="Security"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/2a620696-451e-4340-b475-ee7e95f1afcb"
          categoryDescription="Uncover potential vulnerabilities and/or create a disaster
          recovery plan so you can bounce back from successful attacks."
        />
        <AssessmentCategoryCard
          icon={<ViewQuiltIcon fontSize="large" />}
          category="Usability"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/28390719-9cb7-4f76-901b-928ccad1e82c"
          categoryDescription="Our lives today take place via web, mobile or touch screens. Now
          you can add commensurate modern user interfaces and experiences
          (UI/UX) to your proven business systems."
        />
        <AssessmentCategoryCard
          icon={<HandshakeIcon fontSize="large" />}
          category="Reliability"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/eae924b2-9fbb-4149-bfd6-41b30a08a198"
          categoryDescription="Choose a solution that enables you to minimize downtime for your
          applications and boost their resilience."
        />
        <AssessmentCategoryCard
          icon={<RocketLaunchIcon fontSize="large" />}
          category="Future"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/65f9e501-270c-40bd-ba70-0a69d1912719"
          categoryDescription="Legacy application modernization is a powerful and safe way to
          help ensure your company’s success, far into the future. Think
          evolution, not revolution."
        />
      </Grid>
      <Box width={"75%"} marginBottom={"4%"}>
        <Typography variant="h2">
          Optimize your application investment.{" "}
        </Typography>
        <Typography variant="body1" style={{ marginTop: "2%" }}>
          With the Synergex Application Assessment, you can own your
          application’s future instead of the future owning you.
        </Typography>
        <Typography variant="body1" style={{ marginTop: "2%" }}>
          Synergex’s Professional Services Group delivers a thorough, informed
          and immediately actionable roadmap in the shortest amount of time
          possible, the Application Assessment can put your business on the fast
          track to a brighter, more-sustainable future.
        </Typography>

        <Typography variant="body1" style={{ marginTop: "2%" }}>
          <Link
            to="#"
            style={{ color: "#007f96", textDecoration: "none" }}
            onClick={(e) => {
              window.location.href = "mailto:synergy@synergex.com";
              e.preventDefault();
            }}
          >
            Contact Us
          </Link>{" "}
          to get started!
        </Typography>
        <Button
          variant="contained"
          style={{ marginTop: "2%" }}
          size="large"
          onClick={handleClickOpen}
        >
          Email PDF Results
        </Button>
        <EmailPdfModal open={isModalOpen} handleClickClose={handleClickClose} />
      </Box>
    </BoxedLayout>
  );
};
