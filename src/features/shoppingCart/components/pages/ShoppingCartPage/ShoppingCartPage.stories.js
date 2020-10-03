import React from "react";

import { ShoppingCartPage } from "./ShoppingCartPage";

export default {
  title: "ShoppingCart/Pages/ShoppingCartPage",
  component: ShoppingCartPage,
};

const Template = (args) => (
  <div style={{ width: "100%", height: "95vh" }}>
    <ShoppingCartPage {...args} />
  </div>
);

export const ShoppingCartExample = Template.bind({});
ShoppingCartExample.args = {};
