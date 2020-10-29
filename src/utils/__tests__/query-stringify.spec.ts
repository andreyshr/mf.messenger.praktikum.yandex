import {queryStringify} from "../query-stringify";
import { expect } from 'chai';

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

    const validOutput = "key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2&key8[x][y][z]=4&key8[a]=1&key9[0]=1&key9[1][a]=2&key9[2]=3";

    it("возвращает строку с параметрами для data: StringIndexed", function() {
        expect(queryStringify(validInput)).to.equal(validOutput);
    });
});
