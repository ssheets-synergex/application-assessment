import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  LinearProgress,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { Results } from ".";
import { questions } from "../data/questions";

export interface IResult {
  key: string;
  value: number | null;
}

export const AssessmentPage = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [value, setValue] = useState<number | null>(null);
  const [results, setResults] = useState<IResult[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    //determine if end of quiz
    currentQuestion === 4
      ? setIsSubmitted(true)
      : setCurrentQuestion(currentQuestion + 1);

    //add new results to state
    const newResults = {
      key: questions[currentQuestion].key,
      value: value,
    };
    setResults([...results, newResults]);

    //set value for progress bar
    switch (currentQuestion + 1) {
      case 0:
        setProgress(0);
        break;
      case 1:
        setProgress(20);
        break;
      case 2:
        setProgress(40);
        break;
      case 3:
        setProgress(60);
        break;
      case 4:
        setProgress(80);
        break;
      case 5:
        setProgress(100);
        break;
      default:
        setProgress(0);
    }

    //TODO: reset option selected when user moves to next question
    setIsDisabled(true);
  };

  const handleOnChange = (
    _e: React.FormEvent<HTMLInputElement>,
    value: string
  ): void => {
    setValue(Number(value));
    setIsDisabled(false);
  };

  return (
    <>
      {!isSubmitted ? (
        <div>
          <div style={{ marginTop: "20px" }}>
            <LinearProgress variant="determinate" value={progress} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>{questions[currentQuestion].questionText}</FormLabel>
                <RadioGroup onChange={handleOnChange}>
                  {questions[currentQuestion].answerOptions.map((option) => (
                    <FormControlLabel
                      key={option.answerValue}
                      value={option.answerValue}
                      control={<Radio />}
                      label={option.answerText}
                    />
                  ))}
                </RadioGroup>
                <Button type="submit" variant="contained" disabled={isDisabled}>
                  {currentQuestion === 4 ? "Submit" : "Next"}
                </Button>
              </FormControl>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <Results results={results} />
        </div>
      )}
    </>
  );
};
