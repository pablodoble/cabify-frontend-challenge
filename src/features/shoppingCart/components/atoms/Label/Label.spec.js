import React from "react";
import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  beforeEach(() => render(<Label>foo</Label>));

  it("renders a span containing its children", () => {
    expect(screen.getByText("foo")).toBeInTheDocument();
  });
});
