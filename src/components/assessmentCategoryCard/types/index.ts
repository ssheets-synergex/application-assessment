import { ReactElement } from "react";

export interface IAssessmentCategoryCardProps {
  icon: ReactElement<any, any>;
  category: string;
  categoryHref: string;
  categoryDescription: string;
}