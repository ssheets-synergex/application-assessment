import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BoxedLayout, Results } from ".";
import { questions } from "../data/questions";

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
    <BoxedLayout>
      {!isSubmitted ? (
        <Box width={"75%"}>
          <div>
            <div style={{ marginTop: "20px" }}>
              <LinearProgress variant="determinate" value={progress} />
            </div>
            <div style={{ marginTop: "20px" }}>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel color="primary">
                    <Typography
                      variant="h3"
                      color="primary"
                      style={{ marginBottom: "2%" }}
                    >
                      {questions[currentQuestion].key}
                    </Typography>
                    <Typography color="primary" align="left">
                      {questions[currentQuestion].questionText}
                    </Typography>
                  </FormLabel>
                  <RadioGroup onChange={handleOnChange} value={value}>
                    {questions[currentQuestion].answerOptions.map((option) => (
                      <FormControlLabel
                        key={option.answerValue}
                        value={option.answerValue}
                        control={<Radio />}
                        label={option.answerText}
                        style={{ textAlign: "left" }}
                      />
                    ))}
                  </RadioGroup>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
                  </div>
                </FormControl>
              </form>
            </div>
          </div>
        </Box>
      ) : (
        <div>
          <Results results={results} />
        </div>
      )}
    </BoxedLayout>
  );
};
