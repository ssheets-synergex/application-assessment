import { ReactElement } from "react";
import { IResult } from "../../assessmentPage/types";

export interface IResultsProp {
  results: IResult[];
}

export interface IData {
  subject: string;
  A: number;
  B?: number | null;
  fullMark: number;
  icon: ReactElement<any, any>;
}

export interface IAnswer {
  key: string;
  value: number | null;
  userAnswer: string | undefined;
  question: string | undefined;
  icon: ReactElement<any, any>;
}