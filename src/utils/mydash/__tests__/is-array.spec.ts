import { isArray } from "../is-array";

describe("isArray", function () {
    it("should return true if arg is Array", function () {
        expect(isArray([])).toBe(true);
    });

    it("should return false if arg is String", function () {
        expect(isArray("2")).toBe(false);
    });

    it("should return false if arg is Number", function () {
        expect(isArray(2)).toBe(false);
    });

    it("should return false if arg is Boolean", function () {
        expect(isArray(true)).toBe(false);
    });
});
