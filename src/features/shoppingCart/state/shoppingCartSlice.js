import { createSlice } from "@reduxjs/toolkit";
import products from "../../../app/products";

export const initialState = Object.keys(products).reduce(
  (acc, productCode) => ({
    ...acc,
    [productCode]: 0,
  }),
  {}
);

// SLICE
export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { productCode } = action.payload;
      state[productCode]++;
    },
    removeProduct: (state, action) => {
      const { productCode } = action.payload;
      state[productCode]--;
    },
  },
});

// SELECTORS
export const selectProductCounter = (productCode) => (state) =>
  state.shoppingCart[productCode];

export const selectTotalProductsCounter = (state) =>
  Object.values(state.shoppingCart).reduce(
    (totalProducts, currentProductAmount) =>
      totalProducts + currentProductAmount,
    0
  );

export default shoppingCartSlice.reducer;
