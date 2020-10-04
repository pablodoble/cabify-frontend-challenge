export const discounts = {
  "2X1": {
    code: "2X1",
    getDescription: (productName) => `2x1 ${productName} offer`,
    getDiscountValue: (price, count) => Math.trunc(count / 2) * price,
  },
  BULK3: {
    code: "BULK3",
    getDescription: (productName) => `x3 ${productName} offer`,
    getDiscountValue: (price, count) => (count >= 3 ? price * count * 0.05 : 0),
  },
};
