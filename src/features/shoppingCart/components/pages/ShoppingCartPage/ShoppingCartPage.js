import React from "react";
import styled from "styled-components";
import { ShoppingCart } from "../../templates/ShoppingCart/ShoppingCart";
import { useShoppingCart } from "../../../hooks/useShoppingCart";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/background.png");
  background-color: #212240;
  height: 100%;
`;

const ShoppingCartContainer = styled.div`
  height: 80%;
  width: 80%;
`;

/**
 * This component has been extracted just for testing purposes
 * since it's the recomended way in Storybook's docs
 */
export const ShoppingCartPagePure = (props) => (
  <Background>
    <ShoppingCartContainer>
      <ShoppingCart {...props} />
    </ShoppingCartContainer>
  </Background>
);

export const ShoppingCartPage = () => {
  const {
    totalItems,
    totalCost,
    totalCostWithoutDiscount,
    discounts,
    products,
    onProductCounterChange,
  } = useShoppingCart();

  const onProductImageClick = () => {};

  return (
    <ShoppingCartPagePure
      totalCost={totalCost}
      totalCostWithoutDiscount={totalCostWithoutDiscount}
      totalItems={totalItems}
      discounts={discounts}
      products={products}
      onProductCounterChange={onProductCounterChange}
      onProductImageClick={onProductImageClick}
    />
  );
};
