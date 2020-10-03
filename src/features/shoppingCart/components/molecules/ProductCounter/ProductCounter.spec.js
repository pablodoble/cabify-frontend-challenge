import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductCounter } from "./ProductCounter";

describe("ProductCounter", () => {
  const mockProps = {
    value: 1,
    onChange: jest.fn(),
  };

  const setupComponent = (override) => {
    cleanup();
    render(<ProductCounter {...mockProps} {...override} />);
  };

  beforeEach(() => {
    setupComponent();
  });

  it("renders two labels and an input", () => {
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("should call onChange with an incremented value if + is clicked", () => {
    const plusButton = screen.getByText("+");
    userEvent.click(plusButton);

    expect(mockProps.onChange).toHaveBeenCalledWith(2);
  });

  it("should call onChange with an decremented value if - is clicked", () => {
    const minusButton = screen.getByText("-");
    userEvent.click(minusButton);

    expect(mockProps.onChange).toHaveBeenCalledWith(0);
  });

  it("should call onChange with 0 if value is already 0 and - is clicked", () => {
    setupComponent({ value: 0 });
    const minusButton = screen.getByText("-");
    userEvent.click(minusButton);

    expect(mockProps.onChange).toHaveBeenCalledWith(0);
  });

  it("should call onChange with the typed value when something is typed in the input", () => {
    const inputElement = screen.getByTestId("input");
    userEvent.type(inputElement, '5');

    expect(mockProps.onChange).toHaveBeenCalledWith(5);
  });
});
