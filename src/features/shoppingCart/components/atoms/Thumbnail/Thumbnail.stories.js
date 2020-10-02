import React from "react";


import { Thumbnail } from "./Thumbnail";

export default {
  title: "ShoppingCart/Atoms/Thumbnail",
  component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const BorderedThumbnail = Template.bind({});
BorderedThumbnail.args = {
  src: '/assets/cap.png'
};
