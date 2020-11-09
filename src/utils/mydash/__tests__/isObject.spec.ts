import { isObject } from "../isObject";

describe("isObject", function () {
    it("should return true if arg is object", function () {
        expect(isObject({})).toBe(true);
    });

    it("should return false if arg is not object", function () {
        expect(isObject("2")).toBe(false);
        expect(isObject(2)).toBe(false);
        expect(isObject(true)).toBe(false);
    });
});
