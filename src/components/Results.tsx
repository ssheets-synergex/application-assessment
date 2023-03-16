import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
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
import { AssessmentCategoryCard, EmailPdfModal, RadarChart } from ".";
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
      icon: <BuildIcon />,
    },
    {
      subject: "Integration",
      A: 5,
      fullMark: 5,
      icon: <IntegrationInstructionsIcon />,
    },
    {
      subject: "Security",
      A: 5,
      fullMark: 5,
      icon: <HttpsIcon />,
    },
    {
      subject: "Usability",
      A: 5,
      fullMark: 5,
      icon: <ViewQuiltIcon />,
    },
    {
      subject: "Reliability",
      A: 5,
      fullMark: 5,
      icon: <HandshakeIcon />,
    },
    {
      subject: "Future",
      A: 5,
      fullMark: 5,
      icon: <RocketLaunchIcon />,
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
      icon: matchingData.icon,
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
    <Box component="main" px="41px" flexGrow={1}>
      <Typography variant="h1" marginBottom="6%" marginTop="5%">
        Results
      </Typography>
      <Box>
        <Typography variant="h2"> Your Answers</Typography>
        <Grid container marginBottom="6%">
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              marginTop="1%"
              marginBottom="3%"
              color="GrayText"
            >
              Total Score: {actualScore()} / {possibleScore()}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <List>
                {answers.map((answer) => (
                  <ListItem
                    key={answer.key}
                    style={{
                      textAlign: "left",
                    }}
                    disableGutters={true}
                  >
                    <ListItemIcon>{answer.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Tooltip
                          title={<Typography>{answer.question}</Typography>}
                          placement="top"
                        >
                          <Typography
                            color="primary"
                            variant="h5"
                          >{`${answer.key} (${answer.value}/5)`}</Typography>
                        </Tooltip>
                      }
                      secondary={
                        <Box>
                          <Typography>{` ${answer.userAnswer}`}</Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <RadarChart data={data} style={{ margin: 0 }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box marginBottom="6%">
        <Typography variant="h2">
          Optimize Your Application Investment
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
          Email Results
        </Button>
        <EmailPdfModal open={isModalOpen} handleClickClose={handleClickClose} />
      </Box>
      <Grid container marginBottom="6%" spacing={4}>
        <AssessmentCategoryCard
          icon={<BuildIcon fontSize="medium" />}
          category="Maintainability"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/edabc2e3-357b-499c-9a70-a1961fa58c9a"
          categoryDescription="Bring that 30-year-old code base into a more modern, useful, and
          appealing developer environment. All while protecting and evolving
          your code base."
        />
        <AssessmentCategoryCard
          icon={<IntegrationInstructionsIcon fontSize="medium" />}
          category="Integration"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/9b55b72c-0264-4f61-95f7-327571f49e2b"
          categoryDescription="Securely and fluidly integrate with your business—and others.
          Expedite the extension of applications by quickly and securely
          opening up your business logic and data."
        />
        <AssessmentCategoryCard
          icon={<HttpsIcon fontSize="medium" />}
          category="Security"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/2a620696-451e-4340-b475-ee7e95f1afcb"
          categoryDescription="Uncover potential vulnerabilities and/or create a disaster
          recovery plan so you can bounce back from successful attacks."
        />
        <AssessmentCategoryCard
          icon={<ViewQuiltIcon fontSize="medium" />}
          category="Usability"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/28390719-9cb7-4f76-901b-928ccad1e82c"
          categoryDescription="Our lives today take place via web, mobile or touch screens. Now
          you can add commensurate modern user interfaces and experiences
          (UI/UX) to your proven business systems."
        />
        <AssessmentCategoryCard
          icon={<HandshakeIcon fontSize="medium" />}
          category="Reliability"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/eae924b2-9fbb-4149-bfd6-41b30a08a198"
          categoryDescription="Choose a solution that enables you to minimize downtime for your
          applications and boost their resilience."
        />
        <AssessmentCategoryCard
          icon={<RocketLaunchIcon fontSize="medium" />}
          category="Future"
          categoryHref="https://xd.adobe.com/view/4a609834-c7b9-4d29-a070-f64651c659ea-1f33/screen/65f9e501-270c-40bd-ba70-0a69d1912719"
          categoryDescription="Legacy application modernization is a powerful and safe way to
          help ensure your company’s success, far into the future. Think
          evolution, not revolution."
        />
      </Grid>
    </Box>
  );
};
