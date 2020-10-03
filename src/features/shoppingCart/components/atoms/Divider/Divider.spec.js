import React from "react";
import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";

describe("Divider", () => {
  beforeEach(() => {
    render(<Divider></Divider>);
  });

  it("renders a container and a content", () => {
    const dividerContainer = screen.getByTestId("divider-container");
    const dividerContent = screen.getByTestId("divider-content");
    expect(dividerContainer).toBeInTheDocument();
    expect(dividerContent).toBeInTheDocument();
  });
});
