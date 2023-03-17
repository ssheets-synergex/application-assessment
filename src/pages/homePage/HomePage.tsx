import { Box, Button, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ServerCluster } from "../../assets/serverCluster.svg";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    navigate("/assessment");
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={7}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h1" paddingBottom="5%">
            Does your IT roadmap have potholes?
          </Typography>
          <Typography variant="h2" align="left" paddingBottom="1%">
            Do you have doubts about your application’s future?
          </Typography>
          <Typography variant="h2" align="left" paddingBottom="1%">
            Are you losing sleep when thinking about your business?
          </Typography>
          <Typography variant="h2" align="left" paddingBottom="5%">
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
            width: 200,
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
  );
};
