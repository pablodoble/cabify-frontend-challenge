import { Checkout } from "./Checkout";

const pricingRules = {
  discounts: {
    "50PERCENT": {
      code: "50PERCENT",
      getDescription: (productName) => `50% on ${productName}`,
      getDiscountValue: (price, count) => price * count * 0.5,
    },
    "30PERCENT": {
      code: "30PERCENT",
      getDescription: (productName) => `30% on ${productName}`,
      getDiscountValue: (price, count) => price * count * 0.3,
    },
  },
  products: {
    foo: {
      code: "foo",
      name: "Foo",
      price: 10,
      discounts: ["50PERCENT"],
    },
    bar: {
      code: "bar",
      name: "Bar",
      price: 5,
      discounts: ["50PERCENT", "30PERCENT"],
    },
    biz: {
      code: "biz",
      name: "Biz",
      price: 1,
    },
  },
};

describe("Checkout class", () => {
  let co;

  beforeEach(() => {
    co = new Checkout(pricingRules);
  });

  describe("constructor", () => {
    it("should create an initialised Checkout instance", () => {
      expect(co instanceof Checkout).toEqual(true);
      expect(co.products).toEqual(pricingRules.products);
      expect(co.discounts).toEqual(pricingRules.discounts);
      expect(co.productCounters).toEqual({
        foo: 0,
        bar: 0,
        biz: 0,
      });
    });
  });

  describe("scan method", () => {
    it("should throw an error if an available product is passed to scan method", () => {
      expect(() => co.scan("hey")).toThrow(
        "Error: product hey is not an available product"
      );
    });

    it("should increase the counter of the given product when scan is called", () => {
      co.scan("foo");
      expect(co.productCounters.foo).toEqual(1);
    });

    it("should increase the counters of the given products when scan is chained", () => {
      co.scan("foo")
        .scan("foo")
        .scan("bar")
        .scan("foo")
        .scan("bar")
        .scan("foo");

      expect(co.productCounters.foo).toEqual(4);
      expect(co.productCounters.bar).toEqual(2);
      expect(co.productCounters.biz).toEqual(0);
    });
  });

  describe("getProductTotalDiscountValue method", () => {
    it("should throw an error if an available product is passed to scan method", () => {
      expect(() => co.getProductTotalDiscountValue("hey")).toThrow(
        "Error: product hey is not an available product"
      );
    });

    it("should return 0 if no discounts are available on a product", () => {
      expect(co.getProductTotalDiscountValue("biz")).toEqual(0);
    });

    it("should return the applied discount to the given product", () => {
      co.scan("foo").scan("foo").scan("foo");
      expect(co.getProductTotalDiscountValue("foo")).toEqual(15);
    });

    it("should return the applied discounts (more than 1) to the given product", () => {
      co.scan("bar").scan("bar").scan("bar");
      expect(co.getProductTotalDiscountValue("bar")).toEqual(12);
    });
  });

  describe("getProductDiscounts method", () => {
    it("should return an empty array if the given product has no discounts available", () => {
      expect(co.getProductDiscounts("biz")).toEqual([]);
    });

    it("should return an array of all the available discounts for this product in the format { description, value }", () => {
      co.scan("bar").scan("bar").scan("bar").scan("bar");

      expect(co.getProductDiscounts("bar")).toEqual([
        {
          description: "50% on Bar",
          value: 10,
        },
        {
          description: "30% on Bar",
          value: 6,
        },
      ]);
    });
  });

  describe("getAllDiscounts method", () => {
    it("should return an empty array if no discounts are available", () => {
      expect(co.getAllDiscounts()).toEqual([]);
    });

    it("should should return an array of all the available discounts for all products in the format { description, value }", () => {
      co.scan("foo")
        .scan("foo")
        .scan("foo")
        .scan("foo")
        .scan("bar")
        .scan("bar")
        .scan("biz");

      expect(co.getAllDiscounts()).toEqual([
        {
          description: "50% on Foo",
          value: 20,
        },
        {
          description: "50% on Bar",
          value: 5,
        },
        {
          description: "30% on Bar",
          value: 3,
        },
      ]);
    });
  });

  describe("totalWithoutDiscount method", () => {
    it("should return the total amount for the added products (discounts not applied)", () => {
      co.scan("foo")
        .scan("foo")
        .scan("foo")
        .scan("foo")
        .scan("bar")
        .scan("bar")
        .scan("biz");

      expect(co.totalWithoutDiscount()).toEqual(51);
    });
  });

  describe("total method", () => {
    it("should return 0 if no products have been scanned", () => {
      expect(co.total()).toEqual(0);
    });

    it("should return the total amount for the added products (discounts applied)", () => {
      co.scan("foo")
        .scan("foo")
        .scan("foo")
        .scan("foo")
        .scan("bar")
        .scan("bar")
        .scan("biz");

      expect(co.total()).toEqual(23);
    });
  });
});
