import React from "react";
import styled from "styled-components";
import { Label } from "../../atoms/Label/Label";

const PriceRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;

export const PriceRow = ({
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
