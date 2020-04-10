import { cleanUI } from "../js/cleanUI.js";

describe("cleanUI() is declared?", () => {
  it("True is the expected value", () => {
    expect(cleanUI).toBeDefined();
  });
});
describe("cleanUI() is a function?", () => {
  it("True is the expected value", () => {
    expect(typeof cleanUI).toBe("function");
  });
});
