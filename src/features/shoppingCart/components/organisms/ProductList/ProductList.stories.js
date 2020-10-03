import React, { useState } from "react";

import { ProductList } from "./ProductList";

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
  title: "ShoppingCart/Organisms/ProductList",
  component: ProductList,
};

const Template = (args) => {
  const [products, setProducts] = useState(mockProducts);
  const onProductCounterChange = (productCode, value) =>
    setProducts({
      ...products,
      [productCode]: { ...products[productCode], counter: value },
    });
  return (
    <div style={{ width: "1000px" }}>
      <ProductList
        products={Object.values(products)}
        onProductCounterChange={onProductCounterChange}
        {...args}
      />
    </div>
  );
};

export const ProductListExample = Template.bind({});
ProductListExample.args = {};
