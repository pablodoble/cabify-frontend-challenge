import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductRow } from "./ProductRow";

describe("ProductRow", () => {
  const mockProps = {
    imageUrl: "some/url",
    name: "Foo",
    code: "bar",
    counter: 1,
    price: 10,
    total: 0,
    onCounterChange: jest.fn(),
    onImageClick: jest.fn(),
  };

  const setupComponent = (override) => {
    cleanup();
    render(<ProductRow {...mockProps} {...override} />);
  };

  beforeEach(() => {
    setupComponent();
  });

  it("renders a thumbnail, a product counter, and four labels (name, code, price and total)", () => {
    expect(screen.getByTestId("thumbnail")).toBeInTheDocument();
    expect(screen.getByTestId("product-counter")).toBeInTheDocument();
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(`Product code ${mockProps.code}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.price} €`)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.total} €`)).toBeInTheDocument();
  });

  it("calls onImageClick prop when thumbnail is clicked", () => {
    const imageElement = screen.getByTestId("thumbnail");
    userEvent.click(imageElement);

    expect(mockProps.onImageClick).toHaveBeenCalled();
  });

  it("calls onCounterChange prop when counter is changed", () => {
    const inputElement = screen.getByTestId("input");
    userEvent.type(inputElement, '5');

    expect(mockProps.onCounterChange).toHaveBeenCalledWith(5); 
  })
});
