import React from "react";
import { Label } from "../../atoms/Label/Label";
import { Divider } from "../../atoms/Divider/Divider";
import { Button } from "../../atoms/Button/Button";
import styled from "styled-components";

const PriceRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;

const OrderSummaryContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PriceRow = ({
  description,
  value,
  descriptionSize = "l",
  valueSize = "xl",
}) => (
  <PriceRowContainer data-testid={`row-${description}`}>
    <Label size={descriptionSize}>{description}</Label>
    <Label bold size={valueSize}>
      {value} €
    </Label>
  </PriceRowContainer>
);

export const OrderSummary = (props) => {
  const {
    totalCost,
    totalCostWithoutDiscount,
    totalItems,
    discounts = [],
  } = props;

  return (
    <OrderSummaryContainer data-testid="order-summary">
      <div>
        <div>
          <Label bold size="xxl">
            Order Summary
          </Label>
        </div>
        <Divider />
        <PriceRow
          description={`${totalItems} Items`}
          value={totalCostWithoutDiscount}
        />
        <Divider />
        <div>
          <Label color="lightNeutral">DISCOUNTS</Label>
        </div>
        {discounts.map((discount) => (
          <PriceRow
            key={discount.description}
            description={discount.description}
            value={`-${discount.value}`}
          />
        ))}
      </div>
      <div>
        <Divider />
        <PriceRow
          description="TOTAL COST"
          value={totalCost}
          descriptionSize="l"
          valueSize="xl"
        />
        <div>
          <Button fontSize="xl">Checkout</Button>
        </div>
      </div>
    </OrderSummaryContainer>
  );
};
