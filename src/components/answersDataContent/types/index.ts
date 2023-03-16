import { IAnswer } from "../../../pages/resultsPage/types";

export interface IAnswersDataContentProps {
  answers: IAnswer[];
  actualScore: () => number;
  possibleScore: () => number;
}