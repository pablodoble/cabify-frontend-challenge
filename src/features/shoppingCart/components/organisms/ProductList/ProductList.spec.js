import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { ProductList } from "./ProductList";

describe("ProductList", () => {
  const mockProps = {
    products: [
      {
        code: "FOO",
        price: 10,
        discounts: ["50PERCENT"],
        name: "Foo",
        counter: 0,
        imageUrl: "/assets/cap.png",
      },
      {
        code: "BAR",
        price: 5,
        discounts: ["50PERCENT", "30PERCENT"],
        name: "Bar",
        counter: 0,
        imageUrl: "/assets/cap.png",
      },
      {
        code: "BIZ",
        price: 1,
        name: "Biz",
        counter: 0,
        imageUrl: "/assets/cap.png",
      },
    ],
    onProductCounterChange: jest.fn(),
    onProductImageClick: jest.fn(),
  };

  const setupComponent = (override) => {
    cleanup();
    render(<ProductList {...mockProps} {...override} />);
  };

  beforeEach(() => {
    setupComponent();
  });

  it("renders a header containing PRODUCT DETAILS, QUANTITY, PRICE and TOTAL columns", () => {
    expect(screen.getByText("PRODUCT DETAILS")).toBeInTheDocument();
    expect(screen.getByText("QUANTITY")).toBeInTheDocument();
    expect(screen.getByText("PRICE")).toBeInTheDocument();
    expect(screen.getByText("TOTAL")).toBeInTheDocument();
  })

  it("renders a ProductRow for each product on the list", () => {
    expect(screen.getByTestId("FOO-row")).toBeInTheDocument();
    expect(screen.getByTestId("BAR-row")).toBeInTheDocument();
    expect(screen.getByTestId("BIZ-row")).toBeInTheDocument();
  });

  it("calls onProductImageClick prop when thumbnail is clicked", () => {
    const imageElements = screen.getAllByTestId("thumbnail");
    userEvent.click(imageElements[0]);

    expect(mockProps.onProductImageClick).toHaveBeenCalledWith("FOO");
  });

  it("calls onProductCounterChange prop when counter is changed", () => {
    const inputElements = screen.getAllByTestId("input");
    userEvent.type(inputElements[0], "5");

    expect(mockProps.onProductCounterChange).toHaveBeenCalledWith("FOO", 5);
  });
});
