import React from "react";
import { render, screen, cleanup, within } from "@testing-library/react";
import { ProductData } from "./ProductData";

describe("ProductData", () => {
  const mockProps = {
    name: "Foo",
    price: 20,
    description: "some description",
    code: "ASDF123",
    onAddToCart: () => {},
  };

  const setupComponent = (override) => {
    cleanup();
    render(<ProductData {...mockProps} {...override} />);
  };

  beforeEach(() => {
    setupComponent();
  });

  it("renders two labels containing the description and the value", () => {
    expect(screen.getByText("Foo")).toBeInTheDocument();
    expect(screen.getByText("20 €")).toBeInTheDocument();
  });

  it("renders a product description", () => {
    expect(screen.getByText("some description")).toBeInTheDocument();
  });

  it("renders a product code", () => {
    expect(screen.getByText("Product code ASDF123")).toBeInTheDocument();
  });

  it("renders an Add to cart button", () => {
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
    expect(within(buttonElement).getByText("Add to cart")).toBeInTheDocument();
  });
});
