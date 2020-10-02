import React from "react";
import styled from "styled-components";
import { Thumbnail } from "../../atoms/Thumbnail/Thumbnail";
import { Label } from "../../atoms/Label/Label";
import { ProductCounter } from "../ProductCounter/ProductCounter";

const ProductRowContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 20% 20% 20%;
  padding: 15px 0;
`;

const ProductRowColumn = styled.div`
  grid-column-start: ${({ colNumber }) => colNumber};
`;

const Aligner = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent = "start" }) => justifyContent};
  height: 100%;
`;

const LabelsContainer = styled.div`
  padding-left: 10px;
`;

export const ProductRow = (props) => {
  const {
    imageUrl,
    name,
    code,
    counter,
    price,
    total,
    onCounterChange,
    onImageClick,
  } = props;

  return (
    <ProductRowContainer data-testid={`${code}-row`}>
      <ProductRowColumn colNumber={1}>
        <Aligner>
          <Thumbnail src={imageUrl} alt={name} onClick={onImageClick} />
        </Aligner>
      </ProductRowColumn>
      <ProductRowColumn colNumber={2}>
        <Aligner>
          <LabelsContainer>
            <div>
              <Label bold size="l" color="primary">
                {name}
              </Label>
            </div>
            <div>
              <Label color="lightNeutral">Product code {code}</Label>
            </div>
          </LabelsContainer>
        </Aligner>
      </ProductRowColumn>
      <ProductRowColumn colNumber={3}>
        <Aligner justifyContent="center">
          <ProductCounter value={counter} onChange={onCounterChange} />
        </Aligner>
      </ProductRowColumn>
      <ProductRowColumn colNumber={4}>
        <Aligner justifyContent="center">
          <Label bold size="l">
            {price} €
          </Label>
        </Aligner>
      </ProductRowColumn>
      <ProductRowColumn colNumber={5}>
        <Aligner justifyContent="flex-end">
          <Label bold size="l">
            {total} €
          </Label>
        </Aligner>
      </ProductRowColumn>
    </ProductRowContainer>
  );
};
