import React from "react";
import { render, cleanup, screen } from "../../../../../test-utils/render";
import { ShoppingCartPage } from "./ShoppingCartPage";

describe("ShoppingCartPage", () => {
  beforeEach(() => {
    cleanup();
    render(<ShoppingCartPage />, {
      initialState: { shoppingCart: { TSHIRT: 0, MUG: 0, CAP: 0 } },
    });
  });

  it("Renders the connected ShoppingCartPage with initialState", () => {
    expect(screen.getByText("Shopping cart")).toBeInTheDocument();
    expect(screen.getByText("Order Summary")).toBeInTheDocument();
  });
});
