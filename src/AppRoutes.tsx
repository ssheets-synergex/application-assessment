import { JSXElementConstructor, ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import { AssessmentPage, HomePage } from "./pages";

export const AppRoutes = (): ReactElement<
  any,
  string | JSXElementConstructor<any>
> | null =>
  useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/assessment",
      element: <AssessmentPage />,
    },
  ]);
