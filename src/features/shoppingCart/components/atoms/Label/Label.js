import styled from "styled-components";

const sizes = {
  s: "1em",
  m: "1.5em",
  l: "2em",
};

const colors = {
  neutral: "black",
  lightNeutral: "lightgrey",
  primary: "#7350ff",
};

export const Label = styled.span`
  font-family: Avenir, "Avenir Next", "Segoe UI", sans-serif;
  font-weight: ${({ bold }) => (bold ? "bold" : "regular")};
  font-size: ${({ size = "m" }) => sizes[size] || size.m};
  color: ${({ color = "neutral" }) => colors[color] || colors.neutral};
`;
