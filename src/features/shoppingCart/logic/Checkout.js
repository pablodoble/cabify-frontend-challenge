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

  /** Updates the product counter for the given product code */
  scan(productCode) {
    if (!this.products[productCode]) {
      throw new Error(
        `Error: product ${productCode} is not an available product`
      );
    }

    this.productCounters[productCode]++;
    return this;
  }

  /** Returns the discount value for all the discounts available for the given product code */
  getProductTotalDiscountValue(productCode) {
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

  /** Returns an array of discounts for the given product in format { description, value } */
  getProductDiscounts(productCode) {
    const product = this.products[productCode];
    return (
      product.discounts?.map((discountCode) => ({
        description: this.discounts[discountCode].getDescription(product.name),
        value: this.discounts[discountCode].getDiscountValue(
          product.price,
          this.productCounters[product.code]
        ),
      })) || []
    );
  }

  /** Returns an array containing all the discounts applied in the format { description, value } */
  getAllDiscounts() {
    const allDiscounts = Object.values(this.products).reduce((acc, product) => {
      const productDiscounts = this.getProductDiscounts(product.code);
      return [...acc, ...productDiscounts];
    }, []);

    return allDiscounts.filter((discount) => discount.value > 0);
  }

  /** Returns the total amount with no discounts */
  totalWithoutDiscount() {
    return Object.entries(this.productCounters).reduce(
      (total, [productCode, counter]) => {
        const { price } = this.products[productCode];
        const productTotal = price * counter;
        return total + productTotal;
      },
      0
    );
  }

  /** Returns the total amount with all the discounts applied */
  total() {
    return Object.entries(this.productCounters).reduce(
      (total, [productCode, counter]) => {
        const { price } = this.products[productCode];
        const productTotal = price * counter;
        const productDiscount = this.getProductTotalDiscountValue(productCode);
        return total + (productTotal - productDiscount);
      },
      0
    );
  }
}
