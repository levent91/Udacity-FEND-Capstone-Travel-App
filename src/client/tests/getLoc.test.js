import { getLoc } from "../js/getLoc.js";

describe("getLoc() is declared?", () => {
  it("True is the expected value", () => {
    expect(getLoc).toBeDefined();
  });
});
describe("getLoc() is a function?", () => {
  it("True is the expected value", () => {
    expect(typeof getLoc).toBe("function");
  });
});
