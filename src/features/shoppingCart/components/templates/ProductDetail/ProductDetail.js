import React from "react";
import styled from "styled-components";
import { ProductData } from "../../organisms/ProductData/ProductData";

const ProductDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 66% 34%;
  height: 100%;
`;

const ProductDetailColumn = styled.div`
  grid-column-start: ${({ colNumber }) => colNumber};
  padding: ${({ padding = "0" }) => padding};
`;

const ProductImage = styled.img`
  width: 100%;
`;

const Aligner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ProductDetail = (props) => {
  const { imageUrl, name, price, description, code, onAddToCart } = props;
  return (
    <ProductDetailGrid>
      <ProductDetailColumn colNumber={1}>
        <ProductImage alt={name} src={imageUrl} />
      </ProductDetailColumn>
      <ProductDetailColumn colNumber={2} padding="40px">
        <Aligner>
          <ProductData
            name={name}
            price={price}
            description={description}
            code={code}
            onAddToCart={onAddToCart}
          />
        </Aligner>
      </ProductDetailColumn>
    </ProductDetailGrid>
  );
};
