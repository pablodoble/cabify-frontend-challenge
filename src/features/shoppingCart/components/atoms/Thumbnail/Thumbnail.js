import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

const { colors } = theme;

const AdaptedImg = styled.img`
  height: 100%;
  border: 2px solid ${colors.lightNeutral};
  border-radius: 5px;
`;

export const Thumbnail = (props) => {
  const { src, alt = "thumbnail", onClick = () => {} } = props;
  return (
    <AdaptedImg data-testid="thumbnail" alt={alt} src={src} onClick={onClick} />
  );
};
