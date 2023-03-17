import { JSXElementConstructor, ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import { MainComponentBox } from "./components";
import { AssessmentPage, HomePage } from "./pages";

export const AppRoutes = (): ReactElement<
  any,
  string | JSXElementConstructor<any>
> | null =>
  useRoutes([
    {
      path: "/",
      element: <MainComponentBox />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/assessment",
          element: <AssessmentPage />,
        },
      ],
    },
  ]);
