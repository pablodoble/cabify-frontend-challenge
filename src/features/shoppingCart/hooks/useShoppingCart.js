import { useSelector, useDispatch } from "react-redux";
import {
  selectShoppingCartState,
  selectTotalProductsCounter,
  shoppingCartSlice,
} from "../state/shoppingCartSlice";
import { Checkout } from "../logic/Checkout";
import productDescriptors from "../descriptors/products";
import { discounts as discountDescriptors } from "../descriptors/discounts";

export const useShoppingCart = () => {
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

  return {
    totalItems,
    totalCost,
    totalCostWithoutDiscount,
    discounts,
    products,
    onProductCounterChange,
  };
};
