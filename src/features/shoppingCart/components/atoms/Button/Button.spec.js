import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";

describe("Button", () => {
  beforeEach(() => {
    render(<Button />);
  });

  it("renders a div", () => {
    const inputElement = screen.getByTestId("button");
    expect(inputElement).toBeInTheDocument();
  });
});
