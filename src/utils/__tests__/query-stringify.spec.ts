import {queryStringify} from "../query-stringify";

describe("queryStringify", function() {
    const validInput = {
        key: 1,
        key2: "test",
        key3: false,
        key4: true,
        key5: [1, 2, 3],
        key6: { a: 1 },
        key7: { b: { d: 2 } },
        key8: { x: { y: { z: 4 } }, a: 1 },
        key9: [1, { a: 2 }, 3]
    };

    const validInputEmpty = {};

    const invalidInput = "invalid input";

    const validOutput = "key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2&key8[x][y][z]=4&key8[a]=1&key9[0]=1&key9[1][a]=2&key9[2]=3";

    it("return string if called with valid arg", function() {
        expect(queryStringify(validInput)).toBe(validOutput);
    });

    it("return empty string if called with valid arg empty", function() {
        expect(queryStringify(validInputEmpty)).toBe("");
    });

    it("should throw an error if called with invalid arg", function() {
        expect(() => queryStringify(invalidInput as any)).toThrow('input must be an object');
    });
});
