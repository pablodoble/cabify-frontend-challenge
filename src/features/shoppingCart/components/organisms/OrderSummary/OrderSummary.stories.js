import React from "react";
import { OrderSummary } from "./OrderSummary";

export default {
  title: "ShoppingCart/Organisms/OrderSummary",
  component: OrderSummary,
};

const Template = (args) => {
  return (
    <div style={{ width: "350px", height: "90vh" }}>
      <OrderSummary {...args} />
    </div>
  );
};

export const OrderySummaryExample = Template.bind({});
OrderySummaryExample.args = {
  totalCost: 107,
  totalCostWithoutDiscount: 120,
  totalItems: 11,
  discounts: [
    {
      description: "2x1 Mug offer",
      value: -10,
    },
    {
      description: "x3 Shirt offer",
      value: -3,
    },
  ],
};
