import React from "react";
import { ProductList } from "../organisms/ProductList/ProductList";
import { OrderSummary } from "../organisms/OrderSummary/OrderSummary";
import styled from "styled-components";
import { theme } from "../../../../styles/theme";

const { backgroundColors } = theme;

const ShoppingCartGrid = styled.div`
  display: grid;
  grid-template-columns: 66% 34%;
  height: 100%;
`;

const ShoppingCartColumn = styled.div`
  grid-column-start: ${({ colNumber }) => colNumber};
  padding: 40px;
  background-color: ${({ backgroundColor = "neutral" }) =>
    backgroundColors[backgroundColor]};
`;

export const ShoppingCart = (props) => {
  const {
    totalCost,
    totalCostWithoutDiscount,
    totalItems,
    discounts = [],
    products = [],
    onProductCounterChange,
    onProductImageClick,
  } = props;
  return (
    <ShoppingCartGrid>
      <ShoppingCartColumn colNumber={1} data-testid="shopping-cart-col-1">
        <ProductList
          products={products}
          onProductCounterChange={onProductCounterChange}
          onProductImageClick={onProductImageClick}
        />
      </ShoppingCartColumn>
      <ShoppingCartColumn
        colNumber={2}
        backgroundColor="lightNeutral"
        data-testid="shopping-cart-col-2"
      >
        <OrderSummary
          totalCost={totalCost}
          totalCostWithoutDiscount={totalCostWithoutDiscount}
          totalItems={totalItems}
          discounts={discounts}
        />
      </ShoppingCartColumn>
    </ShoppingCartGrid>
  );
};
