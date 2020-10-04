import React from "react";
import styled from "styled-components";
import { ProductRow } from "../../molecules/ProductRow/ProductRow";
import { Label } from "../../atoms/Label/Label";
import { Divider } from "../../atoms/Divider/Divider";

const ProductRowHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 20% 20%;
  padding: 15px 0;
`;

const ProductColumnRow = styled.div`
  grid-column-start: ${({ colNumber }) => colNumber};
  &:not(:first-child) {
    text-align: center;
  }
  &:last-child {
    text-align: right;
  }
`;

const QuantityLabel = styled(Label)`
  padding-right: 9px; /* not really pretty, but the counter is not being perfectly aligned for some reason */
`;

const ProductsHeader = () => (
  <ProductRowHeaderContainer templateColumns="40% 20% 20% 20%">
    <ProductColumnRow colNumber={1}>
      <Label color="lightNeutral">PRODUCT DETAILS</Label>
    </ProductColumnRow>
    <ProductColumnRow colNumber={2}>
      <QuantityLabel color="lightNeutral">QUANTITY</QuantityLabel>
    </ProductColumnRow>
    <ProductColumnRow colNumber={3}>
      <Label color="lightNeutral">PRICE</Label>
    </ProductColumnRow>
    <ProductColumnRow colNumber={4}>
      <Label color="lightNeutral">TOTAL</Label>
    </ProductColumnRow>
  </ProductRowHeaderContainer>
);

export const ProductList = (props) => {
  const { products = [], onProductCounterChange, onProductImageClick } = props;
  const onProductCounterChangeFactory = (productCode) => (value) =>
    onProductCounterChange(productCode, value);
  const onProductImageClickFactory = (productCode) => () =>
    onProductImageClick(productCode);

  return (
    <div data-testid="product-list">
      <div>
        <Label bold size="xxl">
          Shopping cart
        </Label>
      </div>
      <Divider />
      <ProductsHeader />
      {products.map((product) => (
        <ProductRow
          key={product.code}
          imageUrl={product.imageUrl}
          name={product.name}
          code={product.code}
          counter={product.counter}
          price={product.price}
          total={product.price * (product.counter || 0)}
          onCounterChange={onProductCounterChangeFactory(product.code)}
          onImageClick={onProductImageClickFactory(product.code)}
        />
      ))}
    </div>
  );
};
