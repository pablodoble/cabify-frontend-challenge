import React from "react";

import { NumberInput } from "./NumberInput";

export default {
  title: "ShoppingCart/Atoms/NumberInput",
  component: NumberInput,
};

const Template = (args) => <NumberInput {...args} />;

export const NaturalNumberInput = Template.bind({});
NaturalNumberInput.args = {
  type: 'number'
};
