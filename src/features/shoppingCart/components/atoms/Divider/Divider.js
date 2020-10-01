import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

const { colors } = theme;

const DividerContainer = styled.div`
  padding: 15px 10px;
`;

const DividerContent = styled.div`
  height: 1px;
  background-color: ${colors.lightNeutral};
`;

export const Divider = () => (
  <DividerContainer data-testid="divider-container">
    <DividerContent data-testid="divider-content"></DividerContent>
  </DividerContainer>
);
