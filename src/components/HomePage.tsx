import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/assessment");
  };

  return (
    <>
      <Typography variant="h1" align="center">
        Application Assessment
      </Typography>
      <Typography variant="h3" align="center">
        A block of intro text...........
      </Typography>
      <Button variant="contained" onClick={handleOnClick}>
        Start Assessment
      </Button>
    </>
  );
};
