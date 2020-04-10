import { getWeather } from "../js/getWeather.js";

describe("getWeather() is declared?", () => {
  it("True is the expected value", () => {
    expect(getWeather).toBeDefined();
  });
});
describe("getWeather() is a function?", () => {
  it("True is the expected value", () => {
    expect(typeof getWeather).toBe("function");
  });
});
