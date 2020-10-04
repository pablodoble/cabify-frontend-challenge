import React from "react";

import { ProductDetail } from "./ProductDetail";

export default {
  title: "ShoppingCart/Templates/ProductDetail",
  component: ProductDetail,
};

const Template = (args) => {
  return (
    <div style={{ width: "1200px" }}>
      <ProductDetail {...args} />
    </div>
  );
};
export const ProductDetailExample = Template.bind({});
ProductDetailExample.args = {
  name: "Foo",
  price: 20,
  description:
    "Lorem fistrum se calle ustée sexuarl a wan diodenoo va usté muy cargadoo a gramenawer se calle ustée papaar papaar pupita. Papaar papaar por la gloria de mi madre benemeritaar pupita sexuarl te voy a borrar el cerito torpedo tiene musho peligro torpedo condemor",
  code: "ASDF123",
  onAddToCart: () => {},
  imageUrl: "/assets/big/tshirt.jpg",
};
