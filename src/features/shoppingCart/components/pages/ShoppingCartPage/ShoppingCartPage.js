import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { ShoppingCart } from "../../templates/ShoppingCart/ShoppingCart";
import { useShoppingCart } from "../../../hooks/useShoppingCart";
import { ProductDetail } from "../../templates/ProductDetail/ProductDetail";

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

const modalStyles = {
  content: {
    height: "fit-content",
    width: "70%",
    top: "13%",
    left: "13%",
    padding: "0",
  },
};

/**
 * This component has been extracted just for testing purposes
 * since it's the recomended way in Storybook's docs
 */
export const ShoppingCartPagePure = (props) => {
  const { products, onProductCounterChange } = props;
  const [openProduct, setOpenProduct] = useState(undefined);

  const selectedProduct =
    products.find((product) => product.code === openProduct) || {};

  const onProductImageClick = (productCode) => {
    setOpenProduct(productCode);
  };

  const closeModal = () => {
    setOpenProduct(undefined);
  };

  const onAddProductToCart = (productCode, productCounter) => () => {
    onProductCounterChange(productCode, productCounter + 1);
    setOpenProduct(undefined);
  };

  return (
    <Background>
      <ShoppingCartContainer>
        <Modal
          isOpen={openProduct !== undefined}
          onRequestClose={closeModal}
          style={modalStyles}
          contentLabel="Example Modal"
        >
          <ProductDetail
            imageUrl={selectedProduct.imageUrl}
            name={selectedProduct.name}
            price={selectedProduct.price}
            description={selectedProduct.description}
            code={selectedProduct.code}
            onAddToCart={onAddProductToCart(
              selectedProduct.code,
              selectedProduct.counter
            )}
          />
        </Modal>
        <ShoppingCart onProductImageClick={onProductImageClick} {...props} />
      </ShoppingCartContainer>
    </Background>
  );
};

export const ShoppingCartPage = () => {
  const {
    totalItems,
    totalCost,
    totalCostWithoutDiscount,
    discounts,
    products,
    onProductCounterChange,
  } = useShoppingCart();

  return (
    <ShoppingCartPagePure
      totalCost={totalCost}
      totalCostWithoutDiscount={totalCostWithoutDiscount}
      totalItems={totalItems}
      discounts={discounts}
      products={products}
      onProductCounterChange={onProductCounterChange}
    />
  );
};
