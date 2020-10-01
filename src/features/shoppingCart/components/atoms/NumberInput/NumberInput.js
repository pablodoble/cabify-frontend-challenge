import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

const { fontSizes, colors } = theme;

const Input = styled.input`
  padding: 13px;
  width: 50px;
  font-size: ${fontSizes.m};
  box-sizing: border-box;
  border: 2px solid ${colors.lightNeutral};
  border-radius: 5px;
  text-align: center;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const NumberInput = (props) => (
  <Input data-testid="input" type="number" min="0" {...props} />
);
