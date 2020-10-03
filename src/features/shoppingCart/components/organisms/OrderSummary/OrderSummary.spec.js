import React from "react";
import { render, screen, cleanup, within } from "@testing-library/react";
import { OrderSummary } from "./OrderSummary";

describe("OrderSummary", () => {
  const mockProps = {
    totalCost: 107,
    totalCostWithoutDiscount: 120,
    totalItems: 11,
    discounts: [
      {
        description: "2x1 Foo offer",
        value: -10,
      },
      {
        description: "x3 Bar offer",
        value: -3,
      },
    ],
  };

  const setupComponent = (override) => {
    cleanup();
    render(<OrderSummary {...mockProps} {...override} />);
  };

  beforeEach(() => {
    setupComponent();
  });

  it("renders a header which says Order Summary", () => {
    expect(screen.getByText("Order Summary")).toBeInTheDocument();
  });

  it("renders a row containing the total items and the total cost with no discounts", () => {
    expect(screen.getByText("11 Items")).toBeInTheDocument();
    expect(screen.getByText("120 €")).toBeInTheDocument();
  });

  it("renders a header which says DISCOUNTS", () => {
    expect(screen.getByText("DISCOUNTS")).toBeInTheDocument();
  });

  it("renders a row for each discount, containing a description and the discounted value", () => {
    const fooRow = screen.getByTestId("row-2x1 Foo offer");
    const barRow = screen.getByTestId("row-x3 Bar offer");

    expect(fooRow).toBeInTheDocument();
    expect(within(fooRow).getByText("2x1 Foo offer")).toBeInTheDocument();
    expect(within(fooRow).getByText("-10 €")).toBeInTheDocument();

    expect(barRow).toBeInTheDocument();
    expect(within(barRow).getByText("x3 Bar offer")).toBeInTheDocument();
    expect(within(barRow).getByText("-3 €")).toBeInTheDocument();
  });

  it("renders the total price and its value", () => {
    expect(screen.getByText("TOTAL COST")).toBeInTheDocument();
    expect(screen.getByText("107 €"));
  });

  it("renders a Checkout button", () => {
    const checkoutButton = screen.getByTestId("button");
    expect(checkoutButton).toBeInTheDocument();
    expect(within(checkoutButton).getByText("Checkout")).toBeInTheDocument();
  });
});
