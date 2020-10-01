import React from "react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => (
  <div style={{ width: "200px" }}>
    <Button {...args}>Foo</Button>
  </div>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {};

export const NeutralButton = Template.bind({});
NeutralButton.args = {
  backgroundColor: "neutral"
};

export const LightButton = Template.bind({});
LightButton.args = {
  backgroundColor: "lightNeutral",
  color: "neutral"
};
