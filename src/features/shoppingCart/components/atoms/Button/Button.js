import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

const { colors, fontSizes } = theme;

export const Button = styled.div.attrs({ "data-testid": "button" })`
  padding: 15px;
  font-weight: bold;
  font-size: ${({ fontSize = "l" }) => fontSizes[fontSize]};
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    colors[props.backgroundColor] || colors.primary};
  color: ${(props) => colors[props.color] || colors.invertedNeutral};
`;
