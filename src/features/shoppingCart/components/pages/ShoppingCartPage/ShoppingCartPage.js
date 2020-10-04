import React from "react";
import styled from "styled-components";
import { ShoppingCart } from "../../templates/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import {
  selectShoppingCartState,
  selectTotalProductsCounter,
  shoppingCartSlice,
} from "../../../state/shoppingCartSlice";
import { Checkout } from "../../../logic/Checkout";
import productDescriptors from "../../../../../app/products";
import { discounts as discountDescriptors } from "../../../logic/discounts";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/background.png");
  background-color: #212240;
  height: 100%;
`;

const ShoppingCartContainer = styled.div`
  height: 80%;
  width: 80%;
`;

/**
 * This component has been extracted just for testing purposes
 * since it's the recomended way in Storybook's docs
 */
export const ShoppingCartPagePure = (props) => (
  <Background>
    <ShoppingCartContainer>
      <ShoppingCart {...props} />
    </ShoppingCartContainer>
  </Background>
);

export const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const productCounters = useSelector(selectShoppingCartState);
  const totalItems = useSelector(selectTotalProductsCounter);

  const products = Object.values(productDescriptors).map((product) => ({
    ...product,
    counter: productCounters[product.code],
  }));
  const checkout = new Checkout({
    products: productDescriptors,
    discounts: discountDescriptors,
  });
  products.forEach((product) => {
    let i;
    for (i = 0; i < product.counter; i++) {
      checkout.scan(product.code);
    }
  });
  const totalCost = checkout.total();
  const totalCostWithoutDiscount = checkout.totalWithoutDiscount();
  const discounts = checkout.getAllDiscounts();

  const onProductCounterChange = (productCode, counter) => {
    dispatch(
      shoppingCartSlice.actions.setProductCounter({
        productCode,
        counter,
      })
    );
  };

  const onProductImageClick = () => {
    // TODO: open product detail
  };

  return (
    <ShoppingCartPagePure
      totalCost={totalCost}
      totalCostWithoutDiscount={totalCostWithoutDiscount}
      totalItems={totalItems}
      discounts={discounts}
      products={products}
      onProductCounterChange={onProductCounterChange}
      onProductImageClick={onProductImageClick}
    />
  );
};
