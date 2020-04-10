import { checkInput } from "../js/checkInput.js";

describe("checkInput() is declared?", () => {
  it("True is the expected value", () => {
    expect(checkInput).toBeDefined();
  });
});
describe("checkInput() is a function?", () => {
  it("True is the expected value", () => {
    expect(typeof checkInput).toBe("function");
  });
});
