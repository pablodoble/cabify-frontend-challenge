import React from "react";
import userEvent from "@testing-library/user-event";
import { render, cleanup, screen } from "../../../test-utils/render";
import { useShoppingCart } from "./useShoppingCart";

const UseShoppingCartExample = () => {
  const {
    totalItems,
    totalCost,
    totalCostWithoutDiscount,
    discounts,
    products,
    onProductCounterChange,
    onProductImageClick,
  } = useShoppingCart();

  return (
    <div>
      <div>{`Total Items: ${totalItems}`}</div>
      <div>{`Total Cost: ${totalCost}`}</div>
      <div>{`Total Cost Without Discount: ${totalCostWithoutDiscount}`}</div>
      <div>
        <div>Discounts:</div>
        <div>
          {discounts.map((discount) => (
            <div key={discount.description}>
              {`Description: ${discount.description}, Value: ${discount.value}`}
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>Products:</div>
        <div>
          {products.map((product) => (
            <div key={product.code}>
              {`Code: ${product.code}, ImageUrl: ${product.imageUrl}, Counter: ${product.counter}, Price: ${product.price}`}
            </div>
          ))}
        </div>
      </div>
      <div onClick={() => onProductCounterChange("CAP", 1)}>
        onProductCounterChange
      </div>
      <div onClick={() => onProductImageClick()}>onProductImageClick</div>
    </div>
  );
};

describe("useShoppingCart", () => {
  beforeEach(() => {
    cleanup();
    render(<UseShoppingCartExample />, {
      initialState: { shoppingCart: { TSHIRT: 3, MUG: 4, CAP: 4 } },
    });
  });

  it("returns totalItems", () => {
    expect(screen.getByText("Total Items: 11")).toBeInTheDocument();
  });

  it("returns totalCost", () => {
    expect(screen.getByText("Total Cost: 107")).toBeInTheDocument();
  });

  it("returns totalCostWithoutDiscount", () => {
    expect(
      screen.getByText("Total Cost Without Discount: 120")
    ).toBeInTheDocument();
  });

  it("returns discounts", () => {
    expect(screen.getByText("Discounts:")).toBeInTheDocument();
    expect(
      screen.getByText("Description: x3 Cabify T-Shirt offer, Value: 3")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Description: 2x1 Cabify Coffee Mug offer, Value: 10")
    ).toBeInTheDocument();
  });

  it("returns products", () => {
    expect(screen.getByText("Products:")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Code: TSHIRT, ImageUrl: /assets/shirt.png, Counter: 3, Price: 20"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Code: MUG, ImageUrl: /assets/mug.png, Counter: 4, Price: 5"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Code: CAP, ImageUrl: /assets/cap.png, Counter: 4, Price: 10"
      )
    ).toBeInTheDocument();
  });

  it("returns updated products if onProductCounterChange is called", async () => {
    userEvent.click(screen.getByText("onProductCounterChange"));

    const capRow = await screen.getByText(
      "Code: CAP, ImageUrl: /assets/cap.png, Counter: 4, Price: 10"
    );

    expect(capRow).toBeInTheDocument();
  });

  it("calls onProductImageClick", () => {
    userEvent.click(screen.getByText("onProductImageClick"));
  });
});
