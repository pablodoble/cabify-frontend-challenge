import React from "react";
import { render, screen } from "@testing-library/react";
import { NumberInput } from "./NumberInput";

describe("NumberInput", () => {
  beforeEach(() => {
    render(<NumberInput />);
  });

  it("renders an input that accepts natural numbers", () => {
    const inputElement = screen.getByTestId("input");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "number");
    expect(inputElement).toHaveAttribute("min", "0");
  });
});
