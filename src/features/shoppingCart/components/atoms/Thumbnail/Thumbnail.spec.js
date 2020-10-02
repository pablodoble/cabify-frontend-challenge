import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Thumbnail } from "./Thumbnail";

describe("Thumbnail", () => {
  const mockProps = {
    src: "some/url",
    alt: "myImage",
    onClick: jest.fn(),
  };
  beforeEach(() => {
    render(<Thumbnail {...mockProps} />);
  });

  it("renders an image with the given src and alt", () => {
    const imageElement = screen.getByTestId("thumbnail");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "some/url");
    expect(imageElement).toHaveAttribute("alt", "myImage");
  });

  it("calls onClick prop when its clicked", () => {
    const imageElement = screen.getByTestId("thumbnail");
    userEvent.click(imageElement);

    expect(mockProps.onClick).toHaveBeenCalled();
  });
});
