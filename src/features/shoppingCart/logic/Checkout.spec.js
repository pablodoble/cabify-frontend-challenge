import { Checkout } from "./Checkout";

const pricingRules = {
  discounts: {
    "50PERCENT": {
      code: "50PERCENT",
      getDiscountValue: (price, count) => price * count * 0.5,
    },
    "30PERCENT": {
      code: "30PERCENT",
      getDiscountValue: (price, count) => price * count * 0.3,
    },
  },
  products: {
    foo: {
      code: "foo",
      price: 10,
      discounts: ["50PERCENT"],
    },
    bar: {
      code: "bar",
      price: 5,
      discounts: ["50PERCENT", "30PERCENT"],
    },
    biz: {
      code: "biz",
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

  describe("getProductDiscountValue method", () => {
    it("should throw an error if an available product is passed to scan method", () => {
      expect(() => co.getProductDiscountValue("hey")).toThrow(
        "Error: product hey is not an available product"
      );
    });

    it("should return 0 if no discounts are available on a product", () => {
      expect(co.getProductDiscountValue("biz")).toEqual(0);
    });

    it("should return the applied discount to the given product", () => {
      co.scan("foo").scan("foo").scan("foo");
      expect(co.getProductDiscountValue("foo")).toEqual(15);
    });

    it("should return the applied discounts (more than 1) to the given product", () => {
      co.scan("bar").scan("bar").scan("bar");
      expect(co.getProductDiscountValue("bar")).toEqual(12);
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
