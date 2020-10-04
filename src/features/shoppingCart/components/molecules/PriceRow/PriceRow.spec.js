import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { PriceRow } from "./PriceRow";

describe("PriceRow", () => {
  const mockProps = {
    value: 10,
    description: "Some description",
  };

  const setupComponent = (override) => {
    cleanup();
    render(<PriceRow {...mockProps} {...override} />);
  };

  beforeEach(() => {
    setupComponent();
  });

  it("renders two labels containing the description and the value", () => {
    expect(screen.getByText("Some description")).toBeInTheDocument();
    expect(screen.getByText("10 €")).toBeInTheDocument();
  });
});
