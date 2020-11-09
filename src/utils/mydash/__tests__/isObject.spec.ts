import { isObject } from "../isObject";

describe("isObject", function () {
    it("should return true if arg is Object", function () {
        expect(isObject({})).toBe(true);
    });

    it("should return false if arg is String", function () {
        expect(isObject("2")).toBe(false);
    });

    it("should return false if arg is Number", function () {
        expect(isObject(2)).toBe(false);
    });

    it("should return false if arg is Boolean", function () {
        expect(isObject(true)).toBe(false);
    });
});
