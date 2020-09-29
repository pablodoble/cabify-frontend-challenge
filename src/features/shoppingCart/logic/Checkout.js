export class Checkout {
  products;
  discounts;
  productCounters = {};

  constructor(pricingRules) {
    const { products, discounts } = pricingRules;
    this.products = products;
    this.discounts = discounts;
    Object.keys(products).forEach((productCode) => {
      this.productCounters[productCode] = 0;
    });
  }

  getProductDiscountValue(productCode) {
    if (!this.products[productCode]) {
      throw new Error(
        `Error: product ${productCode} is not an available product`
      );
    }

    const { price, discounts = [] } = this.products[productCode];
    const counter = this.productCounters[productCode];
    return discounts.reduce(
      (totalDiscount, discountCode) =>
        totalDiscount +
        this.discounts[discountCode].getDiscountValue(price, counter),
      0
    );
  }

  scan(productCode) {
    if (!this.products[productCode]) {
      throw new Error(
        `Error: product ${productCode} is not an available product`
      );
    }

    this.productCounters[productCode]++;
    return this;
  }

  total() {
    return Object.entries(this.productCounters).reduce(
      (total, [productCode, counter]) => {
        const { price } = this.products[productCode];
        const productTotal = price * counter;
        const productDiscount = this.getProductDiscountValue(productCode);
        return total + (productTotal - productDiscount);
      },
      0
    );
  }
}
