import { isArray } from "../isArray";

describe("isArray", function () {
    it("should return true if arg is array", function () {
        expect(isArray([])).toBe(true);
    });

    it("should return false if arg is not array", function () {
        expect(isArray("2")).toBe(false);
        expect(isArray(2)).toBe(false);
        expect(isArray(true)).toBe(false);
    });
});
