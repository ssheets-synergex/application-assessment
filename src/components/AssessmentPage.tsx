import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Results } from ".";
import { questions } from "../data/questions";
import { useTheme } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";

export interface IResult {
  key: string;
  value: number | null;
  userAnswer: string | undefined;
  question: string | undefined;
}

export const AssessmentPage = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [value, setValue] = useState<number | null>(null);
  const [results, setResults] = useState<IResult[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const theme = useTheme();

  const numOfQuestions = questions.length;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    //determine if end of quiz
    currentQuestion === numOfQuestions - 1
      ? setIsSubmitted(true)
      : setCurrentQuestion(currentQuestion + 1);

    //add new results to state
    const newResults = {
      key: questions[currentQuestion].key,
      question: questions[currentQuestion].questionText,
      userAnswer: questions[currentQuestion].answerOptions.find(
        (item) => item.answerValue === value
      )?.answerText,
      value: value,
    };
    setResults([...results, newResults]);

    //set value for progress bar
    switch (currentQuestion + 1) {
      case 0:
        setProgress(0);
        break;
      case 1:
        setProgress(17);
        break;
      case 2:
        setProgress(35);
        break;
      case 3:
        setProgress(51);
        break;
      case 4:
        setProgress(68);
        break;
      case 5:
        setProgress(85);
        break;
      case 6:
        setProgress(100);
        break;
      default:
        setProgress(0);
    }

    setIsDisabled(true);
    setValue(null);
  };

  const handleOnChange = (
    _e: React.FormEvent<HTMLInputElement>,
    value: string
  ): void => {
    setValue(Number(value));
    setIsDisabled(false);
  };

  return (
    <Box component="main" px="41px" flexGrow={1}>
      {!isSubmitted ? (
        <>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              mt: "5%",
            }}
          >
            <Box style={{ width: 480 }}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Typography variant="body1" pl="1%">
              {progress}%
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Card
              style={{
                width: 500,
                backgroundColor: theme.palette.background.default,
                padding: "2%",
                marginTop: "3%",
                marginBottom: "5%",
              }}
              raised
            >
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <FormControl style={{ width: "100%" }}>
                    <Typography
                      variant="h2"
                      style={{ marginBottom: "2%" }}
                      color={theme.palette.info.main}
                    >
                      {questions[currentQuestion].key}
                    </Typography>
                    <Typography variant="h4" align="left">
                      {questions[currentQuestion].questionText}
                    </Typography>
                    <RadioGroup
                      onChange={handleOnChange}
                      value={value}
                      sx={{ marginTop: "2%" }}
                    >
                      {questions[currentQuestion].answerOptions.map(
                        (option) => (
                          <FormControlLabel
                            key={option.answerValue}
                            value={option.answerValue}
                            control={<Radio />}
                            label={option.answerText}
                            style={{ textAlign: "left" }}
                          />
                        )
                      )}
                    </RadioGroup>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={isDisabled}
                        style={{
                          marginTop: "3%",
                          width: "30%",
                        }}
                        size="medium"
                      >
                        {currentQuestion === numOfQuestions - 1
                          ? "Submit"
                          : "Next"}
                      </Button>
                    </Box>
                  </FormControl>
                </form>
              </CardContent>
            </Card>
          </Box>
        </>
      ) : (
        <div>
          <Results results={results} />
        </div>
      )}
    </Box>
  );
};
