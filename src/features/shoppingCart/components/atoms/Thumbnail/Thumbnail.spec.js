import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Thumbnail } from "./Thumbnail";

describe("Thumbnail", () => {
  beforeEach(() => {
    render(<Thumbnail src="some/url" alt="myImage" />);
  });

  it("renders an image with the given src and alt", () => {
    const imageElement = screen.getByTestId("thumbnail");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "some/url");
    expect(imageElement).toHaveAttribute("alt", "myImage");
  });
});
