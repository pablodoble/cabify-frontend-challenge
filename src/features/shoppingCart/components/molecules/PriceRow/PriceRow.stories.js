import React from "react";

import { PriceRow } from "./PriceRow";

export default {
  title: "ShoppingCart/Molecules/PriceRow",
  component: PriceRow,
};

const Template = (args) => {
  return (
    <div style={{ width: "300px" }}>
      <PriceRow {...args} />
    </div>
  );
};
export const PriceRowExample = Template.bind({});
PriceRowExample.args = {
  description: "Some description",
  value: 10,
};
