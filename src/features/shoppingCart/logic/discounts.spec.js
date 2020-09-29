import { discounts } from "./discounts";

describe("discounts", () => {
  describe("2X1", () => {
    const discount2x1 = discounts["2X1"];

    it("code is 2X1", () => {
      expect(discount2x1.code).toEqual("2X1");
    });

    it("getDescription returns '2x1 {productName} offer'", () => {
      expect(discount2x1.getDescription("foo")).toEqual("2x1 foo offer");
    });

    it("does not apply any discount if passed than 2 products", () => {
      expect(discount2x1.getDiscountValue(20, 1)).toEqual(0);
    });

    it("applies a 50% discount if an even number of products are passed", () => {
      expect(discount2x1.getDiscountValue(20, 4)).toEqual(40);
    });

    it("applies the same discount as its previous even number if an odd number of products are passed", () => {
      expect(discount2x1.getDiscountValue(20, 5)).toEqual(40);
    });
  });

  describe("BULK3", () => {
    const discountBulk3 = discounts["BULK3"];

    it("code is BULK3", () => {
      expect(discountBulk3.code).toEqual("BULK3");
    });

    it("getDescription returns x3 {productName} offer", () => {
      expect(discountBulk3.getDescription("bar")).toEqual("x3 bar offer");
    });

    it("does not apply a discount if less than 3 products are passed", () => {
      expect(discountBulk3.getDiscountValue(10, 2)).toEqual(0);
    });

    it("applies a discount of 5% if 3 products or more are passed", () => {
      expect(discountBulk3.getDiscountValue(10, 5)).toEqual(2.5);
    });
  });
});
