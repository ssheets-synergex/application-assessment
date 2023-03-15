import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ServerCluster } from "../assets/serverCluster.svg";
import { AssessmentCategoryCard } from "./AssessmentCategoryCard";
import BuildIcon from "@mui/icons-material/Build";
import HttpsIcon from "@mui/icons-material/Https";
import HandshakeIcon from "@mui/icons-material/Handshake";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/assessment");
  };

  return (
    <Box px="41px">
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box marginTop="25%">
            <Typography variant="h1" paddingBottom="5%">
              Does your IT roadmap have potholes?
            </Typography>
            <Typography variant="h3" align="left" paddingBottom="1%">
              Do you have doubts about your application’s future?
            </Typography>
            <Typography variant="h3" align="left" paddingBottom="1%">
              Are you losing sleep when thinking about your business?
            </Typography>
            <Typography variant="h3" align="left" paddingBottom="5%">
              Are you working harder, not smarter?
            </Typography>
            <Typography variant="h3" align="left">
              Take this short quiz to see how your application stacks up.
            </Typography>
          </Box>
          <Button
            variant="contained"
            onClick={handleOnClick}
            style={{
              marginTop: "3%",
              boxShadow: "3px 3px 8px 1px rgba(0,0,0,.8)",
            }}
            size="large"
          >
            Start Assessment
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <ServerCluster width="100%" />
        </Grid>
      </Grid>
      <Grid container pb="138px">
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
