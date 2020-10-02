import React, { useState } from "react";

import { ProductCounter } from "./ProductCounter";

export default {
  title: "ShoppingCart/Molecules/ProductCounter",
  component: ProductCounter,
};

const Template = (args) => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <ProductCounter value={value} onChange={setValue} {...args} />
    </div>
  );
};
export const CounterWithButtons = Template.bind({});
CounterWithButtons.args = {};
