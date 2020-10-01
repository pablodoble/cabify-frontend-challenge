import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

const { colors, fontSizes } = theme;

export const Label = styled.span`
  font-weight: ${({ bold }) => (bold ? "bold" : "regular")};
  font-size: ${({ size = "m" }) => fontSizes[size] || size.m};
  color: ${({ color = "neutral" }) => colors[color] || colors.neutral};
`;
