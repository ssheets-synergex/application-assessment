import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

test("renders App component", () => {
  const { container } = render(<App />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const boxes = container.getElementsByClassName("App");
  expect(boxes).toHaveLength(1);
});
