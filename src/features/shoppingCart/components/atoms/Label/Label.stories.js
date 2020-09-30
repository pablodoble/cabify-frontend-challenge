import React from "react";

import { Label } from "./Label";

export default {
  title: "Example/Label",
  component: Label,
};

const Template = (args) => <Label {...args}>Foo</Label>;

export const NeutralLabel = Template.bind({});
NeutralLabel.args = {};

export const LightNeutralLabel = Template.bind({});
LightNeutralLabel.args = {
  color: "lightNeutral",
};

export const PrimaryLabel = Template.bind({});
PrimaryLabel.args = {
  color: "primary",
};

export const BoldLabel = Template.bind({});
BoldLabel.args = {
  bold: true,
};
