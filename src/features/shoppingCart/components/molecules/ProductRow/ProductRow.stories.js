import React, { useState } from "react";

import { ProductRow } from "./ProductRow";

export default {
  title: "ShoppingCart/Molecules/ProductRow",
  component: ProductRow,
};

const Template = (args) => {
  const [counter, setCounter] = useState(0);
  const { price } = args;
  return (
    <div style={{ width: "800px" }}>
      <ProductRow
        {...args}
        counter={counter}
        total={counter * price}
        onCounterChange={setCounter}
      />
    </div>
  );
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  thumbnailUrl: "/assets/cap.png",
  name: "Cap",
  code: "ASDF123",
  price: 5,
};
