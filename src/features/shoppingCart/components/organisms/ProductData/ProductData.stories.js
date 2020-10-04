import React from "react";

import { ProductData } from "./ProductData";

export default {
  title: "ShoppingCart/Organisms/ProductData",
  component: ProductData,
};

const Template = (args) => {
  return (
    <div style={{ width: "300px" }}>
      <ProductData {...args} />
    </div>
  );
};
export const ProductDataExample = Template.bind({});
ProductDataExample.args = {
  name: "Foo",
  price: 20,
  description:
    "Lorem fistrum se calle ustée sexuarl a wan diodenoo va usté muy cargadoo a gramenawer se calle ustée papaar papaar pupita. Papaar papaar por la gloria de mi madre benemeritaar pupita sexuarl te voy a borrar el cerito torpedo tiene musho peligro torpedo condemor",
  code: "ASDF123",
  onAddToCart: () => {},
};
