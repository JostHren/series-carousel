import { getRandomFromArray } from "./getRandom";

describe("getRandom", () => {
  it("getRandom should return array of desired length", () => {
    const result = getRandomFromArray([1, 2, 3, 4, 5], 2);

    expect(result.length).toBe(2);
  });

  it("getRandom should whole array if desired length is shorter than array itself", () => {
    const result = getRandomFromArray([1, 2, 3], 4);

    expect(result.length).toBe(3);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
