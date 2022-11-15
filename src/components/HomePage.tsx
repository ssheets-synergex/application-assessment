import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BoxedLayout } from "./BoxedLayout";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/assessment");
  };

  return (
    <BoxedLayout>
      <Typography variant="h1" align="center">
        Does your IT roadmap have potholes?
      </Typography>
      <div style={{ margin: "5%" }}>
        <Typography variant="h4" align="center">
          Do you have doubts about your application’s future?
        </Typography>
        <Typography variant="h4" align="center">
          Are you losing sleep when thinking about your business?
        </Typography>
        <Typography variant="h4" align="center">
          Are you working harder, not smarter?
        </Typography>
      </div>
      <div>
        <Typography variant="h3" align="center">
          Take this short quiz to see how your application stacks up.
        </Typography>
        <Button
          variant="contained"
          onClick={handleOnClick}
          style={{ marginTop: "3%" }}
        >
          Start Assessment
        </Button>
      </div>
    </BoxedLayout>
  );
};
