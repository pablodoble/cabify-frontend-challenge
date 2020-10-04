import React from "react";
import { render, screen, cleanup, within } from "@testing-library/react";
import { ShoppingCart } from "./ShoppingCart";

describe("ShoppingCart", () => {
  const mockProps = {
    thumbnailUrl: "some/url",
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
    render(<ShoppingCart {...mockProps} {...override} />);
  };

  beforeEach(() => {
    setupComponent();
  });

  it("renders a thumbnail, a product counter, and four labels (name, code, price and total)", () => {
    const column1 = screen.getByTestId("shopping-cart-col-1");
    const column2 = screen.getByTestId("shopping-cart-col-2");
    expect(column1).toBeInTheDocument();
    expect(column2).toBeInTheDocument();
    expect(
      within(column1).getByTestId("product-list")
    ).toBeInTheDocument();
    expect(
      within(column2).getByTestId("order-summary")
    ).toBeInTheDocument();
  });
});
