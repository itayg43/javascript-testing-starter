import { describe, expect, it } from "vitest";
import { calculateAvg, factorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first arg if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second arg if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first arg if args are equal", () => {
    expect(max(2, 2)).toBe(2);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if arg is divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return Buzz if arg is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return arg as a string if it is not divisible by 3 or 5", () => {
    expect(fizzBuzz(22)).toBe("22");
  });
});

describe("calculateAvg", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAvg([])).toBe(NaN);
  });

  it("should calculate the avg of an array with a single element", () => {
    expect(calculateAvg([1])).toBe(1);
  });

  it("should calculate the avg of an array with a two elements", () => {
    expect(calculateAvg([1, 2])).toBe(1.5);
  });

  it("should calculate the avg of an array with a three elements", () => {
    expect(calculateAvg([1, 2, 3])).toBe(2);
  });
});

describe("factorial", () => {
  it("should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if given 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 if given 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 if given 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 if given 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefined if given negative number", () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
