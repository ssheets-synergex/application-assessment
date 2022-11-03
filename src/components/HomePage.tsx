import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/assessment");
  };

  return (
    <Box style={{ marginTop: "5%" }}>
      <Typography variant="h3" align="center">
        Does your IT roadmap have potholes?
      </Typography>
      <div style={{ margin: "5%" }}>
        <Typography variant="h5" align="center">
          Do you have doubts about your application’s future?
        </Typography>
        <Typography variant="h5" align="center">
          Are you losing sleep when thinking about your business?
        </Typography>
        <Typography variant="h5" align="center">
          Are you working harder, not smarter?
        </Typography>
      </div>
      <div>
        <Typography variant="h5" align="center">
          Take this short quiz to see how your application stacks up.
        </Typography>
        <Button
          variant="contained"
          onClick={handleOnClick}
          style={{ marginTop: "2%" }}
        >
          Start Assessment
        </Button>
      </div>
    </Box>
  );
};
