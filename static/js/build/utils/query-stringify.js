var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { isArray } from "./mydash/isArray.js";
import { isObject } from "./mydash/isObject.js";
import { isEmpty } from "./mydash/isEmpty.js";
function createPair(key, value) {
    return [key, value];
}
function createPairsFromArray(arr, key) {
    return arr.map(function (el, i) {
        if (isObject(arr[i]) && !isEmpty(arr[i])) {
            return createPairsFromObject(arr[i], key + "[" + i + "]").flat();
        }
        return createPair(key + "[" + i + "]", el);
    });
}
function createPairsFromObject(obj, key) {
    var result = [];
    Object.keys(obj).forEach(function (k) {
        if (isObject(obj[k]) && !isEmpty(obj[k])) {
            result.push.apply(result, __spreadArrays(result, createPairsFromObject(obj[k], key + "[" + k + "]")));
        }
        else {
            result.push(createPair(key + "[" + k + "]", obj[k]));
        }
    });
    return result;
}
export function queryStringify(data) {
    if (!isObject(data))
        throw new Error("input must be an object");
    if (isEmpty(data))
        return "";
    var result = [];
    Object.keys(data).forEach(function (key) {
        if (isArray(data[key]) && !isEmpty(data[key])) {
            result = __spreadArrays(result, createPairsFromArray(data[key], key));
        }
        else if (isObject(data[key]) && !isEmpty(data[key])) {
            result = __spreadArrays(result, createPairsFromObject(data[key], key));
        }
        else {
            result.push(createPair(key, data[key]));
        }
    });
    return result.map(function (el) { return el[0] + "=" + el[1]; }).join("&");
}
//# sourceMappingURL=query-stringify.js.map