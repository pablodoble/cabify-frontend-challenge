import React from "react";
import styled from "styled-components";
import { PriceRow } from "../../molecules/PriceRow/PriceRow";
import { Divider } from "../../atoms/Divider/Divider";
import { Label } from "../../atoms/Label/Label";
import { Button } from "../../atoms/Button/Button";
import { theme } from "../../../../../styles/theme";

const ProductDescription = styled.div`
  text-align: left;
  padding: 10px 0;
  font-size: ${theme.fontSizes.m};
`;

const InvisibleSeparator = styled.div`
  padding-top: 30px;
`;

export const ProductData = (props) => {
  const { name, price, description, code, onAddToCart } = props;

  const onAddToCartClick = () => {
    onAddToCart();
  };

  return (
    <div>
      <PriceRow description={name} value={price} descriptionSize="xl" />
      <Divider />
      <ProductDescription>{description}</ProductDescription>
      <Divider />
      <Label size="m" color="lightNeutral">{`Product code ${code}`}</Label>
      <InvisibleSeparator />
      <Button onClick={onAddToCartClick}>Add to cart</Button>
    </div>
  );
};
