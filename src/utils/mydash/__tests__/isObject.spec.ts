import {isObject} from "../isObject";
import { expect } from 'chai';
import 'mocha';

describe("isObject", function() {
    it("when value is object expect true", function() {
        expect(isObject({})).to.be.true;
    });

    it("when value is primitive expect false", function() {
        expect(isObject('2')).to.be.false;
        expect(isObject(2)).to.be.false;
        expect(isObject(true)).to.be.false;
    });
});
