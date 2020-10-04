import React, { useState } from "react";

import { ShoppingCartPagePure } from "./ShoppingCartPage";

const mockProducts = {
  FOO: {
    code: "FOO",
    price: 10,
    discounts: ["50PERCENT"],
    name: "Foo",
    counter: 0,
    imageUrl: "/assets/cap.png",
  },
  BAR: {
    code: "BAR",
    price: 5,
    discounts: ["50PERCENT", "30PERCENT"],
    name: "Bar",
    counter: 0,
    imageUrl: "/assets/cap.png",
  },
  BIZ: {
    code: "BIZ",
    price: 1,
    name: "Biz",
    counter: 0,
    imageUrl: "/assets/cap.png",
  },
};

export default {
  title: "ShoppingCart/Pages/ShoppingCartPage",
  component: ShoppingCartPagePure,
};

const Template = (args) => {
  const [products, setProducts] = useState(mockProducts);
  const onProductCounterChange = (productCode, value) =>
    setProducts({
      ...products,
      [productCode]: { ...products[productCode], counter: value },
    });
  return (
    <div style={{ width: "100%", height: "95vh" }}>
      <ShoppingCartPagePure
        products={Object.values(products)}
        onProductCounterChange={onProductCounterChange}
        {...args}
      />
    </div>
  );
};

export const ShoppingCartPageExample = Template.bind({});
ShoppingCartPageExample.args = {
  totalCost: 107,
  totalCostWithoutDiscount: 120,
  totalItems: 11,
  discounts: [
    {
      description: "2x1 Mug offer",
      value: 10,
    },
    {
      description: "x3 Shirt offer",
      value: 3,
    },
  ],
};
