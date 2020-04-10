import { getImage } from "../js/getImage.js";

describe("getImage() is declared?", () => {
  it("True is the expected value", () => {
    expect(getImage).toBeDefined();
  });
});
describe("getImage() is a function?", () => {
  it("True is the expected value", () => {
    expect(typeof getImage).toBe("function");
  });
});
