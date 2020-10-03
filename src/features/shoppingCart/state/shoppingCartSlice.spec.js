import reducer, {
  shoppingCartSlice,
  initialState,
  selectProductCounter,
  selectTotalProductsCounter,
} from "./shoppingCartSlice";

describe("shoppingCartSlice", () => {
  describe("reducer", () => {
    describe("setProductCounter action", () => {
      it("should add 1 to the counter of the specified product", () => {
        const action = {
          type: shoppingCartSlice.actions.setProductCounter.type,
          payload: { productCode: "TSHIRT", counter: 3 },
        };
        const resultState = reducer(initialState, action);
        expect(resultState.TSHIRT).toEqual(3);
      });
    });
  });

  describe("selectors", () => {
    describe("selectProductCounter", () => {
      it("should return the current counter for the given productCode", () => {
        const selectResult = selectProductCounter("MUG")({
          shoppingCart: { MUG: 4 },
        });
        expect(selectResult).toEqual(4);
      });
    });
    describe("selectTotalProductsCounter", () => {
      it("should return the total number of products in the cart", () => {
        const selectResult = selectTotalProductsCounter({
          shoppingCart: { MUG: 4, TSHIRT: 5, CAP: 1 },
        });
        expect(selectResult).toEqual(10);
      });
    });
  });
});
