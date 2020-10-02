import React from "react";

import { Divider } from "./Divider";

export default {
  title: "ShoppingCart/Atoms/Divider",
  component: Divider,
};

const Template = (args) => (
  <div style={{ width: "500px" }}>
    <Divider {...args} />
  </div>
);

export const ElementsDivider = Template.bind({});
ElementsDivider.args = {};
