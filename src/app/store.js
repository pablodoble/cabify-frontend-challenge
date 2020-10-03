import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "../features/shoppingCart/state/shoppingCartSlice";

export default configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
  },
});
